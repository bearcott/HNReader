import styled from "@emotion/styled";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Cell, NewsItem } from "./NewsItem";
import { FaCommentAlt } from "react-icons/fa";

export const Home = () => {
  const LIST_LENGTH = 7;
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const hello = await fetch(`/api/home?limit=${LIST_LENGTH}`);
      const data = await hello.json();
      setLoading(false);
      setNewsList(data);
    })();
  }, []);

  useEffect(() => {
    const checkScroll = async (e: Event) => {
      console.log(isLoading);
      if (isLoading) return;
      //if scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setLoading(true);
        const getMore = await fetch(
          `/api/home?limit=${newsList.length + LIST_LENGTH}`
        );
        const getMoreData = await getMore.json();
        setLoading(false);
        console.log(getMoreData);
        setNewsList(getMoreData);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [newsList]);

  return (
    <Wrapper>
      <NewsList>
        <Cell>#</Cell>
        <Cell>pts.</Cell>
        <Cell>cts.</Cell>
        <Cell>Title</Cell>
        {newsList.map((x, i) => {
          return <NewsItem key={i} data={x} index={i} />;
        })}
        {isLoading && <LoadingContainer>Loading...</LoadingContainer>}
      </NewsList>
    </Wrapper>
  );
};

const LoadingContainer = styled.div`
  grid-column: span 4;
  justify-content: center;
  padding: 10px;
`;

const Wrapper = styled.div`
  min-height: 110vh;
`;

const NewsList = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-gap: 15px;
  column-gap: 10px;
  grid-template-columns: auto auto auto 1fr;
`;

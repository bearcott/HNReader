import styled from "@emotion/styled";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Cell, NewsRow } from "./NewsRow";
import { FaCommentAlt } from "react-icons/fa";
import { ItemIndex } from "../Item";
import Link from "next/link";

export const Home = ({ itemId }) => {
  const LIST_LENGTH = 20;
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
      if (isLoading) return;
      //if scrolled to bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setLoading(true);
        const getMore = await fetch(
          `/api/home?limit=${newsList.length + LIST_LENGTH}`
        );
        const getMoreData = await getMore.json();
        setLoading(false);
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
        <Cell>title</Cell>
        {newsList.map((row, i) => {
          return <NewsRow key={row.id} data={row} index={i} />;
        })}
        {isLoading && <LoadingContainer>...</LoadingContainer>}
      </NewsList>
      {itemId && (
        <StoryWrapper>
          <Link href="/" scroll={false}>
            <Bg />
          </Link>
          <StoryWrapperInner>
            <ItemIndex id={itemId} />
          </StoryWrapperInner>
        </StoryWrapper>
      )}
    </Wrapper>
  );
};

const StoryWrapperInner = styled.div`
  max-width: 100%;
  width: 800px;
  margin-left: 100px;
  overflow: auto;
  overscroll-behavior: contain;

  height: 100%;
  box-shadow: -20px 0 40px -40px rgba(0, 0, 0, 0.3);
  background: #fff;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  z-index: -1;
`;

const StoryWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LoadingContainer = styled.div`
  grid-column: span 4;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  padding-bottom: 100px;
`;

const NewsList = styled.div`
  padding: 20px;
  width: 1000px;
  margin: auto;
  display: grid;
  grid-gap: 15px;
  column-gap: 10px;
  grid-template-columns: auto auto auto 1fr;
`;

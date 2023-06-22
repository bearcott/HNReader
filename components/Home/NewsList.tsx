import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Cell, CommentCell, NewsRow } from "./NewsRow";

export const NewsList = ({ newsList }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [timer, setTimer] = useState(null);
  const onScroll = async () => {
    if (timer) await clearTimeout(timer);
    await setIsScrolling(true);
    await setTimer(
      setTimeout(() => {
        setIsScrolling(false);
      }, 600)
    );
  };
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <Wrapper>
      <CommentCell>💬</CommentCell>
      <Cell>Title</Cell>
      {newsList.map((row, i) => {
        return (
          <NewsRow
            key={row.id}
            data={row}
            index={i}
            isScrolling={isScrolling}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
`;

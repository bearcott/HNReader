import styled from "@emotion/styled";
import React from "react";
import { Cell, CommentCell, NewsRow } from "./NewsRow";

export const NewsList = ({ newsList }) => {
  return (
    <Wrapper>
      <CommentCell>💬</CommentCell>
      <Cell>Title</Cell>
      {newsList.map((row, i) => {
        return <NewsRow key={row.id} data={row} index={i} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
`;

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Cell, CommentCell, NewsRow } from "./NewsRow";
import { useIsScrolling } from "../../helpers/effects";

export const NewsList = ({ newsList }) => {
  const isScrolling = useIsScrolling();

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

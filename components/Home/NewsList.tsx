import styled from "@emotion/styled";
import React from "react";
import { Cell, NewsRow } from "./NewsRow";

export const NewsList = ({ newsList }) => {
  return (
    <Wrapper>
      <Cell>#</Cell>
      <Cell>pts.</Cell>
      <Cell>cts.</Cell>
      <Cell>title</Cell>
      {newsList.map((row, i) => {
        return <NewsRow key={row.id} data={row} index={i} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 15px;
  column-gap: 10px;
  grid-template-columns: auto auto auto 1fr;
`;

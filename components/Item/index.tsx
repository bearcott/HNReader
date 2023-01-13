import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useInitialFetch } from "../../helpers/effects";
import { timeAgo } from "../../helpers/format";
import { Spacer } from "../Spacer";
import { CommentNode } from "./CommentNode";

export const ItemIndex = ({ id }) => {
  const [story, isLoading] = useInitialFetch(id && `/api/item?id=${id}`, [id]);

  if (isLoading) return <Wrapper>loading...</Wrapper>;

  const { by, score, time, title, descendants, kids, type, url } = story;

  const host = url ? new URL(url).host : undefined;

  return (
    <Wrapper>
      <h1>
        <a href={url} target="_blank">
          {title}
        </a>
      </h1>
      <h2>
        {timeAgo.format(time * 1000)} by {by}
        {" · "}
        {score} points
        {" · "}
        {descendants} comments
        {host && " · "}
        {host && <a href={url}>({host})</a>}
      </h2>
      <Spacer y={32} />
      <CommentList>
        {kids?.map((kid) => {
          return <CommentNode key={kid} id={kid} />;
        })}
      </CommentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  & > h1 {
    margin-bottom: 10px;
  }
  & > h2 {
    color: #888;
  }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useInitialFetch } from "../../helpers/effects";
import { timeAgo } from "../../helpers/format";
import { CommentNode } from "./CommentNode";

export const ItemIndex = ({ id }) => {
  const [story, isLoading] = useInitialFetch(id && `/api/item?id=${id}`, [id]);

  if (!story) return <Wrapper>loading...</Wrapper>;

  return (
    <Wrapper>
      <h1>{story.title}</h1>
      <h2>
        {timeAgo.format(story.time * 1000)}
        {" - "}
        {story.score} points - {story.descendants} comments
      </h2>
      <CommentList>
        {story.kids?.map((kid) => {
          return <CommentNode key={kid} id={kid} />;
        })}
      </CommentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
`;

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useInitialFetch } from "../../helpers/effects";
import { CommentNode } from "./CommentNode";

export const ItemIndex = ({ id }) => {
  const [story, isLoading] = useInitialFetch(id && `/api/item?id=${id}`, [id]);

  if (!story) return <Wrapper>loading...</Wrapper>;

  return (
    <Wrapper>
      {story.title}
      <CommentList>
        {story.kids.map((kid) => {
          return <CommentNode key={kid} id={kid} />;
        })}
      </CommentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800;
  width: 100%;
  padding: 20px;
  margin: auto;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
`;
import styled from "@emotion/styled";
import React from "react";
import { useInitialFetch } from "../../helpers/effects";
import { decodeHtml } from "../../helpers/format";

export const CommentNode = ({ id }) => {
  const [comment, isLoading] = useInitialFetch(id && `/api/item?id=${id}`);
  if (!comment) return <div>loading...</div>;

  return (
    <Wrapper>
      <div dangerouslySetInnerHTML={{ __html: comment.text }} />
      <KidsContainer>
        {comment?.kids?.map((kid) => {
          return <CommentNode key={kid} id={kid} />;
        })}
      </KidsContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
`;

const KidsContainer = styled.div`
  padding-left: 30px;
  border-left: 2px solid;
`;

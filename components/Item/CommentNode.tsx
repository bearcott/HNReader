import styled from "@emotion/styled";
import React, { useState } from "react";
import { useInitialFetch } from "../../helpers/effects";
import { decodeHtml, timeAgo } from "../../helpers/format";

export const CommentNode = ({ id }) => {
  const [comment, isLoading] = useInitialFetch(id && `/api/item?id=${id}`);
  const [collapsed, setCollapsed] = useState(false);

  if (!comment) return <div>loading...</div>;

  return (
    <Wrapper>
      <Header onClick={() => setCollapsed(!collapsed)}>
        {comment.by}
        {" · "}
        {timeAgo.format(comment.time * 1000)}
      </Header>
      <Collapser onClick={() => setCollapsed(!collapsed)}>
        <div />
      </Collapser>
      {!collapsed && (
        <Text dangerouslySetInnerHTML={{ __html: comment.text }} />
      )}
      <KidsContainer collapsed={collapsed}>
        {comment?.kids?.map((kid) => {
          return <CommentNode key={kid} id={kid} />;
        })}
      </KidsContainer>
    </Wrapper>
  );
};

const Text = styled.div`
  line-height: 1.5;
  pre {
    background: #eee;
    white-space: break-spaces;
  }
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

const Collapser = styled.div`
  padding: 0 14px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  div {
    border-left: 3px solid #eee;
    height: 100%;
  }
  &:hover div {
    border-left-style: dashed;
    border-color: #000;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Header = styled.div`
  display: flex;
  color: #bbb;
  &:hover {
    cursor: pointer;
    + ${Collapser} {
      border-left-style: dashed;
    }
  }
`;

const Wrapper = styled.div`
  margin: 10px 0;
  padding-left: 30px;
  position: relative;
`;

const KidsContainer = styled.div<{ collapsed?: boolean }>`
  position: relative;
  height: ${(props) => props.collapsed && "0"};
  overflow: hidden;
`;

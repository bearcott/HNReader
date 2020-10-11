import styled from "@emotion/styled";
import React, { useState } from "react";
import { useInitialFetch } from "../../helpers/effects";
import { decodeHtml } from "../../helpers/format";

export const CommentNode = ({ id }) => {
  const [comment, isLoading] = useInitialFetch(id && `/api/item?id=${id}`);
  const [collapsed, setCollapsed] = useState(false);

  if (!comment) return <div>loading...</div>;

  return (
    <Wrapper>
      <Collapser onClick={() => setCollapsed(!collapsed)}>
        <div />
      </Collapser>
      <Header onClick={() => setCollapsed(!collapsed)}>{comment.by}</Header>
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

const Header = styled.div`
  display: flex;
  color: #555;
  &:hover {
    cursor: pointer;
    background: #eee;
  }
`;

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
    border-left: 5px solid #f5f5f5;
    height: 100%;
  }
  &:hover div {
    border-left-style: dashed;
  }
  &:hover {
    cursor: pointer;
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

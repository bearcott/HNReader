import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next/link";
import { wrap } from "module";
import React, { useEffect, useState } from "react";
import { intDisplay, timeAgo } from "../../helpers/format";
import { useRouter } from "next/router";
import { Spacer } from "../Spacer";

export const NewsRow = ({ data, index, isScrolling }) => {
  const { id, by, score, time, title, type, descendants, url } = data;
  const router = useRouter();

  const host = url ? new URL(url).host : undefined;

  return (
    <>
      <Link href={`/item?id=${id}`} scroll={false}>
        <a>
          <Ranking index={index} visible={isScrolling} />
          {type !== "job" && (
            <CommentCell>{intDisplay(descendants)}</CommentCell>
          )}
        </a>
      </Link>

      <TitleCell>
        <h1>
          <a
            onClick={(e) => {
              if (!e.metaKey) {
                router.push(`/item?id=${id}`);
              }
            }}
            href={url}
            target="_blank"
          >
            {type === "job" ? <JobTitle>{title}</JobTitle> : title}
          </a>
        </h1>
        <Subtitle>
          {timeAgo.format(time * 1000)}
          {!url && ` by ${by}`}
          {host && " · "}
          {host && <a href={url}>({host})</a>}
        </Subtitle>
      </TitleCell>
    </>
  );
};

const Ranking: React.FC<{ index: number; visible: boolean }> = ({
  index,
  visible,
}) => {
  return (
    <RankingWrapper big={!((index + 1) % 5)} visible={visible}>
      {index + 1}
    </RankingWrapper>
  );
};

export const CommentCell: React.FC = ({ children }) => (
  <Cell gray style={{ alignItems: "flex-end", paddingRight: "4px" }}>
    <h1>
      ( <span style={{ color: "black" }}>{children}</span> )
    </h1>
  </Cell>
);

const JobTitle = ({ children }) => <CrossedOut>Job · [{children}]</CrossedOut>;

const CrossedOut = styled.span`
  text-decoration: line-through;
`;

const Subtitle = styled.h2`
  padding-top: 5px;
  color: #888;
  font-weight: normal;
`;

export const Cell = styled.div<{ gray?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px 2px;
  color: ${(props) => props.gray && "#ccc"};
`;

const RankingWrapper = styled.div<{ big?: boolean; visible?: boolean }>`
  position: absolute;
  padding-top: 6.5px;
  margin-left: -40px;
  text-align: center;
  width: 30px;
  color: #999;
  font-size: 12px;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  &:after {
    content: "";
    border-top: 1px solid #ccc;
    position: absolute;
    width: 12px;
    top: 13px;
    right: 100%;
    margin-right: 10px;
  }
  ${(props) =>
    props.big &&
    css`
      color: #333;
      font-size: 15px;
      padding-top: 7.5px;
      &:after {
        border-top-color: #aaa;
        width: 24px;
        top: 16px;
        margin-right: 8px;
      }
    `}
`;

const TitleCell = styled(Cell)`
  a {
    &:visited {
      color: #888;
    }
  }
`;

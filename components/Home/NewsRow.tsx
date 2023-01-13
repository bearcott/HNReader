import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next/link";
import { wrap } from "module";
import React, { useEffect, useState } from "react";
import { intDisplay, timeAgo } from "../../helpers/format";
import { useRouter } from "next/router";
import { Spacer } from "../Spacer";

export const NewsRow = ({ data, index }) => {
  const { id, by, score, time, title, type, descendants, url } = data;
  const router = useRouter();

  const host = url ? new URL(url).host : undefined;

  return (
    <>
      <Link href={`/item?id=${id}`} scroll={false}>
        <a>
          {type === "job" ? (
            ""
          ) : (
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

export const CommentCell: React.FC = ({ children }) => (
  <Cell gray style={{ alignItems: "flex-end", paddingRight: "4px" }}>
    <h1>
      ( <span style={{ color: "black" }}>{children}</span> )
    </h1>
  </Cell>
);

const JobTitle = ({ children }) => <Gray>Job · [{children}]</Gray>;

const Gray = styled.span`
  color: #888;
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
  color: ${(props) => props.gray && "#888"};
`;

const TitleCell = styled(Cell)`
  a {
    &:visited {
      color: #888;
    }
  }
`;

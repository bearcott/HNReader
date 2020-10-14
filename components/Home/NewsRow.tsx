import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next/link";
import { wrap } from "module";
import React, { useEffect, useState } from "react";
import { intDisplay, timeAgo } from "../../helpers/format";
import { useRouter } from "next/router";

export const NewsRow = ({ data, index }) => {
  const { id, by, score, time, title, type, descendants, url } = data;
  const [parsedURL, setUrl] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const parsedURL = new URL(url);
      setUrl(parsedURL);
    } catch (e) {}
  }, []);

  return (
    <>
      <Cell gray>{index + 1}.</Cell>
      <Link href={`/item?id=${id}`} scroll={false}>
        <a style={{ color: "#ff6600" }}>
          <Cell gray style={{ color: "#ff6600" }}>
            {intDisplay(score)}
          </Cell>
        </a>
      </Link>
      <Link href={`/item?id=${id}`} scroll={false}>
        <a>
          <Cell>{intDisplay(descendants)}</Cell>
        </a>
      </Link>
      <Cell>
        <a
          onClick={() => {
            router.push(`/item?id=${id}`);
          }}
          href={url}
          target="_blank"
        >
          {title}
        </a>
        <Subtext>
          {timeAgo.format(time * 1000)}
          {parsedURL?.host && " · "}
          {parsedURL?.host && <a href={url}>({parsedURL?.host})</a>}
        </Subtext>
      </Cell>
    </>
  );
};

const Subtext = styled.h2`
  padding-top: 5px;
  color: #888;
  font-weight: normal;
`;

export const Cell = styled.div<{ gray?: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.gray && "#888"};
`;

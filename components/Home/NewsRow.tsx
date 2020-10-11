import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { wrap } from "module";
import React, { useEffect, useState } from "react";
import { intDisplay, timeAgo } from "../../helpers/format";

export const NewsRow = ({ data, index }) => {
  const { id, by, score, time, title, type, descendants, url } = data;
  const [parsedURL, setUrl] = useState(null);
  useEffect(() => {
    try {
      const parsedURL = new URL(url);
      setUrl(parsedURL);
    } catch (e) {}
  }, []);

  return (
    <>
      <Cell gray>{index + 1}.</Cell>
      <Cell gray style={{ color: "#ff6600" }}>
        {intDisplay(score)}
      </Cell>
      <a href={`/item?id=${id}`}>
        <Cell>{intDisplay(descendants)}</Cell>
      </a>
      <a href={url} target="_blank">
        <Cell>
          {title}
          <Subtext>
            {timeAgo.format(time * 1000)}
            {parsedURL?.host && ` - (${parsedURL?.host})`}
          </Subtext>
        </Cell>
      </a>
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

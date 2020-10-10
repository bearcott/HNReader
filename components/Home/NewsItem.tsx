import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { wrap } from "module";
import React from "react";
import { intDisplay } from "../../helpers/format";

export const NewsItem = ({ data, index }) => {
  const { by, score, time, title, type, descendants, url } = data;
  const parsedURL = new URL(url);
  return (
    <>
      <Cell gray>{index + 1}.</Cell>
      <Cell gray style={{ color: "#ff6600" }}>
        {intDisplay(score)}
      </Cell>
      <a href={"#"}>
        <Cell>{intDisplay(descendants)}</Cell>
      </a>
      <a href={url} target="_blank">
        <Cell>
          {title}
          <Subtext>({parsedURL.host})</Subtext>
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

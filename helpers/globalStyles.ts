import { css } from "@emotion/core";

export default css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2 {
    line-height: 1;
    margin: 0;
  }

  h1 {
    font-size: 14px;
  }

  h2 {
    font-size: 12px;
  }
`;

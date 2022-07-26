import { css } from "@emotion/core";

export default css`
  html,
  body {
    padding: 0;
    margin: 0;
    background: #f6f6ef;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  * {
    box-sizing: border-box;
  }

  p {
    line-height: 1.5;
  }

  h1,
  h2 {
    line-height: 1;
    margin: 0;
    font-weight: normal;
  }

  h1 {
    font-size: 16px;
  }

  h2 {
    font-size: 12px;
  }

  /* ---- Custom Scrollbars ---- */
  ::-webkit-scrollbar {
    width: 8px; /* for vertical scrollbars */
    height: 8px; /* for horizontal scrollbars */
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 100px;
    &:hover {
      background-color: #555;
    }
  }
`;

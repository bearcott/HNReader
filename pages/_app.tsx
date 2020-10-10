import React from "react";
import { Global } from "@emotion/core";
import globalStyles from "../helpers/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

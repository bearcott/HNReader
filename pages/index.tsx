import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import { Home } from "../components/Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>HN Reader</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <Home />
    </>
  );
}

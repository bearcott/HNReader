import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { ItemIndex } from "../components/Item";

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>HN Reader</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <ItemIndex id={id} />
    </>
  );
}

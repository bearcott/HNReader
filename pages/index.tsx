import Head from 'next/head'
import React from 'react'
import { HomeView } from '../components/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>HN Reader</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HomeView />
    </>
  )
}

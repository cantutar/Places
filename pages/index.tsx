import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Landing/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Place</title>
        <meta
          name="description"
          content="The place that everyone looks for..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;

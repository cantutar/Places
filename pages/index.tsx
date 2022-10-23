import type { NextPage } from "next";
import Head from "next/head";
import Featured from "../components/Landing/Featured";
import Hero from "../components/Landing/Hero";
import IconicPlace from "../components/Landing/IconicPlace";
import Trust from "../components/Landing/Parallax";
import UsersChoice from "../components/Landing/UsersChoice";
import Footer from "../components/Layout/Footer";

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
        <Featured />
        <Trust />
        <UsersChoice />
        <IconicPlace />
        <Footer />
      </main>
    </>
  );
};

export default Home;

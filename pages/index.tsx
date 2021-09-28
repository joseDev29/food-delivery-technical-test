import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { CategoryList } from "../components/CategoryList";
import { Headline } from "../components/Headline";
import { Navbar } from "../components/Navbar";
import { ProductList } from "../components/ProductList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chukwudi</title>
        <meta name="description" content="Chukwudi home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Headline />
      <CategoryList />
      <ProductList />
    </>
  );
};

export default Home;

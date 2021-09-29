import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { CategoryList } from "../components/CategoryList";
import { Headline } from "../components/Headline";
import { Navbar } from "../components/Navbar";
import { ProductList } from "../components/ProductList";
import { ShoppingCart } from "../components/ShoppingCart";
import { useAuth } from "../hooks/useAuth";
import { Container, Subcontainer } from "../styles/GlobalStyles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chukwudi</title>
        <meta name="description" content="Chukwudi home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Subcontainer>
          <Navbar />
          <Headline />
          <CategoryList />
          <ProductList />
        </Subcontainer>
        <ShoppingCart />
      </Container>
    </>
  );
};

export default Home;

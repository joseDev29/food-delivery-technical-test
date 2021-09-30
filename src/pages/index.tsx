import type { NextPage } from "next";
import Head from "next/head";

import { Container, Subcontainer } from "../styles/GlobalStyles";
import { Navbar } from "../components/Navbar";
import { Headline } from "../components/Headline";
import { CategoryList } from "../components/CategoryList";
import { ProductList } from "../components/ProductList";
import { ShoppingCart } from "../components/ShoppingCart";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chukwudi</title>
        <meta name="description" content="Chukwudi home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Subcontainer className="home-subcontainer">
          <Navbar />
          <Headline />
          <CategoryList />
          <h2 className="restaurants-title">
            Restaurants <span></span>
          </h2>
          <ProductList />
        </Subcontainer>
        <ShoppingCart />
      </Container>
    </>
  );
};

export default Home;

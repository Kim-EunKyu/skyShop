import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SlideBanner from "../components/common/SlideBanner";
import ProductList from "../components/product/ProductList";

const MainPages = () => {
  return (
    <>
      <Header />
      <SlideBanner />
      <ProductList />
      <Footer />
    </>
  );
};

export default MainPages;

import React from "react";
import Footer from "../components/common/Footer";
import SlideBanner from "../components/common/SlideBanner";
import ProductList from "../components/product/ProductList";
import HeaderContainer from "../container/common/HeaderContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <SlideBanner />
      <ProductList />
      <Footer />
    </>
  );
};

export default MainPage;

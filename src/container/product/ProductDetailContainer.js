import React from "react";
import Footer from "../../components/common/Footer";
import ProductDetail from "../../components/product/ProductDetail";
import HeaderContainer from "../common/HeaderContainer";

const ProductDetailContainer = () => {
  return (
    <>
      <HeaderContainer />
      <ProductDetail />
      <Footer />
    </>
  );
};

export default ProductDetailContainer;

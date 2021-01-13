import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";

const ProductListBlock = styled.div`
  width: 1240px;
  margin: 0 auto;
  margin-top: 60px;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductList = () => {
  return (
    <>
      <ProductListBlock>
        <h2>추천 상품</h2>
        <ProductContainer>
          <ProductItem
            imgsrc="/image/2546638124_B.jpg"
            title="락브로스 스마트 자동센서 자전거 후미등 인공지능 LED S8"
            price="21800"
          />
          <ProductItem
            imgsrc="/image/2546638124_B.jpg"
            title="락브로스 스마트 자동센서 자전거 후미등 인공지능 LED S8"
            price="21800"
          />
          <ProductItem
            imgsrc="/image/2546638124_B.jpg"
            title="락브로스 스마트 자동센서 자전거 후미등 인공지능 LED S8"
            price="21800"
          />
          <ProductItem
            imgsrc="/image/2546638124_B.jpg"
            title="락브로스 스마트 자동센서 자전거 후미등 인공지능 LED S8"
            price="21800"
          />
          <ProductItem
            imgsrc="/image/2546638124_B.jpg"
            title="락브로스 스마트 자동센서 자전거 후미등 인공지능 LED S8"
            price="21800"
          />
        </ProductContainer>
      </ProductListBlock>
    </>
  );
};

export default ProductList;

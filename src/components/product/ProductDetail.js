import React, { useState } from "react";
import styled, { css } from "styled-components";

const ProductDetailBlock = styled.div`
  width: 100%;
  /* min-height: calc(100vh); */
`;

const ProductContainer = styled.div`
  width: 1240px;
  /* min-height: calc(100vh); */
  display: flex;
  position: relative;
  margin: 0 auto;
  border: 3px solid black;
`;

const LeftDetail = styled.div`
  width: 880px;
  height: 2000px;
  border: 3px solid black;
`;

const Category = styled.div`
  padding: 20px 40px 0 0;
`;

const ProductInfoBlock = styled.div`
  padding: 20px 40px 0 0;
`;

const ProductImage = styled.img`
  width: 410px;
  height: 410px;
`;

const ProductInfo = styled.div``;

const RightDetail = styled.div`
  width: 360px;
  height: calc(100vh - 155px);
  position: sticky;
  top: 0px;
  border: 3px solid black;

  ${(props) =>
    props.fixed &&
    css`
      height: calc(100vh - 85px);
      top: 85px;
    `}
`;

const ProductDetail = () => {
  const [navbar, setNavbar] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  return (
    <ProductDetailBlock>
      <ProductContainer>
        <LeftDetail>
          <Category>홈 쇼핑</Category>
          <ProductInfoBlock>
            <ProductImage src="/image/2546638124_B.jpg" />
            <ProductInfo></ProductInfo>
          </ProductInfoBlock>
        </LeftDetail>
        <RightDetail fixed={navbar ? true : false}>
          <select>
            <option value="hello" />
          </select>
        </RightDetail>
      </ProductContainer>
    </ProductDetailBlock>
  );
};

export default ProductDetail;

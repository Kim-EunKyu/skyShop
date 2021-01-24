import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const ProductItemBlock = styled.div`
  width: 224px;
  height: 345px;
  cursor: pointer;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.06),
    0px 0px 4px 0px rgba(0, 0, 0, 0.18);
  margin: 0 8px;
`;

const ProductItemPicBlock = styled.div`
  width: 224px;
  height: 224px;
  overflow: hidden;
`;

const ProductItemPic = styled.img`
  max-width: 100%;
  height: 100%;

  transition: 0.1s ease-in;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductItemInfo = styled.div`
  padding: 20px 0 20px 20px;
`;

const InfoTitle = styled.div`
  margin: 0 15px 15px 0;
  font-size: 15px;
  max-height: 3em;
  overflow: hidden;
  word-break: break-all;
`;

const InfoPrice = styled.div`
  font-size: 15px;
`;

const ProductItem = ({ imgsrc, title, price, history }) => {
  const onClick = () => {
    history.push("/product");
  };
  return (
    <ProductItemBlock onClick={onClick}>
      <ProductItemPicBlock>
        <ProductItemPic src={imgsrc} />
      </ProductItemPicBlock>
      <ProductItemInfo>
        <InfoTitle>{title}</InfoTitle>
        <InfoPrice>
          <strong style={{ fontSize: "22px" }}>{price}</strong>원
        </InfoPrice>
      </ProductItemInfo>
    </ProductItemBlock>
  );
};

export default withRouter(ProductItem);

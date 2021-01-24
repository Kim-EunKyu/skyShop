import React from "react";
import styled from "styled-components";
import Option from "./Option";

const ProductOptionsBlock = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  bottom: 240px;
`;

const Options = styled.ul`
  position: static;
  padding: 0;
  margin: 0;
`;

const ProductOtions = () => {
  return (
    <ProductOptionsBlock>
      <Options>
        <Option index={1} name="타입" />
        <Option index={2} name="추가구성품 선택" />
      </Options>
    </ProductOptionsBlock>
  );
};

export default ProductOtions;

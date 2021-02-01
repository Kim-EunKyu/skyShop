import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Option from "./Option";
import ResultOption from "./ResultOption";

const ProductOptionsBlock = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  bottom: 200px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Options = styled.ul`
  position: static;
  padding: 0;
  margin: 0;
`;

const ResultOptions = styled.ul`
  padding: 0;
  margin: 0;
`;

const ProductOtions = () => {
  const dispatch = useDispatch();
  const { options } = useSelector(({ product }) => ({
    options: product.productdetail.options,
  }));

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  //dummy data -> 실제로는 정제된 데이터를 가져와서 여기에 넣어주면 될 것 같다.
  const productInfo = [
    {
      name: "타입",
      optionName: ["A1 시트레일(안장레일)타입", "B1 시트포스트 타입"],
      price: ["21800", "21800"],
    },
    {
      name: "추가구성품 선택",
      optionName: ["A2안장레일마운트", "B2시트포스트마운트"],
      price: ["6000", "6000"],
    },
  ];

  return (
    <ProductOptionsBlock>
      <Options>
        {productInfo.map((value, index) => (
          <Option
            key={index}
            index={index + 1}
            name={value.name}
            optionName={value.optionName}
            price={value.price}
          />
        ))}
      </Options>
      {/* 옵션 결과리스트 들어가는 곳 */}
      <ResultOptions>
        {options.map((value, index) => (
          <ResultOption key={index} index={index} value={value} />
        ))}
      </ResultOptions>
    </ProductOptionsBlock>
  );
};

export default ProductOtions;

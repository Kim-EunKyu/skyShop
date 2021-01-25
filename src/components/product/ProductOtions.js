import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Option from "./Option";

const ProductOptionsBlock = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  bottom: 240px;
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

const ResultOption = styled.li`
  position: relative;
  width: 100%;
  border: 1px solid #eee;
  margin-bottom: 10px;
  padding: 16px;
`;

const ChangeCount = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #eee;
  margin-bottom: 8px;
`;

const CountInput = styled.input`
  width: 108px;
  height: 32px;
  border: none;
  padding: 0 32px;
  text-align: center;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  position: static;
`;

const CountMinusButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 32px;
  height: 32px;
  background-color: white;
  border: none;
  border-right: 1px solid #eee;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    content: "";
    width: 14px;
    height: 2px;
    margin: -1px 0 0 -7px;
    background-color: #b3b3b3;
  }
`;

const CountPlusButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 32px;
  height: 32px;
  background-color: white;
  border: none;
  border-left: 1px solid #eee;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    content: "";
    width: 14px;
    height: 2px;
    margin: -1px 0 0 -7px;
    background-color: #b3b3b3;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;

    content: "";
    width: 2px;
    height: 14px;
    margin: -7px 0 0 -1px;
    background-color: #b3b3b3;
  }
`;

const ProductOtions = () => {
  const dispatch = useDispatch();
  const { options } = useSelector(({ product }) => ({
    options: product.productdetail.options,
  }));

  const [count, setCount] = useState(1);

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

  const onChangeCountInput = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value === "") {
      console.log(e.target.value);
      alert("숫자만 입력해주세요.");
      return;
    }
    setCount(value);
    console.log(e.target.value);
  };

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
          <ResultOption key={index}>
            <p>{value.optionName}</p>
            <ChangeCount>
              <CountInput onChange={onChangeCountInput} value={count} />
              <ButtonGroup>
                <CountMinusButton />
                <CountPlusButton />
              </ButtonGroup>
            </ChangeCount>
            <br />
            <strong>{numberWithCommas(value.price)}</strong>원
          </ResultOption>
        ))}
        {/* <ResultOption>
          <p>A1 시트레일(안장레일)타입</p>
          <ChangeCount>
            <CountInput />
            <ButtonGroup>
              <CountMinusButton />
              <CountPlusButton />
            </ButtonGroup>
          </ChangeCount>
          <br />
          <strong>{numberWithCommas(21800)}</strong>원
        </ResultOption>*/}
      </ResultOptions>
    </ProductOptionsBlock>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ProductOtions;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { countChange, deleteOption } from "../../modules/product";

const ResultOptionBlock = styled.li`
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

const RemoveOption = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background-color: #eee;
  opacity: 0.8;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;

    content: "";
    width: 14px;
    height: 2px;
    margin: -1px 0 0 -7px;
    background-color: #b3b3b3;
    transform: rotate(45deg);
  }

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;

    content: "";
    width: 14px;
    height: 2px;
    margin: -1px 0 0 -7px;
    background-color: #b3b3b3;
    transform: rotate(-45deg);
  }
`;

const ResultOption = ({ value: { optionName, count, price }, index }) => {
  const dispatch = useDispatch();
  const { options } = useSelector(({ product }) => ({
    options: product.productdetail.options,
  }));

  const onChangeCountInput = (e) => {
    const Evalue = e.target.value;
    if (+Evalue < 1) {
      alert("최소 1개 이상이어야 합니다.");
      return;
    }
    if (isNaN(Evalue) || Evalue === "") {
      console.log(Evalue);
      alert("숫자만 입력해주세요.");
      return;
    }

    dispatch(
      countChange({
        index,
        optionName,
        count: Evalue,
        price: price,
        totalPrice: Number(Evalue) * Number(price),
      })
    );
  };

  const onClickCountPlusButton = (e) => {
    const count = +options[index].count + 1 + "";
    if (count < 1) {
      // alert("최소 1개 이상이어야 합니다.");
      return;
    }
    dispatch(
      countChange({
        index,
        optionName,
        count,
        price: price,
        totalPrice: Number(count) * Number(price),
      })
    );
  };

  const onClickCountMinusButton = (e) => {
    const count = +options[index].count - 1 + "";
    if (count < 1) {
      // alert("최소 1개 이상이어야 합니다.");
      return;
    }
    dispatch(
      countChange({
        index,
        optionName,
        count,
        price: price,
        totalPrice: Number(count) * Number(price),
      })
    );
  };

  const onClickRemoveOption = (e) => {
    dispatch(deleteOption(index));
  };

  return (
    <ResultOptionBlock>
      <RemoveOption onClick={onClickRemoveOption} />
      <p>{optionName}</p>
      <ChangeCount>
        <CountInput onChange={onChangeCountInput} value={count} />
        <ButtonGroup>
          <CountMinusButton onClick={onClickCountMinusButton} />
          <CountPlusButton onClick={onClickCountPlusButton} />
        </ButtonGroup>
      </ChangeCount>
      <br />
      <strong>{numberWithCommas(price * count)}</strong>원
    </ResultOptionBlock>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ResultOption;

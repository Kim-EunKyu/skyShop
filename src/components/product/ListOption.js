import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { insertOption } from "../../modules/product";

const List = styled.li`
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 16px;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

const ListOption = ({ value, price }) => {
  const dispatch = useDispatch();
  let { options } = useSelector(({ product }) => ({
    options: product.productdetail.options,
  }));

  const onClickLists = (e) => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].optionName === value) {
        alert("이미 추가한 옵션입니다.");
        return;
      }
    }

    const newOptions = {
      optionName: value,
      count: "1",
      price,
      totalPrice: +price,
    };

    dispatch(insertOption(newOptions));
  };

  return (
    <List onClick={onClickLists}>
      <p>{value}</p>
      <strong>{numberWithCommas(price)}</strong>원
    </List>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ListOption;

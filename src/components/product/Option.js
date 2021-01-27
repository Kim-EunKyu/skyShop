import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import ListOption from "./ListOption";

const OptionBlock = styled.div`
  width: 320px;
  height: 60px;
  border: 1px solid #bbb;
  margin-bottom: 8px;
  cursor: pointer;

  ${(props) =>
    props.isClick &&
    css`
      border-color: #f43142;
    `}
`;

const OptionSelected = styled.div`
  position: relative;
`;

const OptionName = styled.div`
  margin: 0 46px 0 16px;
  color: #333;
  font-weight: bold;
  font-size: 18px;
  line-height: 60px;

  ${(props) =>
    props.isClick &&
    css`
      color: #f43142;
    `}
`;

const OptionImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60px;
  height: 60px;

  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    margin: -9px 0 0 -7px;
    border: 1px solid #999;
    border-width: 0 2px 2px 0;
    vertical-align: middle;
    transform: rotate(45deg);
    content: "";

    ${(props) =>
      props.isClick &&
      css`
        margin-top: -5px;
        border-color: #f43142;
        border-width: 2px 0 0 2px;
      `}
  }
`;

const OptionList = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 320px;
  border: 1px solid black;
  border-top: none;
  border-color: #f43142;
  background-color: #fff;
  z-index: 1;
  overflow-y: auto;
  overflow-x: hidden;

  ${(props) =>
    props.index &&
    css`
      top: calc((${props.index} * 68px) - 8px);
      z-index: calc(100 - ${props.index});
    `}
  ${(props) =>
    !props.isClick &&
    css`
      display: none;
    `}
`;

const Lists = styled.ul`
  padding: 0;
`;

const Option = ({ index, name, optionName, price }) => {
  //   const dispatch = useDispatch();
  //   let { options } = useSelector(({ product }) => ({
  //     options: product.productdetail.options,
  //   }));

  const [isClick, setIsClick] = useState(false);

  const onClickOption = () => {
    setIsClick(!isClick);
  };

  return (
    <li>
      <OptionBlock onClick={onClickOption} isClick={isClick}>
        <OptionSelected>
          <OptionName isClick={isClick}>{name}</OptionName>
          <OptionImg isClick={isClick} />
        </OptionSelected>
      </OptionBlock>
      <OptionList index={index} isClick={isClick}>
        <Lists onClick={onClickOption}>
          {optionName.map((value, idx) => (
            <ListOption key={idx} value={value} price={price[idx]} />
          ))}
        </Lists>
      </OptionList>
    </li>
  );
};

export default Option;

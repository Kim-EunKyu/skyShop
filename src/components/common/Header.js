import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderBlock = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 1076px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  .fa-bars {
    font-size: 36px;
  }
  .fa-bars,
  h1,
  div {
    margin-left: 8px;
    margin-right: 8px;
  }
`;
const InputBlock = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 510px;
    height: 50px;
    font-size: 18px;
    padding: 4px 16px;
    border: 1px solid gray;
    border-right: none;
    border-radius: 25px 0 0 25px;
  }
  button {
    width: 50px;
    height: 50px;
    background: #bac8ff;
    border: 1px solid gray;
    border-left: none;
    border-radius: 0 25px 25px 0;
    cursor: pointer;

    .fa-search {
      font-size: 20px;
      color: white;
    }
  }
`;

const RightBlock = styled.div`
  button {
    background: none;
    border: none;
    font-size: 16px;
  }
`;

const MenuConatiner = styled.div`
  width: 100%;

  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.06),
    0px 0px 4px 0px rgba(0, 0, 0, 0.18);
`;

const MenuBlock = styled.div`
  width: 1240px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const MenuLeftBlock = styled.div``;

const MenuItem = styled.button`
  height: 100%;
  background: none;
  border: none;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid red;
  }

  & + & {
    margin: 0 8px;
  }
`;

const MenuRightBlock = styled.div``;

const Header = () => {
  const menuLeftList = ["베스트", "쿠폰/혜택", "기획전", "오늘장보기"];
  return (
    <>
      <HeaderBlock>
        <LeftBlock>
          <FontAwesomeIcon icon={faBars} />
          <h1>SKYPIA</h1>
          <InputBlock>
            <input placeholder="검색어를 입력해주세요" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </InputBlock>
        </LeftBlock>
        <RightBlock>{/* <button>로그인</button> */}</RightBlock>
      </HeaderBlock>
      <MenuConatiner>
        <MenuBlock>
          <MenuLeftBlock>
            {menuLeftList.map((value, key) => (
              <MenuItem key={key}>{value}</MenuItem>
            ))}
          </MenuLeftBlock>
          <MenuRightBlock>
            <MenuItem>로그인</MenuItem>
            <MenuItem>회원가입</MenuItem>
          </MenuRightBlock>
        </MenuBlock>
      </MenuConatiner>
    </>
  );
};

export default Header;

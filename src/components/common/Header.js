import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import mainMenus from "./data";
import SideMainMenu from "../sidebar/SideMainMenu";

const HeaderContainer = styled.div`
  position: static;
  z-index: 10000;

  ${(props) =>
    props.fixed &&
    css`
      width: 100%;
      margin: 0 auto;
      position: fixed;
      background-color: white;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.06),
        0px 0px 4px 0px rgba(0, 0, 0, 0.18);
    `}
`;

const HeaderBlock = styled.div`
  margin: 0 auto;
  width: 1240px;
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
    width: 550px;
    height: 50px;
    font-size: 18px;
    padding: 4px 16px;
    border: 1px solid gray;
    border-radius: 25px;
  }
  button {
    position: relative;
    right: 45px;
    width: 40px;
    height: 40px;
    background: #bac8ff;
    border: none;
    border-radius: 50%;
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
  /* width: 1240px; */
  width: 100%;
  /* margin: 0 auto; */
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

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  z-index: 100;

  border: 1px solid black;
`;

const Header = ({ user, menuLeftList, onLogout }) => {
  const [navbar, setNavbar] = useState(false);

  const onScrollNavbar = () => {
    if (window.scrollY > 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    // console.log(mainMenus);
    window.addEventListener("scroll", onScrollNavbar);
    return () => {
      window.removeEventListener("scroll", onScrollNavbar);
    };
  }, []);

  return (
    <>
      <HeaderContainer fixed={navbar ? true : false}>
        {/* 사이드바 메뉴 시작 */}
        <SideMenu>
          <div>로그인</div>
          {/* {mainMenus.map((value, idx) => (
            <SideMainMenu key={idx} mainmenu={value} />
          ))} */}
          <SideMainMenu mainmenu={mainMenus} />
        </SideMenu>
        {/* 사이드바 끝 */}
        {/* 헤더 시작 */}
        <HeaderBlock>
          {/* 헤더 왼쪽 */}
          <LeftBlock>
            <FontAwesomeIcon icon={faBars} />
            <Logo />
            <InputBlock>
              <input placeholder="검색어를 입력해주세요" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </InputBlock>
          </LeftBlock>
          {/* 헤더 오른쪽 */}
          <RightBlock></RightBlock>
        </HeaderBlock>
      </HeaderContainer>
      {/* 헤더 끝 */}
      {/* 메뉴 시작 */}
      <MenuConatiner>
        <MenuBlock>
          <MenuLeftBlock>
            {menuLeftList.map((value, key) => (
              <MenuItem key={key}>{value}</MenuItem>
            ))}
          </MenuLeftBlock>
          <MenuRightBlock>
            {user ? (
              <>
                <Link to="/">
                  <MenuItem>{user.username}님 안녕하세요!</MenuItem>
                </Link>
                <MenuItem onClick={onLogout}>로그아웃</MenuItem>
              </>
            ) : (
              <>
                <Link to="/login">
                  <MenuItem> 로그인</MenuItem>
                </Link>
                <Link to="/register">
                  <MenuItem>회원가입</MenuItem>
                </Link>
              </>
            )}
          </MenuRightBlock>
        </MenuBlock>
      </MenuConatiner>
    </>
  );
};

export default Header;

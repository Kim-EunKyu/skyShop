import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import SideMenuList from "./SideMenuList";

const SubMenu = styled.ul`
  position: fixed;
  left: 300px;
  top: 0px;
  overflow-y: auto;
  width: 200px;
  height: 100vh;
  padding: 0;
  z-index: 100;
  color: black;
  background-color: white;
  transition: opacity 0.2s ease-in;
  opacity: 0;
  visibility: hidden;
`;

const SubMenuName = styled.div`
  font-size: 15px;
  padding-left: 16px;
  cursor: pointer;
`;

const List = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;

  & > svg {
    opacity: 0;
    margin-right: 16px;
  }

  &:hover {
    color: #94aaff;
    background-color: #f7f9ff;
    font-weight: bold;

    & > svg {
      opacity: 1;
    }
  }

  &:hover {
    ul {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const SideSubMenu = ({ submenu }) => {
  //   console.log(submenu);
  return (
    <SubMenu>
      {submenu.map((value, idx) => (
        <List key={idx}>
          <SubMenuName>
            <a href="#">{value[0]}</a>
          </SubMenuName>
          <SideMenuList listname={value[1]} />
          <FontAwesomeIcon icon={faAngleRight} />
        </List>
      ))}
    </SubMenu>
  );
};

export default React.memo(SideSubMenu);

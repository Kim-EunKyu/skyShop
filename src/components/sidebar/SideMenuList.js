import React from "react";
import styled from "styled-components";

const MenuList = styled.ul`
  position: fixed;
  left: 500px;
  top: 0px;
  overflow-y: auto;
  width: 200px;
  height: 100vh;
  padding: 0;
  z-index: 100;
  background-color: white;
  transition: opacity 0.2s ease-in;
  opacity: 0;
  visibility: hidden;
  color: black;
  font-weight: normal;
`;

const List = styled.li`
  height: 50px;
  line-height: 50px;
  padding-left: 16px;
  cursor: pointer;

  &:hover {
    color: #94aaff;
    background-color: #f7f9ff;
    font-weight: bold;
  }
`;

const SideMenuList = ({ listname }) => {
  return (
    <MenuList>
      {listname.map((value, idx) => (
        <List key={idx}>
          <a href="#">{value}</a>
        </List>
      ))}
    </MenuList>
  );
};

export default React.memo(SideMenuList);

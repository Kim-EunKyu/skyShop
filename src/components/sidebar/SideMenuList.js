import React from "react";
import styled from "styled-components";

const MenuList = styled.ul`
  position: fixed;
  left: 500px;
  top: 0px;
  overflow-y: auto;
  width: 200px;
  height: 100vh;
  z-index: 100;
  background-color: white;
`;

const SideMenuList = ({ listname }) => {
  console.log(listname);
  return (
    <MenuList>
      <span class="arrow"></span>
      {listname.map((value, idx) => (
        <li key={idx}>
          <a href="#">{value}</a>
        </li>
      ))}
    </MenuList>
  );
};

export default React.memo(SideMenuList);

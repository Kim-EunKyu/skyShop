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
  z-index: 100;
  background-color: white;
`;

const SubMenuName = styled.div``;

const SideSubMenu = ({ submenu }) => {
  //   console.log(submenu);
  return (
    <SubMenu>
      {submenu.map((value, idx) => (
        <li key={idx}>
          <SubMenuName>
            <a href="#" class="">
              {value[0]}
            </a>
          </SubMenuName>
          <SideMenuList listname={value[1]} />
        </li>
      ))}
    </SubMenu>
  );
};

export default React.memo(SideSubMenu);

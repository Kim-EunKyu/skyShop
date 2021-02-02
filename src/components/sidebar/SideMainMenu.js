import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import SideSubMenu from "./SideSubMenu";

const MainMenu = styled.ul`
  position: absolute;
  left: 0;
  top: 85px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  padding: 0;
  z-index: 100;
  background-color: white;
`;

const MainMenuName = styled.div`
  font-size: 15px;
  padding-left: 16px;
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
    color: white;
    background-color: #bac8ff;
    background: linear-gradient(
      90deg,
      rgba(186, 205, 255, 1) 0%,
      rgba(186, 200, 255, 1) 35%,
      rgba(186, 216, 255, 1) 100%
    );

    & > svg {
      opacity: 1;
    }
  }

  &:hover > ul {
    opacity: 1;
    visibility: visible;
  }
`;

const SideMainMenu = ({ mainmenu }) => {
  console.log(mainmenu);

  return (
    <div style={{ backgroundColor: "white" }}>
      <MainMenu>
        {mainmenu.map((value, idx) => (
          <List key={idx}>
            <MainMenuName>{value[0]}</MainMenuName>
            <SideSubMenu submenu={Object.entries(value[1])} />
            <FontAwesomeIcon icon={faAngleRight} />
          </List>
        ))}
      </MainMenu>
    </div>
  );
};

export default React.memo(SideMainMenu);

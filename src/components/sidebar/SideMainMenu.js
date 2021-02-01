import React, { useState } from "react";
import styled from "styled-components";
import SideSubMenu from "./SideSubMenu";

const MainMenu = styled.ul`
  position: absolute;
  left: 0;
  top: 70px;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

const MainMenuName = styled.div`
  font-size: 20px;
  border: 1px solid black;

  &:hover {
    color: white;
    background-color: #bac8ff;
    background: linear-gradient(
      90deg,
      rgba(186, 205, 255, 1) 0%,
      rgba(186, 200, 255, 1) 35%,
      rgba(186, 216, 255, 1) 100%
    );
  }
`;

const SideMainMenu = ({ mainmenu }) => {
  console.log(mainmenu);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const onMouseEnter = () => {
    setIsMouseEnter(true);
  };

  const onMouseLeave = () => {
    setIsMouseEnter(false);
  };

  return (
    <div class="sidebar">
      <MainMenu>
        {mainmenu.map((value, idx) => (
          <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <MainMenuName>{value[0]}</MainMenuName>
            {isMouseEnter && <SideSubMenu submenu={Object.entries(value[1])} />}
          </li>
        ))}
      </MainMenu>
    </div>
  );
};

export default React.memo(SideMainMenu);

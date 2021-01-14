import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoBlock = styled.div`
  width: 120px;
  font-size: 16px;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <LogoBlock>
      <h1>
        <Link to="/">SKYPIA</Link>
      </h1>
    </LogoBlock>
  );
};

export default Logo;

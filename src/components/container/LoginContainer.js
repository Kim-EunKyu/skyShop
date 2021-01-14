import React from "react";
import styled from "styled-components";
import AuthTemplete from "../auth/AuthTemplete";
import Logo from "../common/Logo";

const LoginPageBlock = styled.div`
  margin-top: 120px;
`;

const LoginContainer = () => {
  return (
    <LoginPageBlock>
      <Logo />
      <AuthTemplete buttonContent="로그인" />
    </LoginPageBlock>
  );
};

export default LoginContainer;

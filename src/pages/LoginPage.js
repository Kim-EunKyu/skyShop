import React from "react";
import styled from "styled-components";
import AuthTemplete from "../components/auth/AuthTemplete";
import Logo from "../components/common/Logo";

const LoginPageBlock = styled.div`
  margin-top: 120px;
`;

const LoginPage = () => {
  return (
    <LoginPageBlock>
      <Logo />
      <AuthTemplete buttonContent="로그인" />
    </LoginPageBlock>
  );
};

export default LoginPage;

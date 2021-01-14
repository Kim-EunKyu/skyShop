import React from "react";
import styled from "styled-components";
import AuthTemplete from "../components/auth/AuthTemplete";
import Logo from "../components/common/Logo";

const RegisterPageBlock = styled.div`
  margin-top: 120px;
`;

const RegisterPage = () => {
  return (
    <RegisterPageBlock>
      <Logo />
      <AuthTemplete isRegister={true} buttonContent="회원가입" />
    </RegisterPageBlock>
  );
};

export default RegisterPage;

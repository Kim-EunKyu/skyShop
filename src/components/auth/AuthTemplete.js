import React from "react";
import styled from "styled-components";

const AuthTempleteBlock = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 30px;
`;

const AuthInput = styled.input`
  height: 50px;
  border-left: 1px;
  border-top: 1px;
  border-right: 1px;
  border-bottom: 0;
  border-style: solid;
  border-color: #ddd;
  padding: 12px;
  font-size: 16px;
`;

const AuthSubmit = styled.button`
  height: 50px;
  border: none;
  background-color: #bac8ff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #99aeff;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthTemplete = ({
  isRegister = false,
  type,
  form,
  onChange,
  onSubmit,
  error,
}) => {
  return (
    <>
      <AuthTempleteBlock onSubmit={onSubmit}>
        <h2>{type}</h2>
        <AuthInput
          placeholder="아이디"
          name="username"
          onChange={onChange}
          value={form.username}
        />
        <AuthInput
          placeholder="비밀번호를 입력해주세요."
          type="password"
          name="password"
          onChange={onChange}
          value={form.password}
        />
        {isRegister && (
          <AuthInput
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            name="passwordConfirm"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <AuthSubmit>{type}</AuthSubmit>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </AuthTempleteBlock>
    </>
  );
};

export default AuthTemplete;

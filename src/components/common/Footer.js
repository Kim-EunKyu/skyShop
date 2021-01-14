import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid gray;
  margin-top: 60px;
`;

const Footer = () => {
  return <FooterBlock>하단 부분</FooterBlock>;
};

export default Footer;

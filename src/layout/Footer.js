import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const StyledFooter = styled.footer`
  margin: 0 auto 28px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const Icon = styled(AiFillHeart)`
  color: var(--heart-color);
  font-size: 24px;
  margin-inline: 2px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSpan>
        Developed with <Icon /> © 2023
      </StyledSpan>
    </StyledFooter>
  );
};

export default Footer;

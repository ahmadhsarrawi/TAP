import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsMoon } from 'react-icons/bs';


const StyledButton = styled.button`
  background-color: var(--bg_default);
  color: var(--body-text);
  border: 1px solid rgb(128, 128, 128, 0.3);
  box-shadow: 1px 1px rgb(128, 128, 128, 0.1);
  border-radius: 5px;
  width: 34px;
  height: 25px;
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  @media (min-width: 560px) {
    width: 100px;
    height: 30px;
  }
  @media (min-width: 1440px) {
    width: 110px;
    height: 30px;
    font-size: 15px;
  }
`;
const StyledSpan = styled.span`
  @media (min-width: 270px) {
    display: none;
  }

  @media (min-width: 560px) {
    display: inline;
  }
`;

const NavButton = (props) => {
  return (
      <StyledButton>
       {props.icon == 'moon'?<BsMoon/>:props.icon =='heart'?<AiOutlineHeart/>:''}   
      <StyledSpan>{props.children}</StyledSpan>
    </StyledButton>
  );
};

export default NavButton;

import React from "react";

import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
const StyledButton = styled.button`
  background-color: var(--brand-secondary);
  border: none;
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 2px;
  @media (min-width: 270px) {
    height: 40px;
    gap: 5px;
    font-size: 24px;
    margin-bottom: 5px;
  }
  @media (min-width: 560px) {
    height: 50px;
    margin-bottom: 7px;
  }
  @media (min-width: 720px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    height: 55px;
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

const StyledIcon = styled(AiOutlineHeart)`
  font-size: 24px;
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

const FavoriteButton = () => {
  return <StyledButton>
    <StyledIcon/>Add to Favourites
  </StyledButton>
};

export default FavoriteButton;

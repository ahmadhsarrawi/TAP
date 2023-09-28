import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding-left: 2px;
  font-weight: 400;
  background-color: var(--bg_default);
  color: var(--body-text);
`;
const StyledIcon = styled(AiOutlineSearch)`
  margin-inline: 10px;
  height: 100%;
  font-size: 19px;
`;
const InputWithIcon = ({type,placeHolder,searchHandler}) => {
  return (
    <>
      <StyledIcon />
      <StyledInput placeholder={placeHolder} type={type} onChange={searchHandler}/>
    </>
  );
};

export default InputWithIcon;

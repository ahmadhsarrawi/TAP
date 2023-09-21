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

const SearchInput = () => {
  return (
    <>
      <AiOutlineSearch
        style={{ "margin-inline": "10px", height: "100%", "font-size": "19px" }}
      />
      <StyledInput placeholder="Search our website..." type="text" />
    </>
  );
};

export default SearchInput;

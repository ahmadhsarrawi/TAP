import React from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 50%;
  border-top: 1px solid var(--lines-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 8px;
  justify-content: center;
  border-left: ${(props) =>
    props.border ? "1px solid var(--lines-color)" : "none"};

  @media (min-width: 840px) {
    border-top: none;
    border-left: 1px solid var(--lines-color);
  }
`;

const Label = styled.label`
  font-size: 11px;
  font-weight: 700;
  padding-left: 4px;
`;
const Select = styled.select`
  border: none;
  font-weight: 700;
  background-color: var(--bg_default);
  color: var(--body-text);
`;

const DropDown = (props) => {
  return (
    <DropDownContainer border={props.leftBorder}>
      <Label htmlFor={props.for}>{props.label}</Label>
      <Select onChange={props.changeHandler} >
        
        {props.options.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </DropDownContainer>
  );
};

export default DropDown;

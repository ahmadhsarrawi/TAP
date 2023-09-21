import React from 'react'
import styled from 'styled-components'


const DropDownContainer = styled.div`
  width: 50%;
  border-top: 1px solid var(--lines-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 8px;
  justify-content: center;

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
      <DropDownContainer>
          <Label for={props.for}>{props.label}</Label>
          <Select>
              {props.options.map(item => { return <option value={item.value}>{item.text}</option>})}
          </Select>
    </DropDownContainer>
  )
}

export default DropDown
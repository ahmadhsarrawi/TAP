import React from "react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-top: 1px solid var(--lines-color);
  font-size: 18px;
`;

const StyledSpan = styled.span`
  padding: 8px 14px;
  gap: 4px;
  display: flex;
  @media (min-width: 1440px) {
    padding-block: 14px;
    padding-left: 32px;
  }
`;

const StyledIcon = styled(AiOutlineCheckCircle)`
  font-size: 24px;
  color: var(--brand-secondary);
  flex-shrink: 0;
`;
const IconListItem = ({item}) => {
  return (
    <ListItem>
      <StyledSpan>
        <StyledIcon />
        {item}
      </StyledSpan>
    </ListItem>
  );
};

export default IconListItem;

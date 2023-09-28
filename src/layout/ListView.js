import React from "react";
import styled from "styled-components";
import ListHeading from "./ListHeading";
import IconListItem from "./IconListItem";

const ListWrapper = styled.div`
  border: 1px solid var(--lines-color);
  background-color: var(--bg_default);
  grid-area: list;
  margin-bottom: 20px;
  @media (min-width: 560px) {
    margin-bottom: 32px;
  }
  @media (min-width: 720px) {
    margin: 0px 0px 20px 15px;
  }
  @media (min-width: 1440px) {
    border-radius: 6px;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const ListView = ({item}) => {
  return (
    <ListWrapper>
      <ListHeading />
      <StyledList>
        {item.map((subtopic) => (
          <IconListItem item={subtopic} key={subtopic} />
        ))}
      </StyledList>
    </ListWrapper>
  );
};

export default ListView;

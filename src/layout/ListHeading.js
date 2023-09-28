import React from "react";
import styled from "styled-components";

const StyledHeading2 = styled.h2`
  padding: 8px 14px;

  @media (min-width: 1440px) {
    padding-block: 14px;
    padding-left: 32px;
  }
`;
const ListHeading = () => {
  return <StyledHeading2>HTML sub topics</StyledHeading2>;
};

export default ListHeading;

import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 24px;
  padding-inline: 15px;
  margin-inline: auto;
  @media (min-width: 1120px) {
    padding-inline: 35px;
  }
  @media (min-width: 1440px) {
    padding-inline: 55px;
  }
`;

const StyledHeading1 = styled.div`
  font-size: 23px;
  font-weight: 700;
`;

const StyledSpan = styled.span`

`
const NumberOfTopics = ({number}) => {
    return <StyledDiv>
      <StyledHeading1><StyledSpan>{`"${number}" Web Topics Found`}</StyledSpan></StyledHeading1>
  </StyledDiv>
};

export default NumberOfTopics;

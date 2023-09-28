import React from "react";
import styled from "styled-components";
import { RatingContainer } from "./TopicCard";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const InfoWrapper = styled.div`
  grid-area: info;
  background-color: var(--dark-bg);
  color: var(--white-text);
  box-shadow: 0 0 0 100vw var(--dark-bg);
  clip-path: inset(0 -100vw);

  @media (min-width: 270px) {
    padding: 15px;
  }
  @media (min-width: 1440px) {
    padding: 30px 0px 30px 15px;
  }
`;
const StyledHeading2 = styled.h2`
  color: var(--brand-secondary);
  @media (min-width: 1440px) {
    font-size: 12px;
  }
`;
const StyledHeading1 = styled.h1``;
const StyledRatingContainer = styled(RatingContainer)`
  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

const InfoParagraph = styled.p``;

const DetailsInfo = ({item}) => {
  return (
    <InfoWrapper>
      <StyledHeading2>{item.category}</StyledHeading2>
      <StyledHeading1>{item.topic}</StyledHeading1>
      <StyledRatingContainer>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </StyledRatingContainer>
      <InfoParagraph>
        {item.description}
      </InfoParagraph>
    </InfoWrapper>
  );
};

export default DetailsInfo;

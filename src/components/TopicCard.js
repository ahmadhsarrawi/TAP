import React from "react";
import styled from "styled-components";

const StyledAnchor = styled.a`
  box-shadow: 0px 0px 4px var(--lines-color);
  background-color: var(--bg_default);
  border-radius: 6px;
  overflow: hidden;
  @media (min-width: 840px) {
    border-radius: 8px;
  }
  @media (min-width: 1120px) {
    border-radius: 10px;
  }
`;
const ImageBanner = styled.div`
  height: 50%;
  overflow: hidden;
  background-color: white;
  color: var(--body-text);
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardDetails = styled.div`
  padding: 14px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CategorySpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const TopicName = styled.h3`
  font-weight: 700;
  font-size: 14px;
  flex-grow: 2;
  white-space: wrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const RatingContainer = styled.div`
  display: flex;
  font-size: 16px;
  color: var(--stars-gold);
  margin-bottom: 12px;
`;
const AuthorSpan = styled.span`
  font-size: 12px;
  color: gray;
  font-weight: 400;
`;

const TopicCard = () => {
    return <StyledAnchor>
      <ImageBanner><StyledImg/></ImageBanner>
  </StyledAnchor>
};

export default TopicCard;

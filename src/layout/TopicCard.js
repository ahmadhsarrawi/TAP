import React from "react";
import styled from "styled-components";
import HTML from "../assets/images/html.png";
import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const StyledAnchor = styled(Link)`
  color: var(--body-text);
  text-decoration: none;
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
export const RatingContainer = styled.div`
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

const TopicCard = ({ id, topic, category, image, name }) => {
  return (
    <StyledAnchor to={`/details?id=${id}`}>
      <ImageBanner>
        <StyledImg src={require(`../assets/images/${image}`)} />
      </ImageBanner>
      <CardDetails>
        <CategorySpan>{category}</CategorySpan>
        <TopicName>{topic}</TopicName>
        <RatingContainer>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </RatingContainer>
        <AuthorSpan>{name}</AuthorSpan>
      </CardDetails>
    </StyledAnchor>
  );
};

export default TopicCard;

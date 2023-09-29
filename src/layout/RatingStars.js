import React from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingContainer = styled.div`
  display: flex;
  font-size: 16px;
  color: var(--stars-gold);
  margin-bottom: 12px;
`;

function ratingHandler(rating) {
  const ratingArray = [];
  const roundedRating = Math.round(rating);
  for (let i = 0; i < 5; i++) {
    i < roundedRating
      ? ratingArray.push(<AiFillStar key={i}/>)
      : ratingArray.push(<AiOutlineStar key={i}/>);
    }
    return [...ratingArray];
}

const RatingStars = ({ rating }) => {
  return <RatingContainer>{ratingHandler(rating)}</RatingContainer>;
};

export default RatingStars;

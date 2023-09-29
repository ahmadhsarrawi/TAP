import React from "react";

import styled from "styled-components";
import TopicCard from "./TopicCard";
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 260px;
  gap: 30px;
  padding-inline: 15px;
  margin-inline: auto;
  @media (min-width: 1120px) {
    grid-auto-rows: 280px;
    padding-inline: 35px;
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px;
    padding-inline: 55px;
  }
`;

const CardsView = ({data}) => {
  return <CardsContainer>{
    data.map(item => {
      return <TopicCard name={item.name} id={item.id} key={item.id} category={item.category} topic={item.topic} image={item.image} rating={item.rating} />
  })
  }</CardsContainer>;
};

export default CardsView;

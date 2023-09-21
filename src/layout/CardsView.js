import React from "react";

import styled from "styled-components";

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

const CardsView = (props) => {
  return <CardsContainer>{props.children}</CardsContainer>;
};

export default CardsView;

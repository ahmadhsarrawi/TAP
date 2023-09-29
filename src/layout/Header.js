import React from "react";
import styled from "styled-components";
import NavButton from "../components/NavButton";
import { RatingContainer } from "./TopicCard";

const StyledHeader = styled.header``;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  background-color: var(--bg_default);
  align-items: center;
  height: 66px;
  padding-inline: 15px;

  @media (min-width: 1120px) {
    height: 70px;
  }
`;

const Heading = styled.h3`
  color: var(--brand-primary);
  font-weight: 700;
  margin-right: auto;
  font-size: 15px;
  
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
const PolygonsBanner = styled.div`
  background-color: var(--bg_default);
  width: 100%;
  height: 26px;
  @media (min-width: 560px) {
    height: 30px;
  }
  @media (min-width: 840px) {
    height: 34px;
  }
  @media (min-width: 1120px) {
    height: 50px;
  }
  @media (min-width: 1440px) {
    height: 64px;
  }
`;

const Polygon2 = styled.div`
  height: 100%;
  background-color: var(--brand-secondary);
  opacity: 0.8;
  clip-path: polygon(100% 0%, 100% 100%, 0% 10%, 0% 0%);
`;
const Polygon1 = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to right,
    var(--brand-primary),
    var(--brand-secondary)
  );
  clip-path: polygon(0% 0%, 100% 0%, 100% 10%, 0% 100%);
  margin-top: -26px;
  @media (min-width: 560px) {
    margin-top: -30px;
  }
  @media (min-width: 840px) {
    margin-top: -34px;
  }
  @media (min-width: 1120px) {
    margin-top: -50px;
  }
  @media (min-width: 1440px) {
    margin-top: -64px;
  }
`;

const WelcomeBanner = styled.div`
  background-color: var(--bg_default);
  padding-inline: 15px;
  margin-inline: auto;
  @media (min-width: 840px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1120px) {
    padding-inline: 35px;
  }
  @media (min-width: 1440px) {
    padding-inline: 55px;
  }
`;

const ScriptContaier = styled.div`
  padding-top: 9px;
  margin-bottom: 20px;
  color: var(--body-text);
  @media (min-width: 1440px) {
    padding-top: 0px;
  }
`;
const StyledHeading2 = styled.h2`
  color: var(--brand-secondary);
  font-size: 20px;
  font-weight: 700;
  line-height: 0.9;
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;
const StyledParagraph = styled.p`
  color: var(--body-text);
  font-size: 15px;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <Heading >Web Topics</Heading>
        <NavButton icon="moon">Dark Mode</NavButton>
        <NavButton icon="heart">Favourites</NavButton>
      </Wrapper>
      <PolygonsBanner>
        <Polygon2 />
        <Polygon1 />
      </PolygonsBanner>
      <WelcomeBanner>
        <ScriptContaier>
          <StyledHeading2>Welcome to our website!</StyledHeading2>
          <StyledParagraph>
            We have a new design that's fresh, modern, and easy to use.
          </StyledParagraph>
        </ScriptContaier>
      </WelcomeBanner>
    </StyledHeader>
  );
};

export default Header;
/*
<div class="title-container container">
        <div class="script-container">
          <h2>Welcome to our website!</h2>
          <p>We have a new design that's fresh, modern, and easy to use.</p>
        </div>
      </div>
*/

import React from "react";
import styled from "styled-components";
import html from "../assets/images/javascript.jpg";
import FavoriteButton from "../components/FavoriteButton";
const CardWrapper = styled.div`
  grid-area: card;
  overflow: visible;
  @media (min-width: 720px) {
    padding-top: 15px;
  }
  @media (min-width: 1440px) {
    max-width: 320px;
    padding-block: 30px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-bg);
  border: 1px solid var(--lines-color);
  position: relative;
  @media (min-width: 270px) {
    margin-bottom: 24px;
  }
  @media (min-width: 720px) {
    border: 2px solid var(--white-border);
    box-shadow: 0px 0px 25px -13px rgb(0, 0, 0, 0.3);
  }
`;
const ImageBanner = styled.div`
  @media (min-width: 270px) {
    height: 200px;
  }
  @media (min-width: 560px) {
    height: 300px;
  }
  @media (min-width: 720px) {
    height: 220px;
  }
  @media (min-width: 1440px) {
    height: 200px;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardInfo = styled.div`
  background-color: var(--white-bg);
  color: var(--dark-text);
  @media (min-width: 270px) {
    padding: 12px 10px;
  }
  @media (min-width: 1440px) {
    padding: 18px 16px;
  }
`;
const CardTitleContainer = styled.span`
  font-weight: 700;
  @media (min-width: 270px) {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding-right: 12px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 10px;
    font-size: 17px;
  }
`;

const DottedText = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const CardTitle = styled(DottedText)`
  display: inline-block;
  max-width: 280px;
  @media (min-width: 560px) {
    max-width: 320px;
  }
  @media (min-width: 720px) {
    max-width: 400px;
  }
`;
const BySpan = styled.span`
  font-weight: 400;
`;
const AuthorSpan = styled.span`
  text-decoration: underline;
  color: var(--brand-primary);

  @media (min-width: 270px) {
    word-wrap: break-word;
    text-overflow: ellipsis;
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;
const AddFavoriteBox = styled.div`
  border: 1px solid var(--light-border);
  @media (min-width: 270px) {
    padding: 6px 10px 0px;
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    padding: 18px 18px 6px;
    font-size: 12px;
  }
`;
const InterestedText = styled.p`
  margin-bottom: 8px;
  width: 100%;
  text-align: center;

  @media (min-width: 560px) {
    margin-bottom: 10px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 10px;
    font-weight: 400;
    text-align: start;
    font-size: 16px;
  }
`;
const UnlimitedCreditsSpan = styled.span`
  color: var(--gray-font);
  font-size: 14px;
  display: block;
  text-align: center;
  margin-inline: auto;
  @media (min-width: 270px) {
    margin-bottom: 10px;
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;

const DetailsCard = ({ item }) => {
  return (
    <CardWrapper>
      <Card>
        <ImageBanner>
          <StyledImage src={require(`../assets/images/${item.image}`)} />
        </ImageBanner>
        <CardInfo>
          <CardTitleContainer>
            <CardTitle>{item.topic}</CardTitle>
            <BySpan>by</BySpan>
            <AuthorSpan>{item.name}</AuthorSpan>
          </CardTitleContainer>
          <AddFavoriteBox>
            <InterestedText>Interested about this topic?</InterestedText>
            <FavoriteButton />
            <UnlimitedCreditsSpan>Unlimited Credits</UnlimitedCreditsSpan>
          </AddFavoriteBox>
        </CardInfo>
      </Card>
    </CardWrapper>
  );
};

export default DetailsCard;

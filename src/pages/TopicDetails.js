import React, { useEffect, useState } from "react";
import DetailsInfo from "../layout/DetailsInfo";
import styled from "styled-components";
import DetailsCard from "../layout/DetailsCard";

import ListView from "../layout/ListView";
import { loadTopics } from "../APIs/getAPI";
import Loader from "../components/Loader";
const DetailsWrapper = styled.main`
  padding: 0px 0px 16px;
  min-height: 100vh;
  margin: -20px 0px 16px;
`;
const DetailsGrid = styled.section`
  display: grid;
  grid-template-areas:
    " info info card "
    " list list card "
    "footer footer footer ";
  margin-inline: auto;
  @media (min-width: 270px) {
    grid-template-areas:
      " info "
      " card "
      "list"
      "footer  ";
  }
  @media (min-width: 720px) {
    grid-template-areas:
      "  info info card "
      "list list card"
      "footer footer footer ";
    gap: 20px;
    padding-right: 15px;
    max-width: 900px;
  }
  @media (min-width: 1440px) {
    max-width: 920px;
    gap: 30px;
  }
`;




const TopicDetails = () => {

  const [topic, setTopic] = useState('');

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id')
  

  useEffect(() => {
    
    loadTopics(`details/${id}`).then(data=>setTopic(data))

  },[])

  return (
    <DetailsWrapper>
      {topic?<><DetailsGrid>
        <DetailsInfo item={topic} />
        <DetailsCard item={topic} />

        <ListView item={topic.subtopics} />
      </DetailsGrid></>:<Loader/>}
    </DetailsWrapper>
  );
};

export default TopicDetails;

import React from "react";
import Header from "../layout/Header";
import MainLayout from "../layout/MainLayout";
import SearchSection from "../components/SearchSection";
import NumberOfTopics from "../layout/NumberOfTopics";
import CardsView from "../layout/CardsView";
import TopicCard from "../components/TopicCard";

const Home = () => {
  return (
    <>
      <Header/>
      <MainLayout>
        <SearchSection />
        <NumberOfTopics />
        <CardsView>
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </CardsView>
      </MainLayout>
    </>
  );
};

export default Home;

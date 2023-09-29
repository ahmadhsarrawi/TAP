import React from "react";
import MainLayout from "../layout/MainLayout";
import SearchSection from "../components/SearchSection";
import NumberOfTopics from "../layout/NumberOfTopics";
import CardsView from "../layout/CardsView";
import { useEffect, useState } from "react";
import { loadTopics } from "../APIs/getAPI";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState(null);
  const [shownTopics, setShownTopics] = useState(null);
  const [numberOfTopics, setNumberOfTopics] = useState(0);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Default");

  const [filterOptions, setFilterOptions] = useState(null);
  const [filterBy, setFilterBy] = useState("Default");

  useEffect(() => {
    setIsLoading(true);

    loadTopics(`list?phrase=${search}`)
      .then((data) => {
        setTopics(data);
        setShownTopics(data);
        setNumberOfTopics(data.length);
      })
      .catch((err) => {
        setError(err);
        setTopics(null);
      })
      .finally(() => {
       setIsLoading(false);
      });
  }, [search]);

  useEffect(() => {
    if (topics) {
      const categories = new Set();
      topics.forEach((item) => {
        categories.add(item.category);
      });

      setFilterOptions(["Default", ...categories]);
    }
  }, [topics]);

  function sortTopics(e) {
    setSortBy(e.target.value);
  }
  function filterTopics(e) {
    setFilterBy(e.target.value);
  }

  //handling search
  let t;
  async function searchTopics(e) {
    clearTimeout(t);
    let delayedSearch = new Promise(function (resolve, reject) {
      let searchedTerm;
      t = setTimeout(() => {
        searchedTerm = e.target.value;

        resolve(searchedTerm);
      }, 300);
    });
    let result = await delayedSearch;
    setSearch(result);
  }

  useEffect(() => {
    if (topics) {
      let updatedTopics = [...topics];
      //filtering
      updatedTopics = filterer(filterBy, updatedTopics);

      //sorting
      switch (sortBy) {
        case "Topic Title":
          sorter("topic");
          break;
        case "Author Name":
          sorter("name");
          break;
        default:
          sorter("id");
          break;
      }
      function sorter(value) {
        updatedTopics = updatedTopics.sort(function (a, b) {
          return a[value] < b[value] ? -1 : a[value] > b[value] ? 1 : 0;
        });
      }
      function filterer(value, data) {
        if (value == "Default") {
          return [...data];
        }
        const filteredTopics = data.filter(function (item) {
          // console.log(value);
          return item.category == value;
        });
        // console.log(filteredTopics);
        return [...filteredTopics];
      }
      setShownTopics([...updatedTopics]);
      
    }
  }, [sortBy, filterBy, topics]);

  useEffect(() => {
    if (shownTopics) {
      setNumberOfTopics(shownTopics.length);
    }
  }, [shownTopics]);

  return (
    <>
      <MainLayout>
        <SearchSection
          sortHandler={sortTopics}
          searchHandler={searchTopics}
          filterOptions={filterOptions ? filterOptions : ["Default"]}
          filterTopics={filterTopics}
        />
        <NumberOfTopics number={numberOfTopics} />
        {topics ? <CardsView data={shownTopics} /> : <Loader />}
      </MainLayout>
    </>
  );
};

export default Home;

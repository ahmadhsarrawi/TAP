import React from "react";
import styled from "styled-components";
import InputWithIcon from "./InputWithIcon";
import DropDown from "./DropDown";

const SearchContainer = styled.div`
  padding-inline: 15px;
  margin-inline: auto;
  @media (min-width: 1120px) {
    padding-inline: 35px;
  }
  @media (min-width: 1440px) {
    padding-inline: 55px;
  }
`;

const StyledSearchSection = styled.section`
  box-shadow: 0px 0px 4px var(--lines-color);
  background-color: var(--bg_default);
  color: var(--body-text);
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 18px;
`;

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  @media (min-width: 840px) {
    width: 73%;
  }
`;

const DropDownsWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  @media (min-width: 840px) {
    width: 27%;
  }
`;

const sortOptions = ["Default", "Topic Title", "Author Name"];

const SearchSection = (props) => {
  return (
    <SearchContainer>
      <StyledSearchSection>
        <SearchBarWrapper>
          <InputWithIcon
            placeHolder="Search our website..."
            type="text"
            searchHandler={props.searchHandler}
          />
        </SearchBarWrapper>
        <DropDownsWrapper>
          <DropDown
            changeHandler={props.sortHandler}
            label={"Sort by:"}
            for="sort"
            options={sortOptions}
            leftBorder={0}
          />
          <DropDown
            label={"Filter by:"}
            for="filter"
            options={props.filterOptions}
            leftBorder={1}
            changeHandler={props.filterTopics}
            value={"Default"}
          />
        </DropDownsWrapper>
      </StyledSearchSection>
    </SearchContainer>
  );
};

export default SearchSection;

import React, { useContext } from "react";
import {CiSearch} from 'react-icons/ci'
import { SearchStyled } from "./Search.styled";
import { AppContext } from "@/helpers/Helpers";

type Props = {};

const Search = (props: any) => {

  const { setSearchTweets } = useContext(AppContext)

   const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  
  return <SearchStyled>
    <div className="searchContainer" >
    <form onSubmit={handleSubmit} className="subSearchContainer" >
    <input className="search" onChange={(e) => setSearchTweets(e.target.value)} type="text" placeholder="Search Twitter" />
      <button className="searchBtn" type="submit" > {< CiSearch fontSize='25px' cursor='pointer' />} </button>
      </form>
      </div>
  </SearchStyled>;
};

export default Search;

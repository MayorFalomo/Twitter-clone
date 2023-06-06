import React, { useContext, useState } from "react";
import {CiSearch} from 'react-icons/ci'
import { SearchStyled } from "./Search.styled";
import { AppContext } from "@/helpers/Helpers";

type Props = {};

const Search = (props: any) => {

  const {tweets, setTweets, setSearchTweets, searchTweets } = useContext(AppContext)

  const [showError, setShowError] = useState<boolean>(false)

  //function to search for tweets
  const handleSearch = async (e: any) => {
    e.preventDefault();
  try {
    const response = await fetch(`https://twitter-clone-server-nu.vercel.app/api/tweets/search?query=${searchTweets}`);
    
    if (response.ok) {
      const foundTweets = await response.json();
      setTweets(foundTweets);
    } else {
     console.log("Error in finding tweet");
    }
  } catch (error) {
    console.error(error);
  }
};
  
  return <SearchStyled>
    <div className="searchContainer" >
    <form onSubmit={ handleSearch} className="subSearchContainer" >
    <input className="search" onChange={(e) => setSearchTweets(e.target.value)} type="text" value={searchTweets} placeholder="Search Twitter" />
      <button className="searchBtn" type="submit" > {< CiSearch fontSize='25px' cursor='pointer' />} </button>
      </form>
      </div>
  </SearchStyled>;
};

export default Search;

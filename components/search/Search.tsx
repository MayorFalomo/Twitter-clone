import React from "react";
import {CiSearch} from 'react-icons/ci'
import { SearchStyled } from "./Search.styled";

type Props = {};

const Search = (props: any) => {
  return <SearchStyled>
    <div className="searchContainer" >
    <div className="subSearchContainer" >
    <input className="search" placeholder="Search Twitter" />
      <p className="searchBtn" > {< CiSearch fontSize='30px' cursor='pointer' />} </p>
      </div>
      </div>
  </SearchStyled>;
};

export default Search;

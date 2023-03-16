import React from "react";
import Navbar from "../navbar/Navbar";
import Search from "../search/Search";
import Trends from "../trends/Trends";
import { LayOutContainer } from "./Layout.styled";

//*HERE IS WHERE I STRUCTURE ALL OF MY LAYOUTS USING GRID

type Props = {};

const Layout = (props: any) => {
  return (
    <LayOutContainer>
      <div className="layOutContainer">
        <Navbar />
        {props.children}
        <div className="trendsContainer">
          <Search />
          <Trends />
        </div>
      </div>
    </LayOutContainer>
  );
};

export default Layout;

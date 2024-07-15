import MobileNav from "@/components/mobilenav/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/search/Search";
import SeeAllFollowers from "@/components/seeAllFollowers/SeeAllFollowers";
import Trends from "@/components/trends/Trends";
import { AppContext } from "@/helpers/Helpers";
import { AllFollowersStyle } from "@/styles/Allfollowers.styled";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";

type Props = {};

export const getServerSideProps = async (context: any) => {
  const { allfollowers } = context.params;

  const currentName = allfollowers;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/${allfollowers}/get-allfollowers`
  );
  const data = await res.json();

  return {
    props: {
      userData: data,
      currentName: currentName,
    },
  };
};

const allfollowers = ({ userData, currentName }: any) => {
  // console.log(userData, "USerdata");
  // console.log(currentName, "currentName");
  const [allFollowers, setAllFollowers] = useState<[]>([]);

  return (
    <AllFollowersStyle>
      <div className="connectStyleContainer">
        <Navbar />
        <div className="centerGridContainer">
          <div className="connectDetails">
            <p>
              <Link
                href={"/users/" + currentName}
                style={{ listStyle: "none" }}
                className="arrowBack"
              >
                <span className="shortArrow">
                  {<IoIosArrowRoundBack cursor="pointer" />}
                </span>
              </Link>
              <span style={{ marginLeft: "5px" }}>
                {" "}
                {currentName}'s followers{" "}
              </span>
            </p>
          </div>

          <div className="mappedContainer">
            {userData?.length > 0 ? (
              userData?.map((suggest: any) => (
                <div key={suggest?.id} className="subMapped">
                  <SeeAllFollowers suggest={suggest} />
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", marginTop: "60px" }}>
                {" "}
                This user currently has no followers
              </p>
            )}
          </div>
        </div>
        <div className="rightGridContainer">
          <Search />
          <Trends />
        </div>
        <div className="mobileNav">
          {" "}
          <MobileNav />
        </div>
      </div>
    </AllFollowersStyle>
  );
};

export default allfollowers;
// console.log(context.params);

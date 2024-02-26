import MobileNav from "@/components/mobilenav/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/search/Search";
import SeeAllFollowing from "@/components/seeAllFollowing/seeAllFollowing";
import Trends from "@/components/trends/Trends";
import { AppContext } from "@/helpers/Helpers";
import { AllFollowersStyle } from "@/styles/Allfollowers.styled";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

type Props = {};

export const getServerSideProps = async (context: any) => {
  const { allfollowing } = context.params;

  const currentName = allfollowing;

  const res = await fetch(
    `http://localhost:7000/api/users/${currentName}/all-following`
  );
  const data = await res.json();

  return {
    props: {
      userData: data,
      currentName: currentName,
    },
  };
};

const allfollowing = ({ userData, currentName }: any) => {
  console.log(userData, "USerdata");
  // console.log(currentName, "currentName");
  const [allFollowers, setAllFollowers] = useState<[]>([]);

  return (
    <AllFollowersStyle>
      <div className="connectStyleContainer">
        <Navbar />
        <div className="centerGridContainer">
          <div className="connectDetails">
            <Link
              href={"/users/" + currentName}
              style={{ listStyle: "none" }}
              className="arrowBack"
            >
              {<BsArrowLeft cursor="pointer" fontSize={25} />}{" "}
            </Link>
            <h2 style={{ marginLeft: "20px" }}> {currentName}'s Following</h2>
          </div>
          {/* <h3 > </h3> */}
          <div className="mappedContainer">
            {userData?.length > 0 ? (
              userData.map((suggest: any) => (
                <div key={suggest.usersId} className="subMapped">
                  <SeeAllFollowing suggest={suggest} />
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", marginTop: "60px" }}>
                {" "}
                This user has no following
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

export default allfollowing;
// console.log(context.params);

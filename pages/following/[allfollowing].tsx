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
import { IoIosArrowRoundBack } from "react-icons/io";

type Props = {};

export const getServerSideProps = async (context: any) => {
  const { allfollowing } = context.params;

  const currentName = allfollowing;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/${currentName}/all-following`
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
  // console.log(userData, "USerdata");
  // console.log(currentName, "currentName");
  const [allFollowers, setAllFollowers] = useState<[]>([]);
  //useEffect to load all registered users
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`)
      .then((res: any) => setAllFollowers(res.data))
      .catch((err: any) => console.log(err));
  }, []);

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
                  {<IoIosArrowRoundBack cursor="pointer" />}{" "}
                </span>
              </Link>
              <span className="followingName" style={{ marginLeft: "5px" }}>
                {" "}
                {currentName}'s following
              </span>
            </p>
          </div>
          {/* <h3 > </h3> */}
          <div className="mappedContainer">
            {userData?.length > 0 ? (
              userData?.map((suggest: any) => (
                <div key={suggest?.usersId} className="subMapped">
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

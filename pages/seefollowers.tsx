import MobileNav from "@/components/mobilenav/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/search/Search";
import SeeAllFollowers from "@/components/seeAllFollowers/SeeAllFollowers";
import Trends from "@/components/trends/Trends";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

type Props = {};

const seefollowers = (props: any) => {
  const { currentUser } = useContext(AppContext);

  const [allFollowers, setAllFollowers] = useState<[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/users/${currentUser}/get-allfollowers`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [currentUser]);

  return (
    <div className="connectStyleContainer">
      <Navbar />
      <div className="centerGridContainer">
        <div className="connectDetails">
          <Link href="/" style={{ listStyle: "none" }} className="arrowBack">
            {<BsArrowLeft cursor="pointer" fontSize={25} />}{" "}
          </Link>
          <h2>Connect </h2>
        </div>
        <h2>Suggested for you </h2>
        <div className="mappedContainer">
          {allFollowers.map((suggest: any) => (
            <div key={suggest._id} className="subMapped">
              <SeeAllFollowers suggest={suggest} />
            </div>
          ))}
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
  );
};

export default seefollowers;

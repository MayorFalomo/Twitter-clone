/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import MobileNav from "@/components/mobilenav/MobileNav";
import Navbar from "@/components/navbar/Navbar";
import ProfilePage from "@/components/profilepage/ProfilePage";
import Search from "@/components/search/Search";
import Trends from "@/components/trends/Trends";
import { AppContext } from "@/helpers/Helpers";
import { ProfileStyled } from "@/styles/Profile.styled";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";

type Props = {};

const profile = (props: Props) => {
  const { currentUser } = useContext(AppContext);
  const [cookies, setCookie] = useCookies(["user"]);
  const [userProfile, setUserProfile] = useState<any>([]);
  const [allUsersTweets, setAllUsersTweets] = useState<any>([]);
  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);
  // console.log(cookies.user, "id");

  //  useEffect(() => {
  // axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${currentUser?._id}`).then((res) => setUserProfile(res.data )).catch((err) => console.log(err)
  // )
  //  }, [cookies.user]);

  //  useEffect(() => {
  //    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/get-tweet/${currentUser?.username}`).then((res) => setAllUsersTweets(res.data.posts)).catch((err) => console.log(err))
  // }, [currentUser?.username])

  // console.log(currentUser);

  return (
    <ProfileStyled>
      <div className="profileStyleContainer">
        <Navbar />
        <div className="centerGridContainer">
          <ProfilePage
            editProfileModal={editProfileModal}
            setEditProfileModal={setEditProfileModal}
          />
        </div>
        <div className="rightGridContainer">
          <Search />
          {/* <Whotofollow /> */}
          <Trends />
        </div>
        <div className="mobileNav">
          {" "}
          <MobileNav />
        </div>
      </div>
    </ProfileStyled>
  );
};
export default profile;

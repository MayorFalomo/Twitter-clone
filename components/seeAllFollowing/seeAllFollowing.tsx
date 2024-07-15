import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { MdOutlineVerified } from "react-icons/md";
import { SeeAllFollowingStyled } from "./seeAllFollowing.styled";

type Props = {};

const SeeAllFollowing = (props: any) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  // console.log(props.suggest);
  const [current, setCurrent] = useState<any>(0);
  // const [allUsersTweets, setAllUsersTweets] = useState<any>([])
  const [followingButton, setFollowingButton] = useState<boolean>(false);
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false);
  const [urlParams, setUrlParams] = useState<string>(props.suggest?.usersId);
  const [usernames, setUsernames] = useState<string>(props.suggest?.name);
  const [usersAt, setUsersAt] = useState<string>(props.suggest?.userAt);
  const [usersProfileDp, setUsersProfileDp] = useState<string>(
    props.suggest?.profilePic
  );
  const [followersArray, setFollowersArray] = useState<any>(
    props.suggest?.following
  );

  const handleClick = (param: any) => {
    setCurrent(param);
  };

  const [allFollowing, setAllFollowing] = useState<any>([]);
  const [noOfFollowersArray, setNoOfFollowersArray] = useState<number>(
    allFollowing?.length
  );

  //useEffect finds the user i selected by their username and sets the user array object to allFollowing
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/get-user/${props.suggest.name}`
      )
      .then((res: any) => {
        setAllFollowing(res.data);
      })
      .catch((err: any) => console.log(err));
  }, []);

  // console.log(allFollowing, "This is allFollowers");
  // console.log(followingArray, "following Array");
  // console.log(noOfFollowingsArray, "no of following");

  // useEffect(() => {
  //       axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/get-tweet/${props.user?.username}`)
  //       .then((res) => setAllUsersTweets(res.data)).catch((err) => console.log(err))
  // }, [props.user?.username])

  //Handle follow of a user
  const handleFollow = async () => {
    setFollowingButton(true);
    const followAUser = {
      currentUserName: currentUser?.username, //username of the user who is following the current user.
      currentUsersAt: currentUser?.usersAt,
      currentProfileDp: currentUser?.profilePic,
      currentUserId: currentUser?._id,
      userToAddToName: usernames,
      userToAddToAt: usersAt,
      userToAddToProfilePic: usersProfileDp, //username of the user who is following the current user.
      usersId: urlParams,
    };
    // console.log(props.suggest, "This Suggest props");

    try {
      setCurrentUser({
        ...currentUser,
        following: [...currentUser?.following, followAUser],
      });
      await axios
        .put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/follow-user`,
          followAUser
        )
        .catch((err) => console.log(err));
      setFollowingButton(true);
      setNoOfFollowersArray(allFollowing?.length + 1);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(currentUser, "currentUser following");
  // console.log(props.suggest, "This is props.suggest");
  // console.log(
  //   currentUser?.following.map((val: any) => val),
  //   "This is val filtered"
  // );
  //Handle Unfollowing of a user
  const handleRemoveFollower = async () => {
    const data = {
      userToBeUnfollowed: urlParams,
      currentUser: currentUser?._id,
    };

    try {
      await axios
        .put(`${process.env.NEXT_PUBLIC_BASE_URL}/users/unfollow-user`, data) //username of the user who is following the current user.
        .catch((err) => console.log(err));
      setNoOfFollowersArray(allFollowing.length);
      let filtered = allFollowing.filter(
        (val: any) => val.usersId !== props.suggest?._id
      );

      setCurrentUser({ ...currentUser, following: [...filtered] });
      setFollowingButton(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SeeAllFollowingStyled>
      <div className="meetContainer">
        <div className="subConnectFlex">
          <div
            style={{
              backgroundImage: `url(${props.suggest?.profilePic})`,
              border: "1px white solid",
            }}
            className="bgImg"
          ></div>
          <div className="followFlex">
            <div>
              <Link href={"/users/" + props.suggest?.name}>
                <h3>
                  {props.suggest?.name}{" "}
                  <span style={{ color: "#1d9aef" }}>
                    {props.suggest?.followers?.length > 5 ? (
                      <MdOutlineVerified />
                    ) : (
                      ""
                    )}
                  </span>{" "}
                </h3>
              </Link>
              <p style={{ color: "#575B5F" }} className="usersAt">
                {props.suggest?.userAt}{" "}
              </p>
              <p>{props.suggest?.bio} </p>
            </div>
            <div className="singleUserFollow">
              {currentUser?.following?.some(
                (e: any) => e.usersId === props.suggest?.usersId
              ) ? (
                <button
                  onClick={handleRemoveFollower}
                  onMouseEnter={() => setOnMouseHover(true)}
                  onMouseLeave={() => setOnMouseHover(false)}
                  className="btn-following"
                >
                  {onMouseHover ? "Unfollow" : "Following"}{" "}
                </button>
              ) : (
                <button
                  onClick={handleFollow}
                  className="btn-follow"
                  disabled={currentUser?._id == props.suggest?.usersId}
                >
                  Follow{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </SeeAllFollowingStyled>
  );
};

export default SeeAllFollowing;

import axios from "axios";
import moment from "moment";
import React, { useState, useEffect, useContext } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BiCalendar, BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowLeft, BsBalloon } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { RxEnvelopeClosed } from "react-icons/rx";
import { SingleUserStyle } from "./Singleuser.styled";
import SingleUserReplies from "./SingleUserReplies";
import Singleusertweets from "../singletweet/Singleusertweets";
import { AppContext } from "@/helpers/Helpers";
import EditProfileModal from "../editprofilemodal/EditProfileModal";
import Link from "next/link";
import { FcCancel } from "react-icons/fc";
import toast from "react-hot-toast";
import { IoCompassOutline } from "react-icons/io5";

type Props = {};

interface IBlocked {
  username: string;
  id: string;
  usersAt: string;
  profilePic: string;
}

//[username] in pages is the parent component
const Singleuser = (props: any) => {
  const { currentUser, setCurrentUser, user } = useContext(AppContext);

  const [current, setCurrent] = useState<number>(0);
  const [allUsersTweets, setAllUsersTweets] = useState<any>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [followingButton, setFollowingButton] = useState<boolean>(false);
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false);
  // const [onMouseHover, setOnMouseHover] = useState<boolean>(false);
  const [urlParams, setUrlParams] = useState<string>(props.user?._id);
  const [usernames, setUsernames] = useState<string>(props.user?.username);
  const [usersAt, setUsersAt] = useState<string>(props.user?.usersAt);
  const [usersProfileDp, setUsersProfileDp] = useState<string>(
    props.user?.profilePic
  );
  const [followersArray, setFollowersArray] = useState<any>(
    props.user?.followers
  );
  const [noOfFollowersArray, setNoOfFollowersArray] = useState<number>(
    followersArray?.length
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [openBlockedTweets, setOpenBlockedTweets] = useState<boolean>(false);

  const handleClick = (param: number) => {
    setCurrent(param);
  };

  // console.log(followingArray, "following Array");
  // console.log(noOfFollowingsArray, "no of following");

  useEffect(() => {
    if (props.user?.username) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/tweets/get-tweet/${props.user?.username}`
        )
        .then((res) => setAllUsersTweets(res.data))
        .catch((err) => console.log(err));
      if (currentUser) {
        currentUser.blocked?.some(
          (val: IBlocked) => val.username === usernames
        ) && setOpenBlockedTweets(true);
      }
    }
  }, [props.user?.username]);

  //Handle follow of a user
  const handleFollow = async () => {
    // e.preventDefault()
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
      setNoOfFollowersArray(followersArray?.length + 1);
    } catch (err) {
      console.log(err);
    }
  };

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
      setNoOfFollowersArray(followersArray?.length);
      let filtered = currentUser?.following.filter(
        (val: any) => val.usersId !== props.user?._id
      );
      setCurrentUser({ ...currentUser, following: [...filtered] });
      setFollowingButton(false);
    } catch (err) {
      console.log(err);
    }
  };

  const blockUser = async () => {
    const data = {
      _id: currentUser?._id,
    };

    try {
      const response = await axios({
        method: "put",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/${props.user.username}/block`,
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data) {
        setCurrentUser(response.data.response);
        toast.success("blocked successfully!", {
          style: {
            backgroundColor: "#333",
            color: "#fff",
          },
        });
        // const addedBlockedToArray = currentUser?.blocked.push(
        //   blockedUserDetails
        // );
        // console.log(addedBlockedToArray, "addedblocked");
      }
    } catch (error) {
      console.log(error, "An Error has occurred");
      toast.error("Failed to block this user", {
        style: {
          backgroundColor: "#333",
          color: "#fff",
        },
      });
    }
  };

  const unBlockUser = async () => {
    const data = {
      _id: currentUser?._id,
    };

    try {
      const response = await axios({
        method: "put",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/${usernames}/unblock`,
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        setCurrentUser(response.data.currentUser);
        // setCurrentUser();
        // (prev: any) => ({
        //   ...prev,
        //   blocked: [
        //     ...prev.blocked.filter(
        //       (block) => block.username !== props.user.username
        //     ),
        //   ],
        // })
      }
    } catch (error) {
      console.log(error, "Error Unblocking user");
    }
  };

  // console.log(
  //   currentUser?.blocked?.some((e: any) => e.username == props.user?.username)
  // );

  //  const handleCopyToClipboard = (param:any) => {
  // navigator.clipboard.writeText(
  //   `https://insttagg-server.vercel.app/post/${param}`
  // );
  // setCopied(!copied);
  // };

  return (
    <SingleUserStyle>
      <div className="profilePageStyled">
        <div className="subProfileStyle">
          <div className="subProfileFlex">
            <Link href="/" className="arrowLeft">
              {<BsArrowLeft cursor="pointer" />}{" "}
            </Link>
            <div className="profileUsersDetails">
              <h1>
                <span>{props.user?.username}</span>
                <span style={{ paddingTop: "5px" }}>
                  {noOfFollowersArray >= 5 ? (
                    <MdOutlineVerified color="#1d9aef" />
                  ) : (
                    ""
                  )}
                </span>
              </h1>
              <p>{allUsersTweets.posts?.length} Tweets</p>
            </div>
          </div>
          <div className="profilePhotoContainers">
            <div
              style={{ backgroundImage: `url(${props.user?.coverPhoto})` }}
              className="backDropPhoto"
            >
              {" "}
            </div>
            <div
              style={{ backgroundImage: `url(${props.user?.profilePic})` }}
              className="profileDp"
            ></div>
          </div>
          {currentUser?.username === props.user?.username ? (
            <div className="editProfileBtn">
              <button> Your profile </button>
            </div>
          ) : (
            <div className="profilePageIcons">
              <div className="pageIcons">
                <span
                  className="dots"
                  onClick={() => setModalOpen((prev: boolean) => !prev)}
                >
                  {<BiDotsHorizontalRounded />}{" "}
                </span>
                {modalOpen && (
                  <div className="optionsModal">
                    {currentUser.blocked.some(
                      (prev: any) => prev.username == props.user?.username
                    ) ? (
                      <p onClick={unBlockUser}>
                        {" "}
                        <span>{<IoCompassOutline />} </span>{" "}
                        <span>Unblock {props.user?.usersAt}</span>{" "}
                      </p>
                    ) : (
                      <p onClick={blockUser}>
                        {" "}
                        <span> {<FcCancel />} </span>{" "}
                        <span> Block {props.user?.usersAt} </span>
                      </p>
                    )}
                  </div>
                )}
              </div>
              <Link href="/messages">
                <span className="dots">{<RxEnvelopeClosed />} </span>
              </Link>
              {currentUser?.blocked?.some(
                (e: any) => e.username == props.user?.username
              ) && (
                <div className="blockedBtnContainer">
                  {onMouseHover ? (
                    <button
                      onClick={unBlockUser}
                      onMouseEnter={() => setOnMouseHover(true)}
                      onMouseLeave={() => setOnMouseHover(false)}
                      className="unBlockBtn"
                    >
                      {onMouseHover ? "UnBlock" : "Blocked"}
                    </button>
                  ) : (
                    <button
                      onClick={blockUser}
                      onMouseEnter={() => setOnMouseHover(true)}
                      onMouseLeave={() => setOnMouseHover(false)}
                      className="blockBtn"
                    >
                      Blocked
                    </button>
                  )}
                </div>
              )}

              {currentUser?.blocked?.some(
                (e: any) => e.username === props.user?.username
              ) ? (
                ""
              ) : (
                <div className="singleUserFollow">
                  {currentUser?.following?.some(
                    (e: any) => e.usersId === props.user?._id
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
                      disabled={currentUser?.username == props.user?.username}
                    >
                      Follow{" "}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
          {props.editProfileModal ? <EditProfileModal /> : ""}
          <div className={props.editProfileModal ? "overlay" : "hideOverlay"}>
            {" "}
          </div>
          <div className="userDetailsContainer">
            <h1 style={{ fontWeight: 800 }}>
              <span>{props.user?.username}</span>
              <span style={{ paddingTop: "5px" }}>
                {noOfFollowersArray >= 5 ? (
                  <MdOutlineVerified color="#1d9aef" />
                ) : (
                  ""
                )}
              </span>
            </h1>
            {/* <span style={{color:'#1d9aef'}}  >{noOfFollowersArray >= 5 ? <MdOutlineVerified color='#1d9aef' /> : "" }</span> */}
            <p
              style={{ color: "#575B5F", fontWeight: 600 }}
              className="usersAt"
            >
              {props.user?.usersAt}{" "}
            </p>
            <div
              className="usersBio"
              style={{ margin: "30px auto", fontWeight: 600 }}
            >
              <p style={{ color: "#BABBBC" }}>{props.user?.bio} </p>
            </div>
            <div
              className="usersExtraInfoContainer"
              style={{ margin: "30px auto" }}
            >
              <div className="usersExtraInfo">
                <span style={{ color: "#575B5F", fontWeight: 600 }}>
                  {<CiLocationOn />} {props.user?.location}{" "}
                </span>
                <a href={props.user?.links} target="_blank">
                  <span
                    style={{ color: "#575B5F", fontWeight: 600 }}
                    className="usersLink"
                  >
                    {" "}
                    {<AiOutlineLink />} {props.user?.links}{" "}
                  </span>
                </a>
                <span style={{ color: "#575B5F", fontWeight: 600 }}>
                  {<BsBalloon />} {props.user?.birthday}{" "}
                </span>
                <br />
              </div>
              <p
                style={{ color: "#575B5F", fontWeight: 600 }}
                className="createdAt"
              >
                {<BiCalendar />} Joined{" "}
                {moment(props.user?.createdAt).format("MMMM YYYY")}{" "}
              </p>
            </div>
            <div className="followContainer" style={{ marginBottom: 70 }}>
              <Link href={"/following/" + props.user?.username}>
                <p>
                  {" "}
                  {props.user?.following?.length} <span>Following</span>{" "}
                </p>
              </Link>
              <Link href={"/followers/" + props.user?.username}>
                <p>
                  {noOfFollowersArray} <span>Followers </span>{" "}
                </p>
              </Link>
            </div>
          </div>
          {currentUser.blocked?.some(
            (val: IBlocked) => val.username == props.user?.username
          ) && openBlockedTweets == true ? (
            ""
          ) : (
            <ul className="tweetsDetails">
              <li
                onClick={() => handleClick(0)}
                className={current == 0 ? "border-bottom" : "no-border"}
                style={{ cursor: "pointer" }}
              >
                Tweets{" "}
              </li>
              <li
                onClick={() => handleClick(1)}
                className={current == 1 ? "border-bottom" : ""}
                style={{ cursor: "pointer" }}
              >
                Replies{" "}
              </li>
              <li
                onClick={() => handleClick(2)}
                className={current == 2 ? "border-bottom" : ""}
                style={{ cursor: "pointer" }}
              >
                Media{" "}
              </li>
              <li
                onClick={() => handleClick(3)}
                className={current == 3 ? "border-bottom" : ""}
                style={{ cursor: "pointer" }}
              >
                {" "}
                Likes
              </li>
            </ul>
          )}

          {currentUser.blocked?.some(
            (prev: IBlocked) => prev.username === props.user?.username
          ) && openBlockedTweets == true
            ? ""
            : current == 0 && (
                <div className="singleTweetsContainer">
                  {allUsersTweets?.posts?.map((allTweets: any) => (
                    <div key={allTweets._id} className="singleTweet">
                      <Singleusertweets allTweets={allTweets} />
                    </div>
                  ))}
                  {allUsersTweets.posts?.length == 0 && (
                    <div className="noTweetMessage">
                      <h3>This user has no tweets</h3>{" "}
                    </div>
                  )}
                </div>
              )}
          {currentUser.blocked?.some(
            (prev: IBlocked) => prev.username === props.user?.username
          ) && openBlockedTweets == true
            ? " "
            : current == 1 && <SingleUserReplies />}

          {currentUser.blocked?.some(
            (prev: IBlocked) => prev.username === props.user?.username
          ) && openBlockedTweets == true
            ? ""
            : current == 2 && <SingleUserReplies />}
          {currentUser.blocked?.some(
            (prev: IBlocked) => prev.username === props.user?.username
          ) && openBlockedTweets == true
            ? " "
            : current == 3 && <SingleUserReplies />}

          {currentUser.blocked?.some(
            (prev: IBlocked) => prev.username === props.user?.username
          ) &&
            openBlockedTweets == true && (
              <div className="blockedContainer">
                <div className="subCon">
                  <h1>{props.user.usersAt} is blocked </h1>
                  <p>
                    Are you sure you want to view these posts? Viewing posts
                    won’t unblock {props.user?.usersAt} Learn more{" "}
                  </p>
                  <button onClick={() => setOpenBlockedTweets(false)}>
                    View posts{" "}
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    </SingleUserStyle>
  );
};

export default Singleuser;

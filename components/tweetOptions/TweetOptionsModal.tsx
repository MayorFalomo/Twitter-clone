import React, { useContext, useState } from "react";
import { IoFlagOutline, IoPersonAddOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { AiOutlineFrown } from "react-icons/ai";
import { TweetOptionStyled } from "./TweetOptionStyled";
import toast from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

interface IFollowUser {
  _id: string;
  usersId: string;
  name: string;
  username: string;
  usersAt: string;
  userToAddToName: string;
}

interface IUnfollowUser {
  _id: string;
  usersId: string;
  name: string;
  username: string;
  currentUserId: string;
  userToAddToName: string;
}

interface IProps {
  setPopUpModal: React.Dispatch<React.SetStateAction<boolean>>;
  tweet: ITweetObject;
}

interface ITweetObject {
  _id: string;
  userId: string;
  username: string;
  profileDp: string;
  tweet: string;
  usersAt: string;
  currentUsername?: string;
}

const TweetOptionsModal = (props: IProps) => {
  const [popUpModal, setPopUpModal] = useState<boolean>(false);

  const {
    currentUser,
    setCurrentUser,
    suggestedUsers,
    bookmarks,
    setBookmarks,
    tweets,
    setTweets,
    setIsLoading,
  } = useContext(AppContext);

  const handleFollowAUser = async () => {
    try {
      const followObject = {
        currentUserName: currentUser?.username, //username of the user who is following the current user.
        currentUsersAt: currentUser?.usersAt,
        currentProfileDp: currentUser?.profilePic,
        currentUserId: currentUser?._id,
        userToAddToName: props.tweet?.username,
        userToAddToAt: props.tweet?.usersAt,
        userToAddToProfilePic: props.tweet.profileDp, //username of the user who is following the current user.
        usersId: props.tweet?.userId,
      };

      const response = await axios({
        method: "PUT",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/follow-user`,
        headers: {
          "Content-Type": "application/json",
        },
        data: followObject,
      });

      console.log(response, "podyg");

      if (response.data) {
        setCurrentUser({
          ...currentUser,
          following: [...currentUser?.following, followObject],
        });
        setPopUpModal(false);
        toast.success(`You have followed ${props.tweet.username}`, {
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast.error(`error following ${props.tweet.username}`, {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log(error, "An error has occurred");
    }
  };

  const handleUnfollow = async () => {
    try {
      const unfollowObject = {
        userToBeUnfollowed: props.tweet?.username,
        currentUser: currentUser?.username,
      };

      const response = await axios({
        method: "PUT",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/unfollow-user`,
        headers: {
          "Content-Type": "application/json",
        },
        data: unfollowObject,
      });

      if (response.data) {
        const filtered = currentUser.following.filter(
          (val: IUnfollowUser) =>
            val.name || val.userToAddToName !== props.tweet?.username
        );

        setCurrentUser({ ...currentUser, following: [...filtered] });
        toast.success(`You have unfollowed ${props.tweet.username}`, {
          style: {
            borderRadius: "5px",
            background: "#333",
            color: "#fff",
          },
        });
        setPopUpModal(false);
      }
    } catch (error) {
      toast.error(`You have unollowed ${props.tweet.username}`, {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log(error, "An error has occurred");
    }
  };

  const handleUninterested = async () => {
    const data = {
      username: props.tweet?.username,
    };

    try {
      const response = await axios({
        method: "put",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/tweet-options/${props.tweet?._id}/mark-as-uninterested`,
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response) {
        const newTweets = tweets.filter(
          (tweet: any) => tweet._id !== props.tweet?._id
        );

        setTweets(newTweets);
        toast.success("Tweet marked as uninterested");

        setPopUpModal(false);
      }
    } catch (error) {
      console.log(error, "An error has occurred");
      toast.error("error marking as uninterested");
    }
  };

  // console.log(currentUser, "currentUser");

  const handleBlocking = async () => {
    const data = {
      _id: currentUser._id,
    };

    setIsLoading(true);
    try {
      const res = await axios({
        method: "PUT",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/${props.tweet?.username}/block`,
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data) {
        const tweeks: any = res.data.tweets.reverse();
        const updatedUser = res.data.response;
        setTweets(tweeks);
        setCurrentUser(updatedUser);
        toast.success("You have blocked this user");

        // setTweets({ ...tweeks });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(`Error blocking ${props.tweet.username}`, {
        style: {
          borderRadius: "5px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const reportTweet = async () => {
    const data = {
      username: props.tweet.username,
    };

    try {
      const res = await axios({
        method: "PUT",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/tweet-options/${props.tweet?._id}/report-tweet`,
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data) {
        toast.success("Tweet Reported");
      }
    } catch (error) {
      toast.error("Failed to Report tweet");
      console.log(error, "An error has occurred while Reporting Tweet");
    }
  };

  return (
    <TweetOptionStyled>
      <AnimatePresence>
        <motion.div
          className="tweetOptions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ul>
            {currentUser.username === props.tweet?.username ? (
              <li style={{ opacity: 0.5 }}>
                {" "}
                <span style={{ paddingTop: "5px" }} className="optionsIcon">
                  {<IoPersonAddOutline />}{" "}
                </span>
                {currentUser.following?.some(
                  (e: IFollowUser) =>
                    e?.name === props.tweet?.username ||
                    e?.userToAddToName === props.tweet?.username
                ) ? (
                  <span>
                    Unfollow{" "}
                    {props.tweet?.usersAt.length > 12
                      ? props.tweet?.usersAt.slice(0, 11)
                      : props.tweet?.usersAt}
                  </span>
                ) : (
                  <span onClick={handleFollowAUser}>
                    Follow{" "}
                    {props.tweet?.usersAt.length > 11
                      ? props.tweet?.usersAt.slice(0, 11)
                      : props.tweet?.usersAt}
                  </span>
                )}
              </li>
            ) : (
              <li>
                {" "}
                <span style={{ paddingTop: "5px" }} className="optionsIcon">
                  {<IoPersonAddOutline />}{" "}
                </span>
                {currentUser.following?.some(
                  (e: IFollowUser) =>
                    e?.name === props.tweet?.username ||
                    e?.userToAddToName === props.tweet?.username
                ) ? (
                  <span onClick={handleUnfollow}>
                    Unfollow {props.tweet?.usersAt}
                  </span>
                ) : (
                  <span onClick={handleFollowAUser}>
                    Follow {props.tweet?.usersAt}
                  </span>
                )}
              </li>
            )}
            <li onClick={handleUninterested}>
              {" "}
              <span style={{ paddingTop: "5px" }} className="optionsIcon">
                {<AiOutlineFrown />}{" "}
              </span>
              <span> Uninterested in this tweet </span>
            </li>
            {props.tweet?.username == currentUser.username ? (
              <li style={{ opacity: 0.5 }}>
                {" "}
                <span style={{ paddingTop: "5px" }} className="optionsIcon">
                  {<FcCancel />}{" "}
                </span>{" "}
                <span> Block {props.tweet?.username} </span>
              </li>
            ) : (
              <li onClick={handleBlocking}>
                {" "}
                <span style={{ paddingTop: "5px" }} className="optionsIcon">
                  {<FcCancel />}{" "}
                </span>{" "}
                <span> Block {props.tweet?.username} </span>
              </li>
            )}
            <li onClick={reportTweet}>
              {" "}
              <span style={{ paddingTop: "5px" }} className="optionsIcon">
                {<IoFlagOutline />}{" "}
              </span>{" "}
              <span> Report tweet </span>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </TweetOptionStyled>
  );
};

export default TweetOptionsModal;

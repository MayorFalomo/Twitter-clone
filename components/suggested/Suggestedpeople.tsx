import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import Link from "next/link";
import React, { useState, useContext, memo } from "react";
import { SuggestedStyle } from "./SuggestedUser.styled";

type Props = {};

interface IFollowUser {
  currentUserName: string; //username of the user who is following the current user.
  currentUsersAt: string;
  currentProfileDp: string;
  currentUserId: string;
  userToAddToName: string;
  userToAddToAt: string;
  userToAddToProfilePic: string; //username of the user who is following the current user.
  usersId: string;
}

interface IUnfollowUser {
  _id: string;
  usersId: string;
  name: string;
  username: string;
  currentUserId: string;
  userToAddToName: string;
}

const Suggestedpeople = (props: any) => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const [followingButton, setFollowingButton] = useState<boolean>(false);
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false);
  const [urlParams, setUrlParams] = useState<string>(props.suggestedUser?._id);
  const [usernames, setUsernames] = useState<string>(
    props.suggestedUser?.username
  );
  const [usersAt, setUsersAt] = useState<string>(props.suggestedUser?.usersAt);
  const [usersProfileDp, setUsersProfileDp] = useState<string>(
    props.suggestedUser?.profilePic
  );
  const [followActive, setFollowActive] = useState<boolean>(false);

  const handleFollow = async () => {
    setUrlParams(props.suggestedUser?._id);
    setUsernames(props.suggestedUser?.username);
    setUsersAt(props.suggestedUser?.usersAt);
    setUsersProfileDp(props.suggestedUser?.profilePic);
    setFollowingButton(true);
    const followAUser: IFollowUser = {
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
      //  setNoOfFollowings()
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveFollower = async () => {
    const data = {
      userToBeUnfollowed: props.suggestedUser?.username,
      currentUser: currentUser?.username,
    };
    try {
      const response = await axios({
        method: "PUT",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/unfollow-user`,
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data) {
        let filtered = currentUser?.following.filter(
          (val: IUnfollowUser) =>
            val.name || val.userToAddToName !== props.suggestedUser?.username
        );
        setCurrentUser({ ...currentUser, following: [...filtered] });
        setFollowingButton(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SuggestedStyle>
      <div className="suggestedContainer">
        <div className="subSuggestedContainer">
          <Link
            href={`/users/${props.suggestedUser?.username}`}
            style={{
              backgroundImage: `url(${props.suggestedUser?.profilePic})`,
            }}
            className="profileImage"
          >
            {" "}
          </Link>
          <div>
            <Link href={`/users/${props.suggestedUser?.username}`}>
              <h3>{props.suggestedUser.username} </h3>
            </Link>
            <p>{props.suggestedUser.usersAt} </p>
          </div>
        </div>
        <div>
          {currentUser?.following?.some(
            (e: any) => e.usersId === props.suggestedUser?._id
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
              disabled={currentUser?.username == props.suggestedUser?.username}
            >
              Follow{" "}
            </button>
          )}
        </div>
      </div>
    </SuggestedStyle>
  );
};

export default React.memo(Suggestedpeople);

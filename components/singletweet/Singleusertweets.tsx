import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import React, { useState, useContext, useEffect, useMemo } from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsFillHeartFill } from "react-icons/bs";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import Slug from "../commentmodal/Commentmodal";
import { SingleUserTweetsStyle } from "./Singleusertweets.styled";
import { CiBookmark } from "react-icons/ci";

type Props = {};

//parent component is singleuser
const Singleusertweets = (props: any) => {
  const { currentUser, suggestedUsers } = useContext(AppContext);

  const [postId, setPostId] = useState(props.allTweets?._id);
  const [likeTweet, setLikeTweet] = useState<boolean>(false);
  const [retweet, setRetweet] = useState<boolean>(false);
  const [retweetCount, setRetweetCount] = useState<boolean>(false);
  const [likesArray, setLikesArray] = useState<any>(props.allTweets.likes);
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(
    likesArray?.length
  );
  const [commentModal, setCommentModal] = useState<boolean>(false);
  const [modalLink, setModalLink] = useState<string>("");
  const [urlParams, setUrlParams] = useState<string>(" ");
  const [getUsername, setGetUsername] = useState<string>("");
  const [views, setViews] = useState<number>(0);

  // useEffect(() => {
  //   const view = Math.floor(Math.random() * suggestedUsers?.length);
  //   setViews(view);
  // }, []);

  useMemo(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);

    setViews(view);
  }, [suggestedUsers?.length]);

  const handleLikeEvent = () => {
    if (likesArray.includes(likesArray.username)) {
      console.log("You cannot like this tweet");
    } else {
      // const handleAddLike = async () => {
      const likeData = {
        username: currentUser?.username,
        profileDp: currentUser?.profilePic,
        usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
        postId: props.allTweets._id,
      };
      axios
        .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/liketweet`, likeData)
        .catch((err) => console.log(err));
      setLikesArray([...likesArray, likeData]);
      setNoOfLikesArray(likesArray?.length + 1);
    }
  };

  const removeLike = async () => {
    setLikeTweet(false);
    const likeData = {
      username: currentUser?.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
      postId,
    };
    await axios
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/unlike-tweet`, likeData)
      .catch((err) => console.log(err));
    let filtered = likesArray.filter(
      (item: any) => item.username !== likeData.username
    );
    setLikesArray(filtered);
    setNoOfLikesArray(likesArray?.length - 1); //filtered is a array with all the items that are not the likeData.username, this is the
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setUrlParams(props.allTweets?._id);
    setCommentModal(true);
  };

  // console.log("hello");

  return (
    <SingleUserTweetsStyle>
      <div className="AllUserTweetContainer">
        {props.allTweets.length == 0 ? (
          <div className="noTweetMessage">
            <p>This user has no tweets</p>{" "}
          </div>
        ) : (
          <div className="AllUserTweet">
            <div
              style={{ backgroundImage: `url(${props.allTweets?.profileDp})` }}
              className="userTweetPic"
            >
              {" "}
            </div>
            <div className="flexUserInfoContainer">
              <div className="flexUserInfo">
                <h1>
                  {props.allTweets?.username.length > 11
                    ? props.allTweets?.username.slice(0, 10)
                    : props.allTweets?.username}{" "}
                </h1>
                <span>
                  {props.allTweets?.usersAt.length > 11
                    ? props.allTweets?.usersAt.slice(0, 8)
                    : props.allTweets?.usersAt}{" "}
                </span>
                <span className="createdAt">
                  {moment(new Date(props.allTweets?.createdAt)).fromNow()
                    .length > 6
                    ? moment(new Date(props.allTweets?.createdAt))
                        .fromNow()
                        .slice(0, 7)
                    : moment(new Date(props.allTweets?.createdAt)).fromNow()}
                </span>
              </div>
              <p className="tweetText">{props.allTweets?.tweet} </p>
              {props.allTweets?.picture?.length > 1 ? (
                <div
                  style={{
                    backgroundImage: `url(${props.allTweets?.picture})`,
                  }}
                  className="singleTweetImage"
                >
                  {" "}
                </div>
              ) : (
                ""
              )}
              {props.allTweets?.video?.length > 1 ? (
                <video
                  controls
                  className="video"
                  src={`${props.allTweets?.video}`}
                ></video>
              ) : (
                ""
              )}
              <div className="tweetOptions">
                <div className="flexIconsAndValues">
                  <p onClick={handleClick}>
                    {
                      <FaRegComment
                        className="likeIcon"
                        style={{ cursor: "pointer", color: "#71767B" }}
                      />
                    }
                  </p>
                  <span>{props.allTweets.comments?.length} </span>
                  {commentModal ? (
                    <div className="activeModal">
                      <Slug
                        urlParams={urlParams}
                        setCommentModal={setCommentModal}
                      />{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flexIconsAndValues">
                  {retweet ? (
                    <p>
                      {
                        <AiOutlineRetweet
                          onClick={() => setRetweet(false)}
                          className="likeIcon"
                          style={{ cursor: "pointer", color: "#00BA7C" }}
                        />
                      }
                    </p>
                  ) : (
                    <p>
                      {
                        <AiOutlineRetweet
                          onClick={() => setRetweet(true)}
                          className="likeIcon"
                          style={{ cursor: "pointer", color: "#71767B" }}
                        />
                      }
                    </p>
                  )}
                  <span>0 </span>
                </div>
                <div className="flexIconsAndValues">
                  {likesArray && (
                    <p>
                      {likesArray?.some(
                        (e: any) => e.username == currentUser?.username
                      ) ? (
                        <BsFillHeartFill
                          onClick={removeLike}
                          className="likeIcon"
                          style={{
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="likeIcon"
                          onClick={handleLikeEvent}
                          style={{ cursor: "pointer", color: "#71767B" }}
                        />
                      )}
                    </p>
                  )}
                  <span>{noOfLikesArray} </span>
                </div>
                <div className="flexIconsAndValues">
                  <p>
                    {
                      <BiBarChart
                        className="likeIcon"
                        style={{ cursor: "pointer", color: "#71767B" }}
                      />
                    }
                  </p>
                  <span>
                    {views}
                    {views > 10000 ? "k" : ""}{" "}
                  </span>
                </div>
                <div>
                  <p>
                    {
                      <CiBookmark
                        className="likeIcon"
                        style={{ cursor: "pointer", color: "#71767B" }}
                      />
                    }
                  </p>
                </div>
              </div>
              <Link
                href="/[id]"
                as={`/${props.allTweets?._id}`}
                className="thread"
              >
                Show this thread{" "}
              </Link>
            </div>
          </div>
        )}
      </div>
    </SingleUserTweetsStyle>
  );
};

export default Singleusertweets;

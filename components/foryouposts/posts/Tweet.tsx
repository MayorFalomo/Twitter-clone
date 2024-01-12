import React, { useContext, useEffect, useState } from "react";
import { BiBarChart, BiDotsHorizontalRounded } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineUpload,
} from "react-icons/ai";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Tweetstyled } from "./Tweet.styled";
import moment from "moment";
import Link from "next/link";
import { BsFillHeartFill } from "react-icons/bs";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import CommentModal from "@/components/commentmodal/Commentmodal";
import { RxHeart } from "react-icons/rx";
type Props = {};

//parent component is tweets
const Tweet = (props: any) => {
  const { currentUser, suggestedUsers, bookmarks, setBookmarks } = useContext(
    AppContext
  );

  const [postId, setPostId] = useState(props.tweet?._id);
  const [retweet, setRetweet] = useState<boolean>(false);
  const [likeTweet, SetLikeTweet] = useState<boolean>(false);
  const [retweetArray, setRetweetArray] = useState<any>(props.tweet?.retweet);
  const [likesArray, setLikesArray] = useState<any>(props.tweet?.likes);
  const [noOfRetweetArray, setNoOfRetweetArray] = useState<number>(
    retweetArray?.length
  );
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(
    likesArray?.length
  );
  const [modalLink, setModalLink] = useState<string>("");
  const [urlParams, setUrlParams] = useState<string>(" ");
  const [getUsername, setGetUsername] = useState<string>("");
  const [getTweetsUserName, setGetTweetsUserName] = useState<string>("");
  const [commentModal, setCommentModal] = useState<boolean>(false);
  const [openPictureModal, setOpenPictureModal] = useState<boolean>(false);

  //Retweet Function
  const handleAddRetweet = async () => {
    const retweetData = {
      username: props?.tweet.username,
      currentUserName: currentUser?.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
      id: props.tweet?._id,
      tweets: props.tweet?.tweet,
    };
    setRetweetArray([...retweetArray, retweetData]);
    setNoOfRetweetArray(retweetArray.length + 1);
    await axios
      .put(
        `https://twitter-clone-server-nu.vercel.app/api/tweets/retweet-tweet`,
        retweetData
      )
      .catch((err) => console.log(err));
  };

  //Remove Retweet
  const removeRetweet = async () => {
    setRetweet(false);
    const retweetData = {
      username: currentUser?.username,
      id: postId,
    };
    await axios
      .put(
        `https://twitter-clone-server-nu.vercel.app/api/tweets/un-retweet`,
        retweetData
      )
      .catch((err) => console.log(err));
    let filtered = retweetArray.filter(
      (item: any) => item.currentUserName !== retweetData.username
    );
    setRetweetArray(filtered);
    setNoOfRetweetArray(retweetArray?.length - 1); //filtered is a array with all the items that are not the likeData.username, this is the
  };

  //Add like function
  const handleAddLike = async () => {
    const likeData = {
      username: props.tweet.username, //This is the important bit, It is the username of the person whose tweet was liked
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
      tweets: props.tweet.tweet,
      id: props.tweet?._id,
      currentUserName: currentUser?.username,
    };
    setLikesArray([...likesArray, likeData]);
    setNoOfLikesArray(likesArray.length + 1);
    await axios
      .put(
        `https://twitter-clone-server-nu.vercel.app/api/tweets/liketweet`,
        likeData
      )
      .catch((err) => console.log(err));
  };

  //Handle Remove Like
  const removeLike = async () => {
    SetLikeTweet(false);
    const likeData = {
      username: currentUser?.username,
      id: postId,
    };
    await axios
      .put(
        `https://twitter-clone-server-nu.vercel.app/api/tweets/unlike-tweet`,
        likeData
      )
      .catch((err) => console.log(err));
    let filtered = likesArray.filter(
      (item: any) => item.currentUserName !== likeData.username
    );

    setLikesArray(filtered); //filtered is a array with all the items that are not the likeData.username, this is the
    setNoOfLikesArray(likesArray?.length - 1);
  };

  //Add a Bookmark function
  const handleBookmark = () => {
    const bookmarkData = {
      profileDp: props.tweet?.profileDp,
      username: props.tweet?.username,
      usersAt: props.tweet?.usersAt,
      tweet: props.tweet?.tweet,
      picture: props.tweet?.picture,
      video: props.tweet?.video,
      postId: props.tweet?._id,
      likes: props.tweet?.likes,
      comments: props.tweet?.comments,
      createdAt: props.tweet?.createdAt,
      userDetail: currentUser?._id,
      saved: true,
    };
    setBookmarks([...bookmarks, bookmarkData]);
    axios
      .post(
        `https://twitter-clone-server-nu.vercel.app/api/bookmarks/addBookmark`,
        bookmarkData
      )
      .catch((err) => console.log(err));
    props.setAddedToBookmark(true);
    setTimeout(() => {
      props.setAddedToBookmark(false);
    }, 3000);
  };

  //Function to get the id of a tweet so it can be sent as a prop and open a modal
  const handleClick = (e: any) => {
    e.preventDefault();
    setUrlParams(props.tweet?._id);
    setCommentModal(true);
  };

  // const handleLink = (e: any) => {
  //   e.preventDefault()
  //   setGetUsername(props.tweet?.username)
  // };

  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);
    setViews(view);
  }, []);

  return (
    <Tweetstyled>
      <div className="postsContainer">
        {<div className={commentModal ? "overlay" : "removeOverlay"}> </div>}
        <Link
          href={"/users/" + props.tweet?.username}
          className="profilePicture"
          style={{ backgroundImage: `url(${props.tweet?.profileDp})` }}
        ></Link>
        <div className="subPostsContainer">
          <div className="flexTweetProfileDetails">
            <div className="tweetProfileDetails">
              <Link
                href={"/users/" + props.tweet?.username}
                className="userName"
              >
                {" "}
                {props.tweet?.username}{" "}
              </Link>
              <span className="userAt">{props.tweet?.usersAt}</span>
              {props.tweet?.newDates == undefined ? (
                <span className="createdAt">
                  {moment(new Date(props.tweet?.createdAt)).fromNow()}
                </span>
              ) : (
                <span className="createdAt">a few seconds ago </span>
              )}
            </div>
            <div>
              {<BiDotsHorizontalRounded className="biDots" cursor="pointer" />}{" "}
            </div>
          </div>
          <p className="tweet-caption">{props.tweet?.tweet} </p>
          {props.tweet?.picture ? (
            <div
              onClick={() => setOpenPictureModal(true)}
              style={{ backgroundImage: `url(${props.tweet?.picture})` }}
              className="tweet-image"
            ></div>
          ) : (
            ""
          )}
          {props.tweet?.video ? (
            <video
              className="tweetVideo"
              src={`${props.tweet?.video}`}
              controls
            ></video>
          ) : (
            ""
          )}
          <div className="tweetOptions">
            <div className="flexIconsAndValues">
              <p onClick={handleClick}>
                <FaRegComment
                  className="likeIcon"
                  style={{ cursor: "pointer", color: "rgb(113,118,123)" }}
                />
              </p>
              <span>{props.tweet.comments?.length} </span>
              {commentModal ? (
                <div className="activeModal">
                  <CommentModal
                    urlParams={urlParams}
                    setCommentModal={setCommentModal}
                  />{" "}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flexIconsAndValues">
              {retweetArray && (
                <p>
                  {retweetArray.some(
                    (e: any) => e.currentUserName == currentUser?.username
                  ) ? (
                    <AiOutlineRetweet
                      onClick={removeRetweet}
                      className="likeIcon"
                      style={{
                        color: "#00BA7C",
                        cursor: "pointer",
                      }}
                    />
                  ) : (
                    <AiOutlineRetweet
                      className="likeIcon"
                      onClick={handleAddRetweet}
                      style={{ cursor: "pointer", color: "rgb(113,118,123)" }}
                    />
                  )}
                </p>
              )}
              <span>{noOfRetweetArray} </span>
            </div>
            <div className="flexIconsAndValues">
              {likesArray && (
                <p>
                  {likesArray.some(
                    (e: any) => e.currentUserName == currentUser?.username
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
                      onClick={handleAddLike}
                      style={{ cursor: "pointer", color: "rgb(113,118,123)" }}
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
                    style={{ cursor: "pointer", color: "rgb(113,118,123)" }}
                  />
                }
              </p>
              <span>
                {views.toLocaleString()}
                {views > 1000 ? "k" : ""}{" "}
              </span>
            </div>
            <div className="flexIconsAndValues">
              <p onClick={handleBookmark}>
                {
                  <AiOutlineUpload
                    className="likeIcon"
                    style={{ cursor: "pointer", color: "rgb(113,118,123)" }}
                  />
                }
              </p>
            </div>
          </div>
          <div className="showThread">
            <Link
              href={"/users/" + props.tweet?.username}
              style={{
                cursor: "pointer",
                backgroundImage: `url(${props.tweet?.profileDp})`,
              }}
              className="subUserPhoto"
            >
              {" "}
            </Link>
            <Link href="/[id]" as={`${props.tweet?._id}`}>
              <p>Show this thread </p>
            </Link>
          </div>
        </div>
        {openPictureModal ? (
          <div className="pictureModal">
            <span
              className="closeModalBtn"
              onClick={() => setOpenPictureModal(false)}
            >
              close{" "}
            </span>
            <img
              style={{ width: "100%", height: "100%" }}
              src={props.tweet?.picture}
              alt="tweet"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </Tweetstyled>
  );
};

export default Tweet;

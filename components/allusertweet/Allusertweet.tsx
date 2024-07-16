import moment from "moment";
import React, { useContext, useMemo, useState } from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AllUserTweets } from "./Allusertweet.styled";
import axios from "axios";
import Slug from "../commentmodal/Commentmodal";
import Link from "next/link";
import { AppContext } from "@/helpers/Helpers";
import Tippy from "@tippyjs/react";
import { RxBookmarkFilled } from "react-icons/rx";
import { CiBookmark } from "react-icons/ci";
import toast from "react-hot-toast";
import ReactLinkify from "react-linkify";

type Props = {};

interface IBookmark {
  _id: string;
  usersId: string;
  username: string;
  postId: string;
  tweet: string;
  picture: string;
  video: string;
  like: [];
  retweet: [];
  comment: [];
  createdAt: string;
}

//Parent component is SingleUsersTweet && AllUsersTweet
const Allusertweet = (props: any) => {
  const { currentUser, suggestedUsers, bookmarks, setBookmarks } = useContext(
    AppContext
  );

  const [postId, setPostId] = useState(props.allTweet?._id);
  const [likeTweet, setLikeTweet] = useState<boolean>(false);
  const [retweet, setRetweet] = useState<boolean>(false);
  const [likesArray, setLikesArray] = useState<any>(props.allTweet.likes);
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(
    likesArray?.length
  );
  const [commentModal, setCommentModal] = useState<boolean>(false);
  const [modalLink, setModalLink] = useState<string>("");
  const [urlParams, setUrlParams] = useState<string>(" ");
  const [getUsername, setGetUsername] = useState<string>("");
  const [views, setViews] = useState<number>(0);

  const handleLikeEvent = () => {
    if (likesArray.includes(likesArray.username)) {
      console.log("You cannot like this tweet");
    } else {
      const likeData = {
        username: currentUser?.username,
        profileDp: currentUser?.profilePic,
        usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
        postId: props.allTweet._id,
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
    }; //takes the id of the post and removes it from the
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
    setUrlParams(props.allTweet?._id);
    setCommentModal(true);
  };

  const handleLink = (e: any) => {
    e.preventDefault();
    setGetUsername(props.tweet?._username);
    //  setCommentModal(true)
  };

  useMemo(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);
    setViews(view);
  }, [suggestedUsers?.length]);

  //Add a Bookmark function
  const handleBookmark = async () => {
    const bookmarkData = {
      profileDp: props.allTweet?.profileDp,
      username: props.allTweet?.username,
      usersAt: props.allTweet?.usersAt,
      tweet: props.allTweet?.tweet,
      picture: props.allTweet?.picture,
      video: props.tweet?.video,
      postId: props.allTweet?._id,
      likes: props.allTweet?.likes,
      comments: props.allTweet?.comments,
      createdAt: props.allTweet?.createdAt,
      userDetail: currentUser?._id,
      saved: true,
    };
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks/addBookmark`,
        data: bookmarkData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data) {
        setBookmarks([...bookmarks, res.data.bookmark]);

        props.setAddedToBookmark(true);
        setTimeout(() => {
          props.setAddedToBookmark(false);
        }, 3000);
        toast("Added to bookmarks", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error, "Error bookmarking tweet");
      toast("Error bookmarking tweet", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  //Remove bookmark
  const removeTweetFromBookmark = async () => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks/delete-bookmark/${props?.tweet?._id}`,

        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data) {
        setBookmarks(
          bookmarks.filter(
            (bookmark: IBookmark) => bookmark.postId !== props.allTweet?._id
          )
        );
        toast.success("Tweet has been removed to boookmark", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
      toast("Error removing from bookmarks", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const componentDecorator = (
    decoratedHref: string,
    decoratedText: string,
    key: number
  ) => {
    if (decoratedHref == decoratedText) {
      return (
        <a href={decoratedHref} style={{ color: "#1d9aef" }} target="_blank">
          {decoratedText}
        </a>
      );
    } else {
      return (
        <Link href="/[id]" as={`${props.tweet?._id}`} legacyBehavior key={key}>
          <a>{decoratedText}</a>
        </Link>
      );
    }
  };

  return (
    <AllUserTweets>
      <div className="AllUserTweetContainer">
        {<div className={commentModal ? "overlay" : "removeOverlay"}> </div>}
        <div className="AllUserTweet">
          <div
            style={{ backgroundImage: `url(${props.allTweet?.profileDp})` }}
            className="userTweetPic"
          >
            {" "}
          </div>
          <div className="flexUserInfoContainer">
            <div className="flexUserInfo">
              <span className="usersUsername">{props.allTweet?.username} </span>
              <span style={{ color: "#575B5F", fontWeight: 500 }}>
                {props.allTweet?.usersAt.slice(0, 9)}...{" "}
              </span>
              <span
                className="createdAt"
                style={{ color: "#575B5F", fontWeight: 400 }}
              >
                {moment(new Date(props.allTweet?.createdAt)).fromNow()}
              </span>
            </div>
            <p className="tweetText">
              {" "}
              {/* <Link href="/[id]" as={`${props.allTweet?._id}`}> */}
              <ReactLinkify componentDecorator={componentDecorator}>
                {props.allTweet?.tweet}{" "}
              </ReactLinkify>
              {/* </Link>{" "} */}
            </p>
            {props.allTweet?.picture?.length > 1 ? (
              <div
                style={{ backgroundImage: `url(${props.allTweet?.picture})` }}
                className="tweet-image"
              ></div>
            ) : (
              ""
            )}
            {props.allTweet?.video?.length > 1 ? (
              <video
                width="100%"
                height="500px"
                controls
                className="video"
                src={`${props.allTweet?.video}`}
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
                <span>{props.allTweet.comments?.length} </span>
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
                      <FaRetweet
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
                    {likesArray.some(
                      (e: any) => e.username == currentUser?.username
                    ) ? (
                      <BsHeartFill
                        onClick={removeLike}
                        className="likeIcon"
                        style={{
                          color: "red",
                          // fontSize: 35,
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <AiOutlineHeart
                        className="likeIcon"
                        onClick={handleLikeEvent}
                        style={{ cursor: "pointer" }}
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
              <div className="flexIconsAndValues">
                {bookmarks?.some(
                  (val: any) => val.postId == props.allTweet?._id
                ) ? (
                  <Tippy content="Remove from bookmark" placement="bottom">
                    <span onClick={removeTweetFromBookmark}>
                      {
                        <RxBookmarkFilled
                          className="likeIcon"
                          style={{
                            cursor: "pointer",
                            color: "#1d9aef",
                          }}
                        />
                      }
                    </span>
                  </Tippy>
                ) : (
                  <Tippy content="Bookmark tweet" placement="bottom">
                    <span onClick={handleBookmark}>
                      {
                        <CiBookmark
                          className="likeIcon"
                          style={{
                            cursor: "pointer",
                            color: "rgb(113,118,123)",
                          }}
                        />
                      }
                    </span>
                  </Tippy>
                )}
              </div>
            </div>
            <Link
              href="/[id]"
              as={`${props.allTweet?._id}`}
              className="showThread"
            >
              Show this thread
            </Link>
          </div>
        </div>
        {/* {props.allTweet?.length == 0 && <h1>This user has no Tweet </h1> } */}
      </div>
    </AllUserTweets>
  );
};

export default Allusertweet;

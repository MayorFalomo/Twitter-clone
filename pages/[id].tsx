/* eslint-disable @next/next/no-img-element */
import Comments from "@/components/comments/Comments";
import Navbar from "@/components/navbar/Navbar";
import Quoted from "@/components/quoted-comment/Quoted-comment";
import Search from "@/components/search/Search";
import Trends from "@/components/trends/Trends";
import TweetOptionsModal from "@/components/tweetOptions/TweetOptionsModal";
import { AppContext } from "@/helpers/Helpers";
import { SingleTweetStyle } from "@/styles/Id.styled";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
// import { useRouter } from 'next/router'
import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiBarChart, BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowLeft, BsFillHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
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

// export const getStaticPaths = async () => {
//   const res = await fetch('https://twitter-clone-server-nu.vercel.app/api/tweets')
//   const data = await res.json()
//   // console.log(data);

//   const paths = data.map((path: any) => {
//     return {
//       params: { id: path?._id }

//     }
//   })
//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = async (context: any) => {
//   const id = context.params?.id;

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/${id}`)
//   const data = await res.json()

//   return {
//     props: {
//       tweetData: data
//     },
//   }
// }

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/${id}`);
  const data = await res.json();

  return {
    props: {
      tweetData: data,
    },
  };
};

const Id = ({ tweetData }: any) => {
  const {
    currentUser,
    tweets,
    suggestedUsers,
    bookmarks,
    setBookmarks,
  } = useContext(AppContext);
  // console.log(tweetData, "tweetData");

  // const router = useRouter()
  // console.log(router);

  // const { id }  = router.query
  // console.log(id, "This is id");

  // const tweetData = tweets.find((post: any) => post?._id === id)

  // console.log(tweetData, "This is post");

  const [tweetProps, setTweetProps] = useState<any>(tweetData);

  // console.log(tweetProps, "This is tweetProps");

  const [postId, setPostId] = useState(tweetData?._id);
  const [likeTweet, SetLikeTweet] = useState<boolean>(false);
  const [likesArray, setLikesArray] = useState<any>(tweetData?.likes);
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(
    likesArray?.length
  );
  const [retweet, setRetweet] = useState<boolean>(false);
  const [retweetArray, setRetweetArray] = useState<any>(tweetProps?.retweet);
  const [noOfRetweetArray, setNoOfRetweetArray] = useState<number>(
    retweetArray?.length
  );
  const [retweetModal, setRetweetModal] = useState<boolean>(false);
  const [urlParams, setUrlParams] = useState<string>(" ");
  const [quotedCommentModal, setQuotedCommentModal] = useState<boolean>(false);
  const [commentModal, setCommentModal] = useState<boolean>(false);
  const [addedToBookmark, setAddedToBookmark] = useState<boolean>(false);
  const [popUpModal, setPopUpModal] = useState<boolean>(false);

  //Function to handle Retweet
  const handleAddRetweet = async () => {
    setRetweetModal(false);
    const retweetData = {
      username: tweetProps?.username,
      currentUserName: currentUser?.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
      id: tweetProps?._id,
    };
    setRetweetArray([...retweetArray, retweetData]);
    setNoOfRetweetArray(retweetArray.length + 1);
    await axios
      .put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tweets/retweet-tweet`,
        retweetData
      )
      .catch((err) => console.log(err));
  };

  //Function to handle remove Retweet
  const removeRetweet = async () => {
    setRetweet(false);
    const retweetData = {
      username: currentUser?.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
      id: tweetData?._id,
    };
    await axios
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/un-retweet`, retweetData)
      .catch((err) => console.log(err));
    let filtered = retweetArray.filter(
      (item: any) => item.currentUserName !== retweetData.username
    );
    setRetweetArray(filtered);
    setNoOfRetweetArray(retweetArray?.length - 1); //filtered is a array with all the items that are not the likeData.username, this is the
  };

  //Function to handle Likes
  const handleLikeEvent = () => {
    if (likesArray.includes(likesArray.username)) {
      console.log("You cannot like this tweet");
    } else {
      // const handleAddLike = async () => {
      const likeData = {
        username: tweetProps?.username,
        profileDp: currentUser?.profilePic,
        usersAt: currentUser?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
        id: tweetData?._id,
        currentUserName: currentUser?.username,
      };
      axios
        .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/liketweet`, likeData)
        .catch((err) => console.log(err));
      setLikesArray([...likesArray, likeData]);
      setNoOfLikesArray(likesArray?.length + 1);
    }
  };

  // console.log(likesArray, "Thank");

  // }
  // const handleAddLike = async () => {
  //   const likeData = {
  //      username: currentUser?.username,
  //     profileDp: currentUser?.profileDp,
  //     usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
  //     postId: props.tweet._id,
  //   }
  //   await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}//tweets/liketweet`, likeData).catch((err) => console.log(err))
  //   setLikesArray([...likesArray, likeData])
  //   setNoOfLikesArray(likesArray.length + 1 );
  // }

  //Function to handle removing like
  const removeLike = async () => {
    SetLikeTweet(false);
    const likeData = {
      username: currentUser?.username,
      id: tweetData?._id,
    };
    await axios
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/unlike-tweet`, likeData)
      .catch((err) => console.log(err));
    let filtered = likesArray.filter(
      (item: any) => item.currentUserName !== likeData.username
    );
    setLikesArray(filtered);
    setNoOfLikesArray(likesArray?.length - 1); //filtered is a array with all the items that are not the likeData.username, this is the
  };

  //Function to handle adding bookmark
  const handleBookmark = async () => {
    const bookmarkData = {
      profileDp: tweetProps?.profileDp,
      username: tweetProps?.username,
      usersAt: tweetProps?.usersAt,
      tweet: tweetProps?.tweet,
      picture: tweetProps?.picture,
      video: tweetProps?._id,
      postId: tweetProps?._id,
      likes: tweetProps?.likes,
      comments: tweetProps?.comments,
      createdAt: Date.now(),
      userDetail: currentUser?._id,
      saved: true,
    };
    console.log(bookmarkData, "bookmarkData");

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
        console.log(res.data);

        setBookmarks([...bookmarks, res.data.bookmarking].reverse());
        toast.success("Tweet has been added to boookmark", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast("Error bookmarking tweet", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      console.log(error, "An error has occurred");
    }
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setUrlParams(tweetProps?._id);
    setQuotedCommentModal(true);
  };

  //Function to handle Quoted and Retweet modal
  const handleOpenAndClose = (e: any) => {
    e.preventDefault();
    setQuotedCommentModal(true);
    setUrlParams(tweetProps?._id);
    setRetweetModal(false);
  };

  const [views, setViews] = useState<number>(0);

  //useEffect to handle number of Views
  useMemo(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);
    setViews(view);
  }, [suggestedUsers?.length]);

  //Remove bookmark
  const removeTweetFromBookmark = async () => {
    try {
      const res = await axios({
        method: "DELETE",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks/delete-bookmark/${tweetProps?._id}`,

        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data) {
        setBookmarks(
          bookmarks.filter(
            (bookmark: IBookmark) => bookmark.postId !== tweetProps?._id
          )
        );
        toast("Tweet removed from bookmark", {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
      toast("Error removing tweet from bookmark", {
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <SingleTweetStyle>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={"singleTweetContainer"}
        >
          <Navbar />
          <div className="centerGridContainer">
            {
              <div className={quotedCommentModal ? "overlay" : "removeOverlay"}>
                {" "}
              </div>
            }
            <div className="centerGridHeader">
              <Link href="/">
                <span>{<BsArrowLeft cursor="pointer" />} </span>
              </Link>
              <h1>Thread </h1>
            </div>
            <div className="userDetailsContainer">
              <div className="subUserDetailsContainer">
                <Link
                  href={"/users/" + tweetProps?.username}
                  style={{ backgroundImage: `url(${tweetProps?.profileDp})` }}
                  className="profilePic"
                ></Link>
                <div className="username">
                  <Link href={"/users/" + tweetProps?.username}>
                    <h1>{tweetProps?.username} </h1>
                  </Link>
                  <p style={{ color: "#575B5F" }}>{tweetProps?.usersAt} </p>
                </div>
              </div>
              <div style={{ position: "relative" }} className="popUp">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setPopUpModal((prev) => !prev)}
                >
                  {<BiDotsHorizontalRounded />}
                </span>
                {popUpModal && (
                  <TweetOptionsModal
                    tweet={tweetProps}
                    setPopUpModal={setPopUpModal}
                  />
                )}
              </div>
            </div>
            <p className="tweetText">
              <ReactLinkify
                componentDecorator={(
                  decoratedHref: string,
                  decoratedText: string,
                  key: number
                ) => (
                  <a
                    href={decoratedHref}
                    style={{ color: "#1d9aef" }}
                    key={key}
                    target="_blank"
                  >
                    {decoratedText}
                  </a>
                )}
              >
                {tweetProps?.tweet}
              </ReactLinkify>
            </p>
            {tweetProps?.picture?.length > 0 ? (
              <img
                src={tweetProps?.picture}
                width={400}
                height={300}
                className="picture"
                alt="img"
              />
            ) : (
              ""
            )}
            {tweetProps?.video?.length > 0 ? (
              <video
                width="100%"
                height="600px"
                src={tweetProps?.video}
                controls
                suppressHydrationWarning
                className="video"
              >
                {" "}
              </video>
            ) : (
              ""
            )}
            <div className="postDetailsContainer">
              <div className="timeAndViews">
                <span
                  style={{ color: "#575B5F", fontWeight: 600 }}
                  suppressHydrationWarning
                >
                  {" "}
                  {moment(tweetProps?.createdAt).format("h:mm a")}{" "}
                </span>
                <span
                  className="listStyle"
                  style={{ color: "#575B5F", fontWeight: 500 }}
                >
                  {moment(tweetProps?.createdAt).format("D MMMM, YYYY")}{" "}
                </span>
                <p
                  className="listStyle"
                  style={{ color: "#575B5F", fontWeight: 500 }}
                >
                  <span className="noOfInteractions">{views} </span>{" "}
                  <span> Views </span>
                </p>
              </div>
              <div className="tweetCount">
                <div className="subTweetCount">
                  <p>
                    <span>{retweetArray?.length} </span> Retweets{" "}
                  </p>
                  <Link href={`/quoted/${tweetProps?._id}`}>
                    <p>
                      <span>{tweetProps?.quoted?.length} </span>
                      <span> Quotes </span>
                    </p>
                  </Link>
                  <p>
                    <span className="noOfInteractions">
                      {likesArray?.length}{" "}
                    </span>
                    <span> Likes</span>
                  </p>
                  <p className="disabled">
                    <span>{0} </span> Bookmarks{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="tweetOptions">
              <div className="flexIconsAndValues">
                <p>
                  {
                    <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer" }}
                    />
                  }
                </p>
                <span className="noOfInteractions">
                  {tweetProps?.comments?.length}{" "}
                </span>
              </div>
              <div className="flexIconsAndValues">
                {retweetArray && (
                  <div className="retweetIcon">
                    {retweetArray.some(
                      (e: any) => e?.currentUserName == currentUser?.username
                    ) ? (
                      <span>
                        <AiOutlineRetweet
                          onClick={removeRetweet}
                          className="likeIcon"
                          style={{
                            color: "#00BA7C",
                            cursor: "pointer",
                          }}
                        />{" "}
                      </span>
                    ) : (
                      <span>
                        <AiOutlineRetweet
                          className="likeIcon"
                          onClick={() => setRetweetModal(true)}
                          style={{ cursor: "pointer" }}
                        />
                      </span>
                    )}
                    {retweetModal ? (
                      <div className="retweetModal">
                        <span onClick={handleOpenAndClose}>Quote Tweet </span>
                        <span onClick={handleAddRetweet}>Retweet </span>
                      </div>
                    ) : (
                      ""
                    )}
                    {quotedCommentModal && (
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="activeModal"
                        >
                          <Quoted
                            urlParams={urlParams}
                            setRetweetModal={setRetweetModal}
                            quotedCommentModal={quotedCommentModal}
                            setQuotedCommentModal={setQuotedCommentModal}
                            setCommentModal={setCommentModal}
                          />{" "}
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                )}

                <span className="noOfInteractions">{noOfRetweetArray} </span>
              </div>
              <div className="flexIconsAndValues">
                {likesArray && (
                  <p>
                    {likesArray.some(
                      (e: any) => e.currentUserName == currentUser?.username
                    ) ? (
                      <span>
                        <BsFillHeartFill
                          onClick={removeLike}
                          className="likeIcon"
                          style={{
                            color: "red",
                            cursor: "pointer",
                          }}
                        />{" "}
                      </span>
                    ) : (
                      <span>
                        <AiOutlineHeart
                          className="likeIcon"
                          onClick={handleLikeEvent}
                          style={{ cursor: "pointer" }}
                        />
                      </span>
                    )}
                  </p>
                )}
                <span className="noOfInteractions">{likesArray?.length} </span>
              </div>
              <div className="flexIconsAndValues">
                <span>
                  {
                    <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer" }}
                    />
                  }
                </span>
                <span>
                  {views.toLocaleString()}
                  {views > 1000 ? "k" : ""}{" "}
                </span>
              </div>
              <div className="flexIconsAndValues">
                {bookmarks?.some(
                  (val: IBookmark) => val.postId == tweetProps?._id
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

                {addedToBookmark ? (
                  <p className="bookmarkAdded">Tweet added to bookmark</p>
                ) : (
                  ""
                )}
              </div>
            </div>

            <Comments tweetProps={tweetProps} setTweetProps={setTweetProps} />
          </div>
          <div className="leftGridSection">
            <Search />
            <Trends />
          </div>
        </motion.div>
      </AnimatePresence>
    </SingleTweetStyle>
  );
};

export default Id;

import React, { useContext, useMemo, useState } from 'react';
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi';
import {
  AiOutlineFrown,
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineUpload,
} from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { Tweetstyled } from './Tweet.styled';
import moment from 'moment';
import Link from 'next/link';
import { BsFillHeartFill } from 'react-icons/bs';
import { AppContext } from '@/helpers/Helpers';
import axios from 'axios';
import CommentModal from '@/components/commentmodal/Commentmodal';
// import { RxHeart } from "react-icons/rx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdClose } from 'react-icons/md';
import TweetOptionsModal from '@/components/tweetOptions/TweetOptionsModal';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { CiBookmark } from 'react-icons/ci';
import { RxBookmarkFilled } from 'react-icons/rx';
import ReactLinkify from 'react-linkify';

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
//parent component is tweets
const Tweet = (props: any) => {
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

  const [postId, setPostId] = useState(props.tweet?._id);
  const [retweet, setRetweet] = useState<boolean>(false);
  const [likeTweet, SetLikeTweet] = useState<boolean>(false);
  const [retweetArray, setRetweetArray] = useState<any>(props.tweet?.retweet);
  const [likesArray, setLikesArray] = useState<any>(props.tweet?.likes);
  const [noOfRetweetArray, setNoOfRetweetArray] = useState<number>(retweetArray?.length);
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length);
  const [urlParams, setUrlParams] = useState<string>(' ');
  const [usernames, setUsernames] = useState<string>(props.suggestedUser?.username);

  const [views, setViews] = useState<number>(0);

  const [commentModal, setCommentModal] = useState<boolean>(false);
  const [openPictureModal, setOpenPictureModal] = useState<boolean>(false);
  const [popUpModal, setPopUpModal] = useState<boolean>(false);
  const [seeMore, setSeeMore] = useState<number>(500);
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
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/retweet-tweet`, retweetData)
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
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/un-retweet`, retweetData)
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
      profileDp: props.tweet?.profilePic,
      usersAt: props.tweet?.usersAt, //usersAt is a list of usernames, so it can be filtered out.
      tweets: props.tweet.tweet,
      id: props.tweet?._id,
      currentUserName: currentUser?.username,
    };
    setLikesArray([...likesArray, likeData]);
    setNoOfLikesArray(likesArray.length + 1);
    await axios
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/liketweet`, likeData)
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
      .put(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets/unlike-tweet`, likeData)
      .catch((err) => console.log(err));
    let filtered = likesArray.filter(
      (item: any) => item.currentUserName !== likeData.username
    );

    setLikesArray(filtered); //filtered is a array with all the items that are not the likeData.username, this is the
    setNoOfLikesArray(likesArray?.length - 1);
  };

  //Add a Bookmark function
  const handleBookmark = async () => {
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
    // console.log(bookmarkData, "bookmarkData");

    if (bookmarkData) {
      try {
        // console.log(bookmarkData);
        setBookmarks([bookmarkData, ...bookmarks]);

        const res = await axios({
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks/addBookmark`,
          data: bookmarkData,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.data) {
          // console.log(res.data, "resData");

          props.setAddedToBookmark(true);
          setTimeout(() => {
            props.setAddedToBookmark(false);
          }, 3000);
          toast('Added to bookmarks', {
            style: {
              background: '#333',
              color: '#fff',
            },
          });
        }
      } catch (error) {
        console.log(error, 'Error bookmarking tweet');
        toast('Error bookmarking tweet', {
          style: {
            background: '#333',
            color: '#fff',
          },
        });
      }
    } else {
      throw new Error('Bookmark not sent');
    }
  };

  //Remove bookmark
  const removeTweetFromBookmark = async () => {
    if (props?.tweet?._id) {
      try {
        setBookmarks(
          bookmarks.filter((bookmark: IBookmark) => bookmark.postId !== props.tweet?._id)
        );
        const res = await axios({
          method: 'DELETE',
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks/delete-bookmark/${props?.tweet?._id}`,

          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.data) {
          toast.success('Tweet has been removed to boookmark', {
            style: {
              background: '#333',
              color: '#fff',
            },
          });
        }
      } catch (error) {
        console.log(error);
        toast('Error removing from bookmarks', {
          style: {
            background: '#333',
            color: '#fff',
          },
        });
      }
    } else {
      throw new Error('Bookmark could not remove');
    }
  };

  //Function to get the id of a tweet so it can be sent as a prop and open a modal
  const handleGetId = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setUrlParams(props.tweet?._id);
    setCommentModal(true);
  };

  useMemo(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);

    setViews(view);
  }, [suggestedUsers?.length]);

  const componentDecorator = (
    decoratedHref: string,
    decoratedText: string,
    key: number
  ) => {
    if (decoratedHref == decoratedText) {
      return (
        <a href={decoratedHref} style={{ color: '#1d9aef' }} target="_blank">
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

  // console.log(bookmarks, "bookmarks");

  return (
    <Tweetstyled>
      <div className="postsContainer">
        {<div className={commentModal ? 'overlay' : 'removeOverlay'}> </div>}
        <Link
          href={'/users/' + props.tweet?.username}
          className="profilePicture"
          style={{ backgroundImage: `url(${props.tweet?.profileDp})` }}
        ></Link>
        <div className="subPostsContainer">
          <div className="flexTweetProfileDetails">
            <div className="tweetProfileDetails">
              <Link href={'/users/' + props.tweet?.username} className="userName">
                {' '}
                {props.tweet?.username.length > 11
                  ? props.tweet?.username.slice(0, 10)
                  : props.tweet?.username}{' '}
                {props.tweet?.username.length > 11 ? '...' : ''}
              </Link>
              <span className="userAt">{props.tweet?.usersAt}</span>
              {props.tweet?.newDates == undefined ? (
                <span className="createdAt">
                  {moment(new Date(props.tweet?.createdAt)).fromNow().length > 11
                    ? moment(new Date(props.tweet?.createdAt)).fromNow().slice(0, 8)
                    : moment(new Date(props.tweet?.createdAt)).fromNow()}
                </span>
              ) : (
                <span className="createdAt">a few seconds ago </span>
              )}
            </div>
            <div className="popUpModal">
              <span onClick={() => setPopUpModal((prev) => !prev)}>
                {<BiDotsHorizontalRounded className="biDots" cursor="pointer" />}{' '}
              </span>

              {popUpModal && (
                <TweetOptionsModal tweet={props.tweet} setPopUpModal={setPopUpModal} />
              )}
            </div>
          </div>
          <p
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
            }}
            className="tweet-caption"
          >
            <ReactLinkify componentDecorator={componentDecorator}>
              {props.tweet?.tweet.length > 400
                ? `${props.tweet?.tweet.slice(0, seeMore)}...`
                : props.tweet?.tweet.split(/(@\w+)/g).map((part, index: number) =>
                    part.startsWith('@') ? (
                      <span
                        style={{
                          color: '#1d9aef',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                        }}
                        key={index}
                      >
                        <Link
                          style={{
                            color: '#1d9aef',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                          }}
                          href={'/users/' + part.slice(1)}
                        >
                          {part}
                        </Link>
                      </span>
                    ) : (
                      <span key={index}>{part}</span>
                    )
                  )}
            </ReactLinkify>
          </p>
          {props.tweet?.tweet.length > 400 && (
            <p>
              {seeMore == 500 ? (
                <span
                  style={{ color: '#1d9aef', cursor: 'pointer' }}
                  onClick={() => setSeeMore(props.tweet?.tweet.length)}
                >
                  Read more{' '}
                </span>
              ) : (
                <span
                  style={{ color: '#1d9aef', cursor: 'pointer' }}
                  onClick={() => setSeeMore(500)}
                >
                  {' '}
                  Read less
                </span>
              )}{' '}
            </p>
          )}
          {props.tweet?.picture ? (
            <div
              onClick={() => setOpenPictureModal(true)}
              style={{ backgroundImage: `url(${props.tweet?.picture})` }}
              className="tweet-image"
            ></div>
          ) : (
            ''
          )}
          {props.tweet?.video ? (
            <video className="tweetVideo" src={`${props.tweet?.video}`} controls></video>
          ) : (
            ''
          )}
          <div className="tweetOptions">
            <div className="flexIconsAndValues">
              <Tippy content="comment" placement="bottom">
                <p onClick={handleGetId}>
                  <FaRegComment
                    className="likeIcon"
                    style={{ cursor: 'pointer', color: 'rgb(113,118,123)' }}
                  />
                </p>
              </Tippy>
              <span>{props.tweet.comments?.length} </span>
              {commentModal ? (
                <AnimatePresence>
                  <motion.div className="activeModal">
                    <CommentModal
                      urlParams={urlParams}
                      setCommentModal={setCommentModal}
                    />{' '}
                  </motion.div>
                </AnimatePresence>
              ) : (
                ''
              )}
            </div>
            <div className="flexIconsAndValues">
              {retweetArray && (
                <Tippy content="retweet" placement="bottom">
                  <p>
                    {retweetArray.some(
                      (e: any) => e.currentUserName == currentUser?.username
                    ) ? (
                      <AiOutlineRetweet
                        onClick={removeRetweet}
                        className="likeIcon"
                        style={{
                          color: '#00BA7C',
                          cursor: 'pointer',
                        }}
                      />
                    ) : (
                      <AiOutlineRetweet
                        className="likeIcon"
                        onClick={handleAddRetweet}
                        style={{ cursor: 'pointer', color: 'rgb(113,118,123)' }}
                      />
                    )}
                  </p>
                </Tippy>
              )}
              <span>{noOfRetweetArray} </span>
            </div>
            <div className="flexIconsAndValues">
              {likesArray && (
                <Tippy content="like" placement="bottom">
                  {/* <p> */}
                  {likesArray.some(
                    (e: any) => e.currentUserName == currentUser?.username
                  ) ? (
                    <span>
                      <BsFillHeartFill
                        onClick={removeLike}
                        onTouchStart={removeLike}
                        className="likeIcon"
                        style={{
                          color: 'red',
                          cursor: 'pointer',
                        }}
                      />
                    </span>
                  ) : (
                    <span>
                      <AiOutlineHeart
                        className="likeIcon"
                        onClick={handleAddLike}
                        onTouchStart={handleAddLike}
                        style={{ cursor: 'pointer', color: 'rgb(113,118,123)' }}
                      />
                    </span>
                  )}
                  {/* </p> */}
                </Tippy>
              )}
              <span>{noOfLikesArray} </span>
            </div>
            <div className="flexIconsAndValues">
              <Tippy content="view" placement="bottom">
                <p>
                  {
                    <BiBarChart
                      className="likeIcon"
                      style={{ cursor: 'pointer', color: 'rgb(113,118,123)' }}
                    />
                  }
                </p>
              </Tippy>
              <span>
                {views.toLocaleString()}
                {views > 1000 ? 'k' : ''}{' '}
              </span>
            </div>
            <div className="flexIconsAndValues">
              {bookmarks?.some((val: any) => val?.postId == props.tweet?._id) ? (
                <Tippy content="Remove from bookmark" placement="bottom">
                  <span
                    onClick={removeTweetFromBookmark}
                    onTouchStart={removeTweetFromBookmark}
                  >
                    {
                      <RxBookmarkFilled
                        className="likeIcon"
                        style={{
                          cursor: 'pointer',
                          color: '#1d9aef',
                        }}
                      />
                    }
                  </span>
                </Tippy>
              ) : (
                <Tippy content="Bookmark tweet" placement="bottom">
                  <span onTouchStart={handleBookmark} onClick={handleBookmark}>
                    {
                      <CiBookmark
                        className="likeIcon"
                        style={{ cursor: 'pointer', color: 'rgb(113,118,123)' }}
                      />
                    }
                  </span>
                </Tippy>
              )}
            </div>
          </div>
          <div className="showThread">
            <Link
              href={'/users/' + props.tweet?.username}
              style={{
                cursor: 'pointer',
                backgroundImage: `url(${props.tweet?.profileDp})`,
              }}
              className="subUserPhoto"
            >
              {' '}
            </Link>
            <Link href="/[id]" as={`${props.tweet?._id}`}>
              <p>Show this thread </p>
            </Link>
          </div>
        </div>
        {openPictureModal ? (
          <div
            style={{
              backgroundImage: `url(${props?.tweet?.picture})`,
            }}
            className="pictureModal"
          >
            <span className="closeModalBtn" onClick={() => setOpenPictureModal(false)}>
              <MdClose fontSize={25} cursor="pointer" />
            </span>
          </div>
        ) : (
          ''
        )}
        {openPictureModal ? <div className="bgFilter"> </div> : ''}
      </div>
    </Tweetstyled>
  );
};

export default React.memo(Tweet);

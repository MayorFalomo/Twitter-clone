import React, { useContext, useState,} from 'react'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Tweetstyled } from './Tweet.styled'
import moment from 'moment';
import Link from 'next/link';
import { BsFillHeartFill } from 'react-icons/bs';
import { AppContext } from '@/helpers/Helpers';
import axios from 'axios';
import CommentModal from '@/components/commentmodal/Commentmodal';
import { RxHeart } from 'react-icons/rx';
type Props = {}

//parent component is tweets
const Tweet = (props: any) => {

  const { currentUser, suggestedUsers, bookmarks, setBookmarks } = useContext(AppContext)

  const [postId, setPostId] = useState(props.tweet?._id)
  const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, SetLikeTweet] = useState<boolean>(false)
  const [retweetArray, setRetweetArray] = useState<any>(props.tweet?.retweet)
  const [likesArray, setLikesArray] = useState<any>(props.tweet?.likes)
  const [noOfRetweetArray, setNoOfRetweetArray] = useState<number>(retweetArray?.length)
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  const [commentModal, setCommentModal] = useState<boolean>(false)
  const [modalLink, setModalLink] = useState<string>("")
  const [urlParams, setUrlParams] = useState<string>(" ")
  const [getUsername, setGetUsername] = useState<string>("")

  // console.log(likesArray && props.tweet.comments.length, "likes array");

  //Retweet Function
  const handleAddRetweet = async () => {
    const retweetData = {
       username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.tweet._id,
    }
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/retweet-tweet`, retweetData).catch((err) => console.log(err))
    setRetweetArray([...retweetArray, retweetData])    
    setNoOfRetweetArray(retweetArray.length + 1 );
  }

  //Remove Retweet
   const removeRetweet = async () => {
    setRetweet(false)
    const retweetData = {
      username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    }
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/unlike-tweet`, retweetData).catch((err) => console.log(err))
    let filtered = retweetArray.filter((item: any) => item.username !== retweetData.username)
    setRetweetArray(filtered)
    setNoOfRetweetArray(retweetArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  }
  
  //Add like function
  const handleAddLike = async () => {
    const likeData = {
       username: currentUser.username,
      profileDp: currentUser?.profileDp,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.tweet._id,
    }
    setLikesArray([...likesArray, likeData])    
    setNoOfLikesArray(likesArray.length + 1 );
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
  }

  //Handle Remove Like 
  const removeLike = async () => {
    SetLikeTweet(false)
    const likeData = {
      username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    }
    let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
    setLikesArray(filtered)   	//filtered is a array with all the items that are not the likeData.username, this is the
    setNoOfLikesArray(likesArray?.length - 1)
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
  }

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
    }
      setBookmarks([...bookmarks, bookmarkData])    
    axios.post(`https://twitter-clone-server-nu.vercel.app/api/bookmarks/addBookmark`, bookmarkData).catch((err) => console.log(err)
    )
    props.setAddedToBookmark(true)
    setTimeout(() => {
      props.setAddedToBookmark(false)
    }, 3000)
  }

  //Function to get the id of a tweet so it can be sent as a prop and open a modal 
  const handleClick = (e: any) => {
     e.preventDefault()
     setUrlParams(props.tweet?._id)
     setCommentModal(true)
  };

  const handleLink = (e: any) => {
    e.preventDefault()
    setGetUsername(props.tweet?.username)
  };
  
  const views = Math.floor(Math.random() * suggestedUsers?.length)
  
// console.log(props.tweet);

  return (
      <Tweetstyled>
      <div className='postsContainer' >
            {<div className={commentModal ? 'overlay' : "removeOverlay"} > </div>}
            <Link href={'/users/' + props.tweet?.username} className="profilePicture" style={{ backgroundImage: `url(${props.tweet?.profileDp})` }} ></Link>
                 <div className='subPostsContainer' >
              <div className='flexTweetProfileDetails' >
                 <div className='tweetProfileDetails' >
              <Link href={'/users/' + props.tweet?.username} className='userName' > {props.tweet?.username}  </Link>
              <span className='userAt'>{props.tweet?.usersAt}</span>
              {props.tweet?.newDates == undefined ? <span className='createdAt' >{moment(new Date(props.tweet?.createdAt)).fromNow()}</span> : <span className='createdAt' >a few seconds ago </span> }
            </div>
                  <div>{<BiDotsHorizontalRounded className='biDots' cursor='pointer' />} </div>
          </div>
          <p className='tweet-caption' >{props.tweet?.tweet} </p>
          {props.tweet?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.tweet?.picture})` }} className='tweet-image' ></div> : ""}
          {props.tweet?.video?.length > 1 ? <video className='tweetVideo' controls src={`${props.tweet?.video}`} ></video>  : "" }
          <div className='tweetOptions'>
            <div className='flexIconsAndValues'>
              <p onClick={handleClick}>
                        <FaRegComment
                      className="likeIcon"
                  style={{cursor: "pointer"}} />
            </p>
              <span>{props.tweet.comments?.length} </span>
              {commentModal ?  <div className="activeModal" ><CommentModal urlParams={urlParams} setCommentModal={setCommentModal} /> </div> : ""}
            </div>
            <div className='flexIconsAndValues'>
              {retweetArray && (
                  <p>
                    {retweetArray.some(
                      (e: any) => e.username == currentUser?.username
                    ) ? (
                      <AiOutlineRetweet
                        onClick={removeRetweet}
                        className='likeIcon'
                        style={{
                          color: "#00BA7C",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <AiOutlineRetweet
                        className='likeIcon'
                        onClick={handleAddRetweet}
                        style={{ cursor: "pointer",   }}
                      />
                    )}
                  </p>
                )}
              <span>{noOfRetweetArray} </span>
            </div>
            <div  className='flexIconsAndValues'>
              {likesArray && (
                  <p>
                    {likesArray.some(
                      (e: any) => e.username == currentUser?.username
                    ) ? (
                      <BsFillHeartFill
                        onClick={removeLike}
                        className='likeIcon'
                        style={{
                          color: "red",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <RxHeart
                        className='likeIcon'
                        onClick={handleAddLike}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </p>
                )}
              <span>{noOfLikesArray} </span>
            </div>
            <div className='flexIconsAndValues'>
              <p>
                  {
                        <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer" }}
                      />
                }</p>
              <span>{views.toLocaleString()}{views > 1000 ? "k" : ""} </span>
            </div>
            <div className='flexIconsAndValues' >
              <p onClick={handleBookmark} >
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer" }}
                      />
                }</p>
            </div>
          </div>
            <div className='showThread' >
          <div style={{ cursor: "pointer", backgroundImage: `url(${props.tweet?.profileDp})` }} className='subUserPhoto' > </div>
              <Link href={'/posts/' + props.tweet?._id} >
                <p>Show this thread </p>
              </Link>
            </div>
        </div>
            </div>
    </Tweetstyled>
  )
}



export default Tweet
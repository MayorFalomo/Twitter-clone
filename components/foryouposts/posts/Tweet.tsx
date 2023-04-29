import React, { useContext, useState,} from 'react'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";
import { IoHeartSharp } from "react-icons/io5";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Tweetstyled } from './Tweet.styled'
import moment from 'moment';
import Link from 'next/link';
import { green } from 'colors';
import { BsFillHeartFill } from 'react-icons/bs';
import { AppContext } from '@/helpers/Helpers';
import Id from '@/pages/posts/[id]';
import { useRouter } from 'next/router';
import axios from 'axios';
import Commentmodal from '@/components/commentmodal/Commentmodal';
import Slug from '@/components/commentmodal/Commentmodal';
type Props = {}

//parent component is tweets
const Tweet = (props: any) => {

  const { currentUser, suggestedUsers, bookmarks, setBookmarks } = useContext(AppContext)

  const [postId, setPostId] = useState(props.tweet?._id)
  const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, SetLikeTweet] = useState<boolean>(false)
  const [likesArray, setLikesArray] = useState<any>(props.tweet.likes)
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  const [commentModal, setCommentModal] = useState<boolean>(false)
  const [modalLink, setModalLink] = useState<string>("")
  const [urlParams, setUrlParams] = useState<string>(" ")
  const [getUsername, setGetUsername] = useState<string>("")

  // console.log(likesArray && props.tweet.comments.length, "likes array");

  const handleLikeEvent = () => {

    if (likesArray.includes(likesArray.username)) {
      console.log("You cannot like this tweet");
    }
    else {
      // const handleAddLike = async () => {
        const likeData = {
          username: currentUser.username,
          profileDp: currentUser?.profilePic,
          usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
          postId: props.tweet._id,
        }
        axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
        setLikesArray([...likesArray, likeData])
        setNoOfLikesArray(likesArray?.length + 1);
      }
  }
  
  // console.log(props.thank, "Thank");
  
  // }
  // const handleAddLike = async () => {
  //   const likeData = {
  //      username: currentUser.username,
  //     profileDp: currentUser?.profileDp,
  //     usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
  //     postId: props.tweet._id,
  //   }
  //   await axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
  //   setLikesArray([...likesArray, likeData])    
  //   setNoOfLikesArray(likesArray.length + 1 );
  // }

  const removeLike = async () => {
    SetLikeTweet(false)
    const likeData = {
      username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    }
    await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
    let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
    setLikesArray(filtered)
    setNoOfLikesArray(likesArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  }

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
      saved: true,
    }
    axios.post(`http://localhost:7000/api/bookmarks/addBookmark`, bookmarkData).catch((err) => console.log(err)
    )
    setBookmarks([...bookmarks, bookmarkData ])
  }

  const handleRemoveBookmark = async () => {
    axios.delete(`http://localhost:7000/api/bookmark/bookmarks/delete-bookmark/${props.tweet?._id}`).catch((err) => console.log(err))
    let filtered = bookmarks.filter((bookmark: any) => bookmark.id !== bookmark)
    setBookmarks(filtered)
  }
  
  const views = Math.floor(Math.random() * suggestedUsers?.length)
  

  const handleClick = (e: any) => {
     e.preventDefault()
     setUrlParams(props.tweet?._id)
     setCommentModal(true)
  };

  const handleLink = (e: any) => {
    e.preventDefault()
    setGetUsername(props.tweet?.username)
    //  setCommentModal(true)
  };
  // console.log(props.tweet?.newDates, "new Dates");
  
  

  return (
      <Tweetstyled>
           <div className='postsContainer' >
            <Link href={'/users/' + props.tweet?.username} className="profilePicture" style={{ backgroundImage: `url(${props.tweet?.profileDp})` }} ></Link>
                 <div className='subPostsContainer' >
              <div className='flexTweetProfileDetails' >
                 <div className='tweetProfileDetails' >
              <Link href={'/users/' + props.tweet?.username} className='userName' > {props.tweet?.username} </Link>
              <span className='userAt'>{props.tweet?.usersAt}</span>
              {props.tweet?.newDates == undefined ? <span className='createdAt' >{moment(new Date(props.tweet?.createdAt)).fromNow()}</span> : <span className='createdAt' >a few seconds ago </span> }
            </div>
                  <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
          </div>
          <p className='tweet-caption' >{props.tweet?.tweet} </p>
          {props.tweet?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.tweet?.picture})` }} className='tweet-image' ></div> : ""}
          <div className='tweetOptions'>
            <div className='flexIconsAndValues'>
              <p onClick={handleClick}>
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
            </p>
              <span>{props.tweet.comments?.length} </span>
              {commentModal ?  <div className="activeModal" ><Slug urlParams={urlParams} setCommentModal={setCommentModal} /> </div> : ""}
            </div>
            <div  className='flexIconsAndValues'>
              {retweet ? <p>
                {
                  <AiOutlineRetweet
                    onClick={() => setRetweet(false)}
                    className="likeIcon"
                    style={{ cursor: "pointer", fontSize: 35, color: "#00BA7C" }}
                  />
                }</p> :
              <p>
                {
                    <AiOutlineRetweet
                    onClick={() => setRetweet(true)}
                    className="likeIcon"
                    style={{ cursor: "pointer", fontSize: 35 }}
                  />
                }</p>}
              <span>{0} </span>
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
                          fontSize: 35,
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FaRegHeart
                        className='likeIcon'
                        onClick={handleLikeEvent}
                        style={{ fontSize: 35, cursor: "pointer" }}
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
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>{views.toLocaleString()}{views > 1000 ? "k" : ""} </span>
            </div>
            <div>
              <p onClick={handleBookmark} >
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
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
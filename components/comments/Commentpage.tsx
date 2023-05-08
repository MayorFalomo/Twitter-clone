import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import React, {useContext, useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { CommentPageStyle } from './Commentpage.styled'

type Props = {}

const Commentpage = (props: any) => {

    const { suggestedUsers, currentUser } = useContext(AppContext)
    
  const views = Math.floor(Math.random() * suggestedUsers.length)
  
      const commentId = Date.now()

  const [postId, setPostId] = useState(props.comment?._id)
  const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, setLikeTweet] = useState<boolean>(false)
  const [retweetArray, setRetweetArray] = useState<any>(props.comment?.retweet)
  const [likesArray, setLikesArray] = useState<any>(props.comment?.like)
  const [noOfRetweetArray, setNoOfRetweetArray] = useState<number>(retweetArray?.length)
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  const [commentModal, setCommentModal] = useState<boolean>(false)
  const [modalLink, setModalLink] = useState<string>("");
  const [urlParams, setUrlParams] = useState<string>(" ");
  const [getUsername, setGetUsername] = useState<string>("");
  const [comments, setComments] = useState<string>("") //comment box for user to enter comment and post it. 	   
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<number>(commentId)
  const [reply, setReply] = useState<any>([])
  const [like, setLike] = useState<any>([])
  const [retweetReply, setRetweetReply] = useState<any>([])

  // const [postId, setPostId] = useState<number>(props.tweetProps?._id)


  // console.log(props.comment.likes, "likes array");

  function dec2hex (dec:any) {
  return dec.toString(16).padStart(2, "0")
  }
  
  // generateId :: Integer -> String
function generateId (len:any) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
  }
  

   //Retweet Function
  const handleAddRetweet = async () => {
    const retweetData = {
       username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.tweet._id,
    }
    await axios.put(`http://localhost:7000/api/tweets/retweet-tweet`, retweetData).catch((err) => console.log(err))
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
      newId: generateId(24),
    }
    await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, retweetData).catch((err) => console.log(err))
    let filtered = retweetArray.filter((item: any) => item.username !== retweetData.username)
    setRetweetArray(filtered)
    setNoOfRetweetArray(retweetArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  }

  // console.log(generateId(24));
  
  
   //Add like function
  const handleAddLike = async () => {
    const likeData = {
      username: currentUser.username,
      profileDp: currentUser?.profileDp,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.comment._id,
      createdAt,
      likeId: generateId(24)
    }
    await axios.put(`http://localhost:7000/api/tweets/comment-liketweet`, likeData).catch((err) => console.log("Cannot like "))
    // setLikesArray([...likesArray, likeData])
    // setNoOfLikesArray(likesArray.length + 1 );
    // console.log("successfully liked this comment");
    
  }

  //Handle Remove Like 
  const removeLike = async () => {
    setLikeTweet(false)
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

   const handleComment = async (e: any) => {
    e.preventDefault()
      const commentData = {
        username: currentUser?.username,
        usersAt: currentUser?.usersAt,
        profileDp: currentUser?.profilePic,
        comments,
        picture,
        video,
        postId,
        createdAt,
        newId: generateId(24),
        reply,
        like,
        retweet
    }
      await axios.put(`http://localhost:7000/api/tweets/replies-comments`, commentData).catch((err) => console.log(err))
    setComments(" ")
    setPicture("")
    setVideo("")
      props.setTweetProps({
        ...props.tweetProps, comments: [
          ...props.tweetProps.comments, commentData,
        ]
      })
    }
  
   const handleClick = (e: any) => {
     e.preventDefault()
     setUrlParams(props.tweet?._id)
     setCommentModal(true)
  };

  console.log(props.comment.like, "props likes array");
  console.log(likesArray, "likes array");
  
  likesArray?.some((e: any) => console.log(e.username == currentUser.username))
  

    return (
      <CommentPageStyle>
      <div className='commentPageContainer' >
            <div className="profilePicture" style={{ backgroundImage: `url(${props.tweet?.profileDp})` }} ></div>
                 <div className='subPostsContainer' >
              <Link href={'/posts/' + props.comment?.postId} ><div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
              <span className='userName' > {props.comment?.username}</span>
              <span className='userAt'>{props.comment?.usersAt}</span>
              <span className='createdAt' >{moment(new Date(props.comment?.createdAt)).fromNow()}</span>
            </div>
                  <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
          </div>
            </Link>
                    <p className='tweet-caption' style={{fontSize: 28, fontWeight: 400}} >{props.comment?.comments} </p>
            {/* {props.tweet?.picture.length > 1 ? <div style={{ backgroundImage: `url(${props.tweet?.picture})` }} className='tweet-image'> </div> : ""} */}
          {props.comment?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.comment?.picture})` }} className='tweet-image' ></div> : ""}
          <div className='tweetOptions' >
            <div className='flexIconsAndValues' >
              <p>
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>{0} </span>
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
                        onClick={handleAddLike}
                        style={{ fontSize: 35, cursor: "pointer" }}
                      />
                    )}
                  </p>
                )}
              <span>{props.comment?.like?.length} </span>
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
              <p>
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
            </div>
              </div>
          </div>
            </div>
            </CommentPageStyle>
  )
}

export default Commentpage
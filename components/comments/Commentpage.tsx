import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import React, {useContext, useEffect, useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { CommentPageStyle } from './Commentpage.styled'
import Showreplies from './Showreplies'
import Reply from './Replymodal';


type Props = {}

//Parent component is comments
const Commentpage = (props: any) => {

    const { suggestedUsers, currentUser } = useContext(AppContext)
  const [views, setViews] = useState<number>(0)
  
      useEffect(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);
    setViews(view)
  }, [])
  
  const commentId = new Date()
  
  // console.log(props.comment.likes, "this is");
  

  const [postId, setPostId] = useState(props.comment?._id)
  const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, setLikeTweet] = useState<boolean>(false)
  const [retweetArray, setRetweetArray] = useState<any>(props.comment?.retweet)
  const [likesArray, setLikesArray] = useState<any>(props.comment?.likes)
  const [noOfRetweetArray, setNoOfRetweetArray] = useState<number>(retweetArray?.length)
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  const [commentModal, setCommentModal] = useState<boolean>(false)
  const [modalLink, setModalLink] = useState<string>("");
  const [urlParams, setUrlParams] = useState<string>(" ");
  const [getCommentId, setGetCommentId] = useState<string>("");
  const [comments, setComments] = useState<string>("") //comment box for user to enter comment and post it. 	   
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [newId, setNewId] = useState<string>(props.comment?.newId);
  const [createdAt, setCreatedAt] = useState<any>(commentId);
  const [replyId, setReplyId] = useState<any>("");
  const [like, setLike] = useState<any>([]);
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
  const [emoji, setEmoji] = useState<boolean>(false);
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const [replies, setReplies] = useState<any>(props.comment.comment)

  //generateId
  function dec2hex (dec:any) {
  return dec.toString(16).padStart(2, "0")
  }
  
  // generateId :: Integer -> String
function generateId (len:any) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
  }
  
  //upload image function
 const uploadImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setPicture(res.data.url))
      .catch((err) => console.log(err));
      setSuccessfulUpload(true)
  };
  
    //function to upload video
  const uploadVideo = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/video/upload", formData)
      .then((res) => setVideo(res.data.url))
      .catch((err) => console.log(err));
      setSuccessfulUpload(true)
  };
  
   //Retweet Function
  const handleAddRetweet = async () => {
    const retweetData = {
       username: currentUser?.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
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
      username: currentUser?.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
      retweetId: generateId(24),
    }
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/unlike-tweet`, retweetData).catch((err) => console.log(err))
    let filtered = retweetArray.filter((item: any) => item.username !== retweetData.username)
    setRetweetArray(filtered)
    setNoOfRetweetArray(retweetArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  }

  // console.log(generateId(24));
  
  
   //Add like function
  const handleCommentAddLike = async () => {
    const likeData = {
      username: currentUser?.username,
      profileDp: currentUser?.profileDp,
      usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.comment._id,
      createdAt,
      likeId: generateId(24)
    }
       
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/${props.comment?.postId}/${props.comment?.newId}/like-comment`, likeData).catch((err) => console.log("Cannot like "))
     setLikesArray([...likesArray, likeData])
    setNoOfLikesArray(likesArray.length + 1 );
    // setLikesArray([...likesArray, likeData])
    // console.log("successfully liked this comment");
    
  }

  //Handle Remove Like 
  const removeLike = async () => {
    setLikeTweet(false)
    const unLikeData = {
       username: currentUser?.username,
      profileDp: currentUser?.profileDp,
      usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.comment._id,
      createdAt,
    }
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/${props.comment?.postId}/${props.comment?.newId}/unlike-comment`, unLikeData).catch((err) => console.log(err))
        let filtered = likesArray.filter((item: any) => item.username !== unLikeData.username)
    setLikesArray(filtered)
        setNoOfLikesArray(likesArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the

  }

   const handleCommentReply = async (e: any) => {
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
        replyId: generateId(24),
        like,
        retweet
     }
      await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/replies-comments`, commentData).catch((err) => console.log(err))
    setComments(" ")
    setPicture("")
    setVideo("")
      // props.setTweetProps({
      //   ...props.tweetProps, comments: [
      //     ...props.tweetProps.comments, commentData,
      //   ]
      // })
      props.setTweetProps({
      ...props.tweetProps, comments: {
        ...props.tweetProps.comments, comment: [
          ...props.tweetProps.comments.comment, commentData
        ]
      }
    })
  }
  // console.log(props.comment);
  
  
  //Function for getting the id of the post you want to comment on and sending it to the replymodal.tsx component
   const handleClick = (e: any) => {
     e.preventDefault()
     setUrlParams(props.comment?.newId)
     setGetCommentId(props.comment?._id || props.comment?.id || props.comment?.postId)
     console.log(getCommentId, "commentId");
     
     setCommentModal(true)
  };

  //Function to handle showing replies of comments
  const handleShowReplies = () => {
    setUrlParams(props.comment?.newId)
    setGetCommentId(props.comment?.postId)
    setShowReplies(true)
  }

  
    return (
      <CommentPageStyle>
        <div className='commentPageContainer' >
                    {<div className={commentModal ? 'overlay' : "removeOverlay"} > </div>}
          <div className='subPostsContainer' >
            <Link href={'/users/' + props.comment?.username } className="profilePicture" style={{ backgroundImage: `url(${props.comment?.profileDp})` }} ></Link>
            <div className='tweetDetailsCon' >
              <div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
              <Link href={'/users/' + props.comment?.username } className='userName'  > {props.comment?.username}</Link>
              <span className='userAt'>{props.comment?.usersAt}</span>
              <span className='createdAt' >{ moment(new Date(props.comment.createdAt)).fromNow() }</span>
            </div>
                  <div className='dottedIcon' >{<BiDotsHorizontalRounded cursor='pointer' />} </div>
          </div>
                  <p className='tweet-caption' style={{fontWeight: 400}} >{props.comment?.comments} </p>
          {props.comment?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.comment?.picture})` }} className='tweet-image' ></div> : ""}
          {props.comment?.video?.length > 1 ? <video src={props.comment?.video} controls className='tweet-video' ></video> : ""}
          <div className='tweetOption' >
            <div className='flexIconsAndValues' >
              <p onClick={handleClick} >
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", }}
                      />
                  }</p>
                  {commentModal ? <div className='replyModal' >
                    <Reply currentUser={currentUser} setCommentModal={setCommentModal} getCommentId={getCommentId} urlParams={urlParams} newId={newId} /></div>
                    :
                    ""
                  }
                      <span>{props.comment?.comment?.length} </span>
                  </div>
            <div  className='flexIconsAndValues'>
              {retweet ? <p>
                {
                  <AiOutlineRetweet
                    onClick={() => setRetweet(false)}
                    className="likeIcon"
                    style={{ cursor: "pointer", color: "#00BA7C" }}
                  />
                }</p> :
              <p>
                {
                    <AiOutlineRetweet
                    onClick={() => setRetweet(true)}
                    className="likeIcon"
                    style={{ cursor: "pointer" }}
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
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FaRegHeart
                        className='likeIcon'
                        onClick={handleCommentAddLike}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </p>
                )}
              {/* <span>{props.comment?.likes?.length} </span> */}
              <span>{noOfLikesArray} </span>
            </div>
            <div className='flexIconsAndValues'>
              <p>
                  {
                        <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer",}}
                      />
                }</p>
              <span>{views.toLocaleString()}{views > 1000 ? "k" : ""} </span>
            </div>
            <div className='flexIconsAndValues' >
              <p>
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer"}}
                      />
                }</p>
              </div>
            </div>
           
            {props.comment.comment?.length > 0 && !showReplies ? <p onClick={handleShowReplies} className='showReplies' >Show Replies </p> : ""}
            { showReplies ? <p onClick={() => setShowReplies(false) } className='showReplies' >Hide Replies </p> : "" }
          </div>
          </div>
           {showReplies ? <div className="repliesComponent" ><Showreplies replies={replies} suggestedUsers={suggestedUsers} /> </div>
              : ""}
            </div>
            </CommentPageStyle>
  )
}

export default Commentpage
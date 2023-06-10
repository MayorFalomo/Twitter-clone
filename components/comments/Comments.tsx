import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import moment from 'moment'
import EmojiPicker from 'emoji-picker-react';
import Link from 'next/link'
import React, {useState, useContext, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import { AiOutlineFileGif,} from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown, } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import Commentpage from './Commentpage'
import { CommentStyled } from './Comments.styled'

type Props = {}

//Parent comment is [id].tsx
const Comments = (props: any) => {
    
    const { currentUser} = useContext(AppContext)
    
    const commentId = new Date()    
    const [emoji, setEmoji] = useState<boolean>(false);
    const [everyOne, setEveryOne] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [likes, setLikes] = useState<any>([]);
  const [reply, setReply] = useState<any>([]);
  const [retweet, setRetweet] = useState<any>([]);
    const [createdAt, setCreatedAt] = useState<any>(moment(new Date(commentId)).fromNow())
    const [postId, setPostId] = useState<number>(props.tweetProps?._id)
    const [comment, setComment] =  useState<any>([])
    const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
  const [comments, setComments] = useState<string>("") //comment box for user to enter comment and post it. 	   
  const [noCommentText, setNoCommentText] = useState<boolean>(false)

  //function to generate id
  function dec2hex (dec:any) {
  return dec.toString(16).padStart(2, "0")
  }
  
  // generateId :: Integer -> String
function generateId (len:any) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
  }
   
  //Function to upload image
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

  //Function to upload video
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
    
  //Function to handle commenting on a tweet
  const handleComment = async (e: any) => {
    e.preventDefault()
    const commentData = {
      username: currentUser?.username,
      currentUsername:  props.tweetProps?.username ,
      usersAt: currentUser?.usersAt,
      profileDp: currentUser?.profilePic,
      comments,
      picture,
      video,
      id: postId,
      createdAt,
      comment,
       likes,
      retweet,
      newId: generateId(24),
    }    
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/comments`, commentData).catch((err) => console.log(err))
    setComments(" ")
    setPicture("")
    setVideo("")
    props.setTweetProps({
      ...props.tweetProps, comments: [
        ...props.tweetProps.comments, commentData,
      ].reverse()
    })
  }

   //Add like function
  const handleAddLike = async () => {
    const likeData = {
      username: currentUser?.username,
      profileDp: currentUser?.profileDp,
      usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.comment._id,
      createdAt,
      likeId: generateId(24)
    }
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/`, likeData).catch((err) => console.log("Cannot like "))
    // setLikesArray([...likesArray, likeData])
    // setNoOfLikesArray(likesArray.length + 1 );
    // console.log("successfully liked this comment");
    
  }
    
    return (
      <CommentStyled>
      <div className='postsContainer' >
           <form onSubmit={handleComment} >
            <div style={{ backgroundImage: `url(${currentUser?.profilePic})`}} className="userProfileDp" > </div>
            <div className="textAreaContainer">
               {everyOne ? (
              <p>
                Replying to <span>{props.tweetProps?.usersAt} </span>
              </p>
            ) : (
              ""
            )}
              <textarea className="textArea"
                onFocus={() => setEveryOne(!false)}
              typeof="text"
              onChange={(e: any) => setComments(e.target.value)}
                value={comments}
                placeholder="Tweet your reply"
              />
           
            <div className="flexIcons">
              <div className="tweetIcons">
                <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                  {<BsCardImage />}
                </label>
                <input type="file" onChange={(e) => uploadImage(e.target.files) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif />}
                </label>
                <input type="file" onChange={(e) => uploadVideo(e.target.files)} id="fileInputGif" style={{ display: "none" }} />
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmileUpsideDown cursor="pointer" />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile cursor="pointer" />}
                  </span>
                )}
                {emoji ? (
                    <div className="pickerEmoji" >
                        <EmojiPicker onEmojiClick={(e) => setComments(comments + e.emoji) } />
                    </div>
                ) : (
                  ""
                )}
                
                <span className="locationIcon">
                  {<IoLocationOutline />}{" "}
                </span>
              </div>
              {everyOne ? <div className="tweetButton">
                  {successfulUpload || comments.length > 0 ? <button type={successfulUpload || comments.length > 0 ? 'submit' : 'button'}>Tweet</button>
                    : <button className="btn-primary" disabled={comments.length == 0}>
                  Tweet
                </button>}
              </div> : <div className="tweetButton"><button className="btn-primary" disabled>Tweet </button></div>
              }
            </div>
          </div>
                </form>
                <div className='seeCommentMap' >
                    {props.tweetProps?.comments?.map((comment: any, index:any) => (
                        <div key={index} className='mappedContainer' >
                            <Commentpage comment={comment} />  
                    </div>   
                    ))}
                </div>
            </div>
            </CommentStyled>
  )
}

export default Comments
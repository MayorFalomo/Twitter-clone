import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import React, {useState, useContext, useEffect} from 'react'
import { useCookies } from 'react-cookie'
import { AiOutlineFileGif, AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsCardImage, BsEmojiSmile, BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import Commentpage from './Commentpage'
import { CommentStyled } from './Comments.styled'

type Props = {}

const Comments = (props: any) => {
    
    const { currentUser } = useContext(AppContext)
    
    const timeAgo = new Date().toISOString()
    const commentId = Date.now()
    // console.log(timeAgo);
    
    const [emoji, setEmoji] = useState<boolean>(false);
    const [everyOne, setEveryOne] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [usersAt, setUsersAt] = useState<string>("");
    const [profileDp, setProfileDp] = useState<string>("");
    const [picture, setPicture] = useState<string>("");
    const [video, setVideo] = useState<string>("");
    const [createdAt, setCreatedAt] = useState<string>(timeAgo)
    const [postId, setPostId] = useState<number>(commentId)
    const [gif, setGif] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [cookies, setCookie] = useCookies(["user"])
    const [tweeterUser, setTweeterUser] = useState<any>([])
    const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
    const [comments, setComments] = useState<any>(props.tweetProps?.comments) //comment box for user to enter comment and post it. 	   const [
    const { suggestedUsers } = useContext(AppContext)

    
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
    
    // useEffect(() => {
    //     axios.get(`http:localhost7000/api/users/${cookies.user}`).then((res) => console.log(res)
    //     ).catch((err) => console.log(err));
    // })
  
    
     const handleComment = async () => {
         const commentData = {
             username: currentUser?.username,
             usersAt: currentUser?.usersAt,
             profileDp: currentUser?.profileDp,
             comments,
             picture,
             video,
             postId,
             createdAt,
         }
         await axios.put(`http://localhost:7000/api/tweets/comments`, commentData).catch((err) => console.log(err))
         setComments(" ")
         props.setTweetProps({
             ...props.tweetProps, comments: [
             ...props.tweetProps.comments, commentData,
         ]})
     }
  
    // console.log(props.tweetProps._id, "single postId");
    console.log(props.tweetProps, "single post");
    // console.log(props.tweetProps.comments, "singletweet comment");
    // console.log(Date.now() , "Date");
    
    
    return (
      <CommentStyled>
      <div className='postsContainer' >
           <form onSubmit={handleComment} >
            <div style={{ backgroundImage: `url()`}} className="userProfileDp" > </div>
          <div
            className="textAreaContainer"
            onClick={() => setEveryOne(!false)}
          >
            <textarea className="textArea"
              placeholder="Tweet your reply"
              typeof="text"
            //   value={comments}
              onChange={(e) => setComments(e.target.value)}
              />
            {everyOne ? (
              <p>
                Replying to <span>{props.tweetProps?.usersAt} </span>
              </p>
            ) : (
              ""
            )}
            <div className="flexIcons">
              <div className="tweetIcons">
                <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                  {<BsCardImage fontSize="35" />}
                </label>
                <input type="file" onChange={(e) => uploadImage(e.target.files) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif fontSize="35" />}
                </label>
                <input type="file" onChange={(e) => uploadVideo(e.target.files)} id="fileInputGif" style={{ display: "none" }} />
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmile fontSize="35" cursor="pointer" />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile fontSize="35" cursor="pointer" />}
                  </span>
                )}
                {emoji ? (
                    <div className="pickerEmoji" >
                      {/* <Picker data={data} onEmojiSelect={(emoji: any) => setTweet(tweet + emoji.native)} /> */}
                    </div>
                ) : (
                  ""
                )}
                
                <span className="locationIcon">
                  {<IoLocationOutline fontSize="25" />}{" "}
                </span>
              </div>
              {everyOne ? <div className="tweetButton">
                {successfulUpload || comments.length > 0 ? <button type="submit">Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div> : <div className="tweetButton"><button className="btn-primary" disabled>Tweet </button></div>
              }
            </div>
          </div>
                </form>
                <div className='seeCommentMap' >
                    {props.tweetProps.comments?.map((comment: any, index:any) => (
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
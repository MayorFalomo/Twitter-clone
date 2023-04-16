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
import { CommentStyled } from './Comments.styled'

type Props = {}

const Comments = (props: any) => {
    
    const { currentUser } = useContext(AppContext)
    

    const [emoji, setEmoji] = useState<boolean>(false);
    const [everyOne, setEveryOne] = useState<boolean>(false);
    const [username, setUsername] = useState<string>(currentUser?.username);
    const [usersAt, setUsersAt] = useState<string>(currentUser?.usersAt);
    const [profileDp, setProfileDp] = useState<string>(currentUser?.profileDp);
    const [picture, setPicture] = useState<string>("");
    const [video, setVideo] = useState<string>("");
    const [gif, setGif] = useState<string>("");
    const [user, setUser] = useState<string>("");
    const [cookies, setCookie] = useCookies(["user"])
    const [tweeterUser, setTweeterUser] = useState<any>([])
    const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
    const [comments, setComments] = useState<any>(props.tweetProps?.comments) //comment box for user to enter comment and post it. 	   const [
    const { suggestedUsers } = useContext(AppContext)
    const [retweet, setRetweet] = useState<boolean>(false)
    const [likeTweet, SetLikeTweet] = useState<boolean>(false)

    
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
             username,
             usersAt,
             profileDp,
             comments,
             picture,
             video,
             postId: props.tweetProps._id,
         }
         await axios.put(`http://localhost:7000/api/tweets/comments`, commentData).catch((err) => console.log(err))
         setComments("")
     }
  
    // console.log(currentUser, "single post");
    console.log(props.tweetProps, "single post");
    
  const views = Math.floor(Math.random() * suggestedUsers.length)
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
              value={comments}
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
            {/* <div className="profilePicture" style={{ backgroundImage: `url(${props.tweet?.profileDp})` }} ></div>
                 <div className='subPostsContainer' >
              <Link href={'/posts/' + props.tweet?._id} ><div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
              <span className='userName' > {props.tweet?.username}</span>
              <span className='userAt'>{props.tweet?.usersAt}</span>
              <span className='createdAt' >{moment(new Date(props.tweet?.createdAt)).fromNow()}</span>
            </div>
                  <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
          </div>
            </Link>
                    <p className='tweet-caption' >{props.tweet?.tweet} </p>
                    <img src={props.tweet.picture} className='tweet-image' alt='img' />
          {props.tweet?.picture.length > 1 ? <div style={{ backgroundImage: `url(${props.tweet?.picture})` }} className='tweet-image' ></div> : ""}
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
              {likeTweet ? <p>
                  {
                        <BsFillHeartFill
                    className="likeIcon"
                    onClick={() => SetLikeTweet(false)}
                      style={{ cursor: "pointer", fontSize: 35, color: "red",}}
                      />
                }</p> :
              <p>
                  {
                        <FaRegHeart
                      className="likeIcon"
                      onClick={() => SetLikeTweet(true)}
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>}
              <span>{0} </span>
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
          </div> */}
            </div>
            </CommentStyled>
  )
}

export default Comments
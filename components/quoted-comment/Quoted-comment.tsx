import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import React, {useState, useEffect, useContext} from 'react'
import { useCookies } from 'react-cookie'
import { AiOutlineBars, AiOutlineFileGif } from 'react-icons/ai'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { TbCalendarTime } from 'react-icons/tb'
import { CommentModalStyle } from '../commentmodal/Commentmodal.styled'
import { MdClose } from 'react-icons/md';
import { QuotedCommentStyle } from './Quoted-comment.styled';
import moment from 'moment';

type Props = {}

const Quoted = (props: any) => {

        const commentId = Date.now()

  const {currentUser} = useContext(AppContext)
  const [emoji, setEmoji] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [tweet, setTweet] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [gif, setGif] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [cookies, setCookie] = useCookies(["user"])
  const [singleTweets, setSingleTweets] = useState<any>([])
  const [comments, setComments] = useState<any>(singleTweets?.comments) //comment box for user to enter comment and post it. 	   const [
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
  const [postId, setPostId] = useState<number>(singleTweets?._id)
  const [createdAt, setCreatedAt] = useState<number>(commentId)
  const [successComment, setSuccessComment] = useState<boolean>(false)

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
      
    useEffect(() => {
        axios.get(`http://localhost:7000/api/tweets/${props.urlParams}`).then((res) => setSingleTweets(res.data))
            .catch((err) => console.log(err))
    }, [])
  
   const handleQuotedTweet = async (e:any) => {
         e.preventDefault();
         const quotedData = {
             username: currentUser?.username,
             usersAt: currentUser?.usersAt,
             profileDp: currentUser?.profilePic,
             comments,
             picture,
             video,
             postId: singleTweets?._id ,
             createdAt,
         }
         await axios.put(`http://localhost:7000/api/tweets/quote-tweet/`, quotedData).catch((err) => console.log(err))
     setComments(" ")
     setSuccessComment(true)
        //  setSingleTweets({
        //      ...singleTweets, comments: [
        //      ...singleTweets.comments, commentData,
        //  ]})
  }
  const handleClose = () => {
    props.setQuotedCommentModal(false)
    props.setRetweetModal(false)
  }

    // console.log(props?.commentModal);
    console.log(singleTweets, "quoted comment modal");
    
    
  return (
       <QuotedCommentStyle>
      <div className='commentModalContainer' >
          <div className='commentModalClose' >
          {<MdClose onClick={handleClose} fontSize={40} cursor='pointer' />} </div>
        <div className='subCommentModal' >
          <div style={{backgroundImage: `url(${currentUser.profilePic})`}} className='ProfilePic' > </div>
          <form>
            <div className='commentForm' >
              <select className='select' >
            <option>Everyone </option>
            <option>Followers </option>
              </select>
          <textarea className='textArea' onChange={(e) => setComments(e.target.value)} value={comments} typeof='text' placeholder='Tweet your reply' />
              </div>
            <div className='tweetDetailsContainer' >
              <div style={{padding: 10}} >
            <div className='tweetDetails' >
            <span style={{ backgroundImage: `url()` }} className='tweetProfilePic' > </span>
            <span style={{ fontSize: 28, fontWeight: 400 }} >{singleTweets?.username} </span>
                <span  style={{ fontSize: 20, fontWeight: 400, color: 'rgb(113,118,123)' }}>{singleTweets?.usersAt}</span>
                <span  style={{ fontSize: 20, fontWeight: 400, color: 'rgb(113,118,123)' }} className='createdAt' >{moment(singleTweets?.createdAt).format("MMMM D")} </span>
            </div>
            <p className='tweet' >{singleTweets?.tweet} </p>
                <p style={{ color: '#1d9aef', fontSize: '24px', opacity: 0.4 }}>Show this Thread </p>
                </div>
              {singleTweets?.picture?.length >1 ? <div style={{ backgroundImage: `url(${singleTweets?.picture})` }} className='pictures' > </div> : ""}
            </div>
              <div className="flexIcons">
                <div className="tweetIcons">
                <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                  {<BsCardImage fontSize="35" color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadImage(e.target.files) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif fontSize="35" color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadVideo(e.target.files)} id="fileInputGif" style={{ display: "none" }} />
                <span>
                  {<AiOutlineBars fontSize="35" cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmile fontSize="25" cursor="pointer" color='1D9BF0' />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile fontSize="35" cursor="pointer" color='1D9BF0' />}
                  </span>
                )}
                {emoji ? (
                <div className="pickerEmoji">
                    <Picker data={data} onEmojiSelect={(emoji: any) => setComments(comments + emoji.native)} />
                </div>
                ) : (
                  ""
                )}
                
                <span>
                  {<TbCalendarTime fontSize="35" cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                <span className="locationIcon">
                  {<IoLocationOutline fontSize="35" color='1D9BF0' />}{" "}
                </span>
              </div>
                {successfulUpload == true || comments?.length > 0 ? <button type="submit" className="tweetButton" >Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div>
          </form>
          </div>
                {/* <div className='subCommentModal' >
                    <div className='profileImages' >
              <div style={{ backgroundImage: `url(${currentUser?.profilePic})` }} className='ProfilePic'> </div>
              <div className='border' > </div>
                        <div style={{ backgroundImage: `url(${singleTweets?.profileDp})` }} className='ProfilePic' > </div>
                        </div>
              <div className='replyDetails' >
                  <h1>{singleTweets?.username} <span>{singleTweets?.usersAt} </span> </h1>
                  <p >{singleTweets?.tweet?.slice(0, 85)}... </p>
                  <p className='tweet' >Replying to <span> {singleTweets?.usersAt} </span> </p>
        <form onSubmit={handleQuotedTweet} >
              <textarea onChange={(e) => setComments(e.target.value)} value={comments} typeof='text' placeholder='Tweet your reply' />
              
                <div className="flexIcons">
                <div className="tweetIcons">
                <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                  {<BsCardImage fontSize="35" color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadImage(e.target.files) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif fontSize="35" color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadVideo(e.target.files)} id="fileInputGif" style={{ display: "none" }} />
                <span>
                  {<AiOutlineBars fontSize="35" cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmile fontSize="25" cursor="pointer" color='1D9BF0' />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile fontSize="35" cursor="pointer" color='1D9BF0' />}
                  </span>
                )}
                {emoji ? (
                <div className="pickerEmoji">
                    <Picker data={data} onEmojiSelect={(emoji: any) => setComments(comments + emoji.native)} />
                </div>
                ) : (
                  ""
                )}
                
                <span>
                  {<TbCalendarTime fontSize="35" cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                <span className="locationIcon">
                  {<IoLocationOutline fontSize="35" color='1D9BF0' />}{" "}
                </span>
              </div>
                {successfulUpload == true || comments?.length > 0 ? <button type="submit" className="tweetButton" >Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div>
                  </form>
            </div>
          </div> */}
              {successComment ? <div className="successMessage" >Your comment has been sent </div> : "" }
            </div>
            </QuotedCommentStyle>
  )
}

export default Quoted
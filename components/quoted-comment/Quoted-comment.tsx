import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { useCookies } from 'react-cookie'
import { AiOutlineBars, AiOutlineFileGif } from 'react-icons/ai'
import { BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { TbCalendarTime } from 'react-icons/tb'
import { CommentModalStyle } from '../commentmodal/Commentmodal.styled'
import { MdClose } from 'react-icons/md';
import { QuotedCommentStyle } from './Quoted-comment.styled';
import moment from 'moment';
import EmojiPicker from 'emoji-picker-react';
import Link from 'next/link'

type Props = {}

//Parent component is [id]
const Quoted = (props: any) => {

        const commentId = new Date()

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
  const [createdAt, setCreatedAt] = useState<any>(commentId)
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
        axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets/${props.urlParams}`).then((res) => setSingleTweets(res.data))
            .catch((err) => console.log(err))
    }, [props.urlParams])
  
   function dec2hex (dec:any) {
  return dec.toString(16).padStart(2, "0")
  }
  
  // generateId :: Integer -> String
function generateId (len:any) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
  }
  
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
             newId: generateId(24)
         }
         await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/quote-tweet/`, quotedData).catch((err) => console.log(err))
     setComments(" ")
     setSuccessComment(true)
         setSingleTweets({
             ...singleTweets, quoted: [
             ...singleTweets.quoted, quotedData,
         ]})
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
          {<MdClose onClick={handleClose} fontSize={30} cursor='pointer' />} </div>
        <div className='subCommentModal' >
          <div style={{backgroundImage: `url(${currentUser?.profilePic})`}} className='ProfilePic' > </div>
          <form onSubmit={handleQuotedTweet} >
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
            <span style={{ backgroundImage: `url(${singleTweets?.profileDp})` }} className='tweetProfilePic' > </span>
            <span style={{ fontWeight: 400 }} >{singleTweets?.username} </span>
                <span  style={{ fontWeight: 400, color: 'rgb(113,118,123)' }} className='usersAt' >{singleTweets?.usersAt}</span>
                <span  style={{ fontWeight: 400, color: 'rgb(113,118,123)' }} className='createdAt' >{moment(singleTweets?.createdAt).format("MMMM D")} </span>
            </div>
            <p className='tweet' >{singleTweets?.tweet} </p>
                <Link href={'/posts/' + singleTweets?._id } style={{ color: '#1d9aef', opacity: 0.4 }}>Show this Thread </Link>
                </div>
              {singleTweets?.picture?.length >1 ? <div style={{ backgroundImage: `url(${singleTweets?.picture})` }} className='pictures' > </div> : ""}
              {singleTweets?.video?.length > 0  && <video src={singleTweets?.video} controls className='videos' />}
            </div>
              <div className="flexIcons">
                <div className="tweetIcons">
                <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                  {<BsCardImage color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadImage(e.target.files) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif color='1D9BF0' />}
                </label>
                <input type="file" onChange={(e) => uploadVideo(e.target.files)} id="fileInputGif" style={{ display: "none" }} />
                <span>
                  {<AiOutlineBars cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmileUpsideDown cursor="pointer" color='1D9BF0' />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile cursor="pointer" color='1D9BF0' />}
                  </span>
                )}
                {emoji ? (
                  <div className="pickerEmoji">
                    <EmojiPicker onEmojiClick={(e) => setComments(comments + e.emoji) } />
                </div>
                ) : (
                  ""
                )}
                
                <span className='calendar' >
                  {<TbCalendarTime cursor="pointer" color='1D9BF0' />}{" "}
                </span>
                <span className="locationIcon">
                  {<IoLocationOutline color='1D9BF0' />}{" "}
                </span>
              </div>
                {successfulUpload == true || comments?.length > 0 ? <button type="submit" className="tweetButton" >Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div>
          </form>
          </div>
              {successComment ? <div className="successMessage" >Your comment has been sent </div> : "" }
            </div>
            </QuotedCommentStyle>
  )
}

export default Quoted
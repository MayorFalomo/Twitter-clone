import React, {useState, useEffect, useContext} from 'react'
import { useCookies } from 'react-cookie'
import { AiOutlineBars, AiOutlineFileGif } from 'react-icons/ai'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { TbCalendarTime } from 'react-icons/tb'
import Picker from "@emoji-mart/react";
import axios from 'axios'
import { MdClose } from 'react-icons/md'
import { CommentModalStyle } from '@/components/commentmodal/Commentmodal.styled'
import { useRouter } from 'next/router'
import { AppContext } from '@/helpers/Helpers'

type Props = {}

const Slug = (props:any) => {
    
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
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
    
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

  // console.log(singleTweets.tweet.length, "props");
  // console.log(currentUser, "current User");
    
    return (
        <CommentModalStyle>
      <div className='commentModalContainer' >
          <div className='commentModalClose' >
            {<MdClose onClick={() => props.setCommentModal(false)} fontSize={40} cursor='pointer' />} </div>
                <div className='subCommentModal' >
                    <div className='profileImages' >
              <div style={{ backgroundImage: `url(${singleTweets?.profileDp})` }} className='ProfilePic'> </div>
              <div className='border' > </div>
                        <div style={{ backgroundImage: `url(${currentUser.profilePic})` }} className='ProfilePic' > </div>
                        </div>
              <div className='replyDetails' >
                  <h1>{singleTweets?.username} <span>{singleTweets?.usersAt} </span> </h1>
                  <p >{singleTweets?.tweet?.slice(0, 85)}... </p>
                  <p className='tweet' >Replying to <span> {singleTweets?.usersAt} </span> </p>
        <form>
            <textarea typeof='text' placeholder='Tweet your reply' />
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
                <div className="pickerEmoji" >
                    {/* <Picker data={data} onEmojiSelect={(emoji: any) => setTweet(tweet + emoji.native)} /> */}
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
                {successfulUpload || tweet.length > 0 ? <button type="submit" className="tweetButton" >Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div>
                  </form>
              </div>
          </div>
            </div>
            </CommentModalStyle>
  )
}

export default Slug
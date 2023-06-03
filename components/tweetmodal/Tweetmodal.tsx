import React, { useContext, useEffect, useState } from "react";
import { BsArrowLeftShort, BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown } from "react-icons/bs";
import { AiOutlineBars, AiOutlineFileGif } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import { AppContext } from "@/helpers/Helpers";
import moment from "moment";
import EmojiPicker from 'emoji-picker-react';
import { TweetModalStyled } from "./Tweetmodal.styled";
import { MdClose } from "react-icons/md";
import { BiArrowToLeft } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";

type Props = {};

const TweetModal = (props: any) => {

  const { currentUser, tweets, setTweets, tweetModal, setTweetModal } = useContext(AppContext)

  const [emoji, setEmoji] = useState<boolean>(false);
  const [currentEmoji, setCurrentEmoji] = useState(null)
  const [everyOne, setEveryOne] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [tweet, setTweet] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [gif, setGif] = useState<string>("");
  const [likes, setLikes] = useState<any>([])
  const [retweet, setRetweet] = useState<any>([])
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
  // const [newDate, setNewDate] = useState<any>(false);
  
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
  
  const presentDate = new Date()  
  
  const [newDates, setNewDates] = useState(moment(new Date(presentDate)).fromNow())
  
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

  // console.log(currentUser);
  
  //Function to post Tweets
  const postTweet = async (e: any) => {
    e.preventDefault();

    const newTweet = {
      username: currentUser.username,
      profileDp: currentUser.profilePic || "",
      usersAt: currentUser.usersAt,
      tweet,
      video,
      picture,
      newDates,
      likes,
      retweet,
      followers: currentUser.followers?.length, //I am adding this so i can add verified user badges on the tl
      // _id: currentUser?._id,
      userId: currentUser?.usersId,
      _id: generateId(24),
    }
    try {
        console.log(newTweet);
        
      await axios.post(`https://twitter-clone-server-nu.vercel.app/api/tweets`, newTweet);
      // window.location.replace("/tweets/" + res.data._id)
      setTweets([...tweets, newTweet])
      setTweet(" ")
      setPicture("")
      setVideo("")
      setLikes([])
      setRetweet([])
      setTweetModal(false)
      // console.log(tweets);
    } catch (err) {
      console.log(err);
    }
  }


    return (
        <TweetModalStyled>
            <div className="tweetPostContainer" >
                <form onSubmit={postTweet} >
                    <div className="heading" >
                    <BsArrowLeftShort onClick={() => setTweetModal(false)}  fontSize={35} cursor='pointer' />
                <div>
                    {everyOne ? <div className="tweetButton">
                {successfulUpload || tweet.length > 0 ? <button type="submit">Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div> : <div className="tweetButton"><button className="btn-primary" disabled>Tweet </button></div>
              }
                    </div>
                </div>
      <div className="subTweetPostContainer">
                    <div style={{ backgroundImage: `url(${currentUser?.profilePic})` }} className="userProfilePicture"></div>
                    <div className="formArea" >
                      {everyOne ? (
              <select>
                <option>Everyone </option>
              </select>
            ) : (
              ""
                    )}
                    {/* <form onSubmit={postTweet} > */}
                       
          <div
            className="textAreaContainer"
            onClick={() => setEveryOne(!false)}
          >
            <textarea className="textArea"
              placeholder="What's happening?"
              typeof="text"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
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
                <span>
                  {<AiOutlineBars cursor="pointer" />}{" "}
                </span>
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmileUpsideDown cursor="pointer" />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile  cursor="pointer" />}
                  </span>
                )}
                {emoji ? (
                  <div className="pickerEmoji" >
                    <EmojiPicker onEmojiClick={(e) => setTweet(tweet + e.emoji) } />
                    {/* <Picker data={data} onEmojiSelect={(emoji: any) => setCurrentEmoji(emoji.native)} /> */}
                  </div>
                ) : (
                  ""
                )}
                
                <span>
                  {<TbCalendarTime cursor="pointer" />}{" "}
                </span>
                <span className="locationIcon">
                  {<IoLocationOutline />}{" "}
                </span>
              </div>
              
            </div>
            </form>
            {/* {<MdClose onClick={() => setTweetModal(false)} fontSize={35} cursor='pointer' />} */}
                </div>
            </TweetModalStyled>
  );
};

export default TweetModal;

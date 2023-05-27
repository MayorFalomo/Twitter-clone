import React, { useContext, useEffect, useState } from "react";
import { ForYouContainer } from "./ForYou.styled";
import { BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown } from "react-icons/bs";
import { AiOutlineBars, AiOutlineFileGif } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import { AppContext } from "@/helpers/Helpers";
import moment from "moment";
import EmojiPicker from 'emoji-picker-react';

type Props = {};

const ForYouPosts = (props: any) => {

  const { currentUser, tweets, setTweets } = useContext(AppContext)

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
      userId: currentUser?._id,
    }
    try {
      await axios.post(`https://twitter-clone-server-nu.vercel.app/api/tweets`, newTweet);
      // window.location.replace("/tweets/" + res.data._id)
      setTweets([...tweets, newTweet].reverse())
      setTweet(" ")
      // console.log(tweets);
    } catch (err) {
      console.log(err);
    }
  }

// console.log(tweets);

  return (
    <ForYouContainer>
      <div className="forYouPostContainer">
        <div style={{backgroundImage: `url(${currentUser?.profilePic})`}} className="userProfilePicture"></div>
        <form onSubmit={postTweet} >
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
            {everyOne ? (
              <select>
                <option>Everyone </option>
              </select>
            ) : (
              ""
            )}
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
              {everyOne ? <div className="tweetButton">
                {successfulUpload || tweet.length > 0 ? <button type="submit">Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div> : <div className="tweetButton"><button className="btn-primary" disabled>Tweet </button></div>
              }
            </div>
          </div>
        </form>
      </div>
    </ForYouContainer>
  );
};

export default ForYouPosts;

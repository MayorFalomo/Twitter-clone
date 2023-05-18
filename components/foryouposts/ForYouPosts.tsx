import React, { useContext, useEffect, useState } from "react";
import { ForYouContainer } from "./ForYou.styled";
import { BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown } from "react-icons/bs";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { AiOutlineBars, AiOutlineFileGif } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import Axios from "axios";
import Tweets from "./posts/Tweets";
import { useCookies } from "react-cookie";
import axios from "axios";
import { AppContext } from "@/helpers/Helpers";
import { log } from "console";
import Tweet from "./posts/Tweet";
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
  const [user, setUser] = useState<string>("");
  const [cookies, setCookie] = useCookies(["user"])
  const [tweeterUser, setTweeterUser] = useState<any>([])
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


  //Function to get current user from backend
  // const getCurrentUser = (id: string) => {
  //   fetch(`http://localhost:7000/api/users/${id}`).then((res) => res.json()).then((res) => {
  //     setUser(res.user)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // };

  // useEffect(() => {
  //   axios.get(`http://localhost:7000/api/users/${cookies.user}`).then((res) => setTweeterUser(res.data)).catch((err) => console.log(err)
  //   )
  // }, [cookies.user]);  
  // console.log(tweets, "This is tweets");
  
  const presentDate = Date.now()
  
  const [newDates, setNewDates ]= useState( moment(new Date(presentDate)).fromNow())

  const postTweet = async (e: any) => {
    e.preventDefault();

    const newTweet = {
      username: currentUser.username,
      profileDp: currentUser.profilePic || "",
      usersAt: currentUser.usersAt,
      tweet,
      video,
      picture,
      gif,
      newDates,
      likes,
      retweet,
    }
    try {
      await axios.post(`https://twitter-clone-server-nu.vercel.app/api/tweets`, newTweet);
      // window.location.replace("/tweets/" + res.data._id)
      setTweets([...tweets, newTweet])
      setTweet(" ")
      // console.log(tweets);
    } catch (err) {
      console.log(err);
    }
  }


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
                  {<BsCardImage fontSize="25" />}
                </label>
                <input type="file" onChange={(e) => uploadImage(e.target.files) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif fontSize="25" />}
                </label>
                <input type="file" onChange={(e) => uploadVideo(e.target.files)} id="fileInputGif" style={{ display: "none" }} />
                <span>
                  {<AiOutlineBars fontSize="25" cursor="pointer" />}{" "}
                </span>
                {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmileUpsideDown fontSize="25" cursor="pointer" />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile fontSize="25" cursor="pointer" />}
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
                  {<TbCalendarTime fontSize="25" cursor="pointer" />}{" "}
                </span>
                <span className="locationIcon">
                  {<IoLocationOutline fontSize="25" />}{" "}
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

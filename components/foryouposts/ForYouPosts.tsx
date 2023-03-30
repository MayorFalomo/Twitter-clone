import React, { useContext, useEffect, useState } from "react";
import { ForYouContainer } from "./ForYou.styled";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { AiOutlineBars, AiOutlineFileGif } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { IoLocationOutline } from "react-icons/io5";
import Axios from "axios";
import Tweets from "./posts/Tweets";
import { useCookies } from "react-cookie";
import axios from "axios";
import { AppContext } from "@/helpers/Helpers";
import { log } from "console";
import Tweet from "./posts/Tweet";

type Props = {};

const ForYouPosts = (props: any) => {

  const {tweets, setTweets} = useContext(AppContext)

  const [emoji, setEmoji] = useState<boolean>(false);
  const [everyOne, setEveryOne] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [tweet, setTweet] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [gif, setGif] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [cookies, setCookie] = useCookies(["user"])
  const [tweeterUser, setTweeterUser] = useState<any>([])
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

  

  //Function to get current user from backend
  // const getCurrentUser = (id: string) => {
  //   fetch(`http://localhost:7000/api/users/${id}`).then((res) => res.json()).then((res) => {
  //     setUser(res.user)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // };

  useEffect(() => {
    axios.get(`http://localhost:7000/api/users/${cookies.user}`).then((res) => setTweeterUser(res.data)).catch((err) => console.log(err)
    )
  }, [cookies.user]);  
    // console.log(tweets, "This is tweets");

  const postTweet = async(e: any) => {
    e.preventDefault();

    const newTweet = {
      username: tweeterUser.username,
      profileDp: tweeterUser.profilePic || "",
      usersAt: tweeterUser.usersAt,
      tweet,
      video,
      picture,
      gif,
    }
    try {
      await axios.post(`http://localhost:7000/api/tweets`, newTweet);
      // window.location.replace("/tweets/" + res.data._id)
      setTweets([...tweets, newTweet])
      setTweet(" ")
      // console.log(res.data);
      // console.log(tweets);
      
    } catch (err) {
      console.log(err);
    }
  }
  


  return (
    <ForYouContainer>
      <div className="forYouPostContainer">
        <div className="userProfilePicture"></div>
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
                    {<BsEmojiSmile fontSize="25" cursor="pointer" />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile fontSize="25" cursor="pointer" />}
                  </span>
                )}
                {emoji ? (
                  <div className="pickerEmoji" ><Picker data={data} onEmojiSelect={ (emoji:any) => setTweet(tweet + emoji.native)} /></div>
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
                {successfulUpload ? <button type="submit">Tweet</button> : <button className="btn-primary" disabled>
                  Tweet
                </button>}
              </div> : <button className="btn-primary" disabled></button> }
            </div>
          </div>
        </form>
      </div>
    </ForYouContainer>
  );
};

export default ForYouPosts;

// export const getStaticProps = async () => {
//   const {data} = await Axios.get(
//     "https://www.boredapi.com/api/activity"
//   )
//   const post = data
//   return {
//     props: {
//        props: {post}
//     },
//   };
// };

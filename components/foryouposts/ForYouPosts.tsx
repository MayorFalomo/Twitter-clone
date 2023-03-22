import React, { useEffect, useState } from "react";
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

type Props = {};

const ForYouPosts = (props: any) => {

  const [emoji, setEmoji] = useState<boolean>(false);
  const [everyOne, setEveryOne] = useState<boolean>(false);
  const [username, setUsername] = useState<boolean>(false);
  const [tweet, setTweet] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [gif, setGif] = useState<string>("");
  


  // useEffect(() => {
  //   Axios.get('https://api.giphy.com/v1/gifs/random?api_key=KqU4HP3PerF9lHGPc2df7ZxzJo6TtuCs&tag=funny&rating=g').then((res) => console.log(res.data)).catch((err) => console.log(err)
  //   )
  // })

  const postTweet = (e: any) => {
    e.preventDefault();

    const newTweet = {
      
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
              autoFocus/>
            {everyOne ? (
              <select>
                <option>Everyone </option>
              </select>
            ) : (
              ""
            )}
            <div className="flexIcons">
              <div className="tweetIcons">
                <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                  {<BsCardImage fontSize="25" />}
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif fontSize="25" />}
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }} />
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
                  <div className="pickerEmoji" ><Picker data={data} onEmojiSelect={console.log} /></div>
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
              <div className="tweetButton">
                {everyOne ? <button type="submit">Tweet</button> : <button className="btn-primary"disabled>
                  Tweet{" "}
                </button>}
              </div>
            </div>
          </div>
        </form>
      </div>
      <Tweets/>
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

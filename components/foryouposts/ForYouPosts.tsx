import React, { useState } from "react";
import { ForYouContainer } from "./ForYou.styled";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { AiOutlineFileGif } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";

type Props = {};

const ForYouPosts = (props: any) => {
  const gf = new GiphyFetch("KqU4HP3PerF9lHGPc2df7ZxzJo6TtuCs");

  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });

  const [gifs, setGifs] = useState(props.gifVid);
  const [emoji, setEmoji] = useState<boolean>(false);
  const [everyOne, setEveryOne] = useState<boolean>(false);

  console.log(gifs);

  return (
    <ForYouContainer>
      <div className="forYouPostContainer">
        <div className="userProfilePicture"></div>
        <form>
          <div
            className="textAreaContainer"
            onClick={() => setEveryOne(!false)}
          >
            <textarea
              placeholder="What's happening?"
              typeof="text"
              autoFocus
            ></textarea>
            {everyOne ? (
              <select>
                <p>Choose Audience </p>
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
                  <Picker data={data} onEmojiSelect={console.log} />
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
                <button type="submit" disabled={everyOne == false}>
                  Tweet{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </ForYouContainer>
  );
};

export default ForYouPosts;

export const getStaticProps = async () => {
  const res = await axios.get(
    "https://api.giphy.com/v1/gifs/random?api_key=KqU4HP3PerF9lHGPc2df7ZxzJo6TtuCs&tag=funny&rating=g"
  );
  const initialData = res
  return {
    props: {
        gifVid: initialData,
    },
  };
};

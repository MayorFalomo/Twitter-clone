import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ForYouContainer } from "./ForYou.styled";
import {
  BsCardImage,
  BsEmojiSmile,
  BsEmojiSmileUpsideDown,
} from "react-icons/bs";
import { AiOutlineBars, AiOutlineFileGif } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import { AppContext } from "@/helpers/Helpers";
import moment from "moment";
import EmojiPicker from "emoji-picker-react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

type Props = {};

const ForYouPosts = (props: any) => {
  const { currentUser, tweets, setTweets } = useContext(AppContext);

  const [emoji, setEmoji] = useState<boolean>(false);
  const [everyOne, setEveryOne] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [tweet, setTweet] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [likes, setLikes] = useState<any>([]);
  const [retweet, setRetweet] = useState<any>([]);
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false);

  const uploadImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/image/upload", formData)
      .then((res) => setPicture(res.data.url))
      .catch((err) => console.log(err));
    setSuccessfulUpload(true);
  };
  const uploadVideo = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post("https://api.cloudinary.com/v1_1/dsghy4siv/video/upload", formData)
      .then((res) => setVideo(res.data.url))
      .catch((err) => console.log(err));
    setSuccessfulUpload(true);
  };

  const presentDate = new Date();

  const [newDates, setNewDates] = useState(
    moment(new Date(presentDate)).fromNow()
  );

  //function to generate id
  function dec2hex(dec: any) {
    return dec.toString(16).padStart(2, "0");
  }

  // generateId :: Integer -> String
  function generateId(len: any) {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
  }

  // console.log(currentUser);

  //Function to post Tweets
  const postTweet = async (e: any) => {
    e.preventDefault();

    const newTweet = {
      username: currentUser?.username,
      profileDp: currentUser?.profilePic || "",
      usersAt: currentUser?.usersAt,
      tweet,
      video,
      picture,
      newDates,
      likes,
      retweet,
      followers: currentUser?.followers?.length, //I am adding this so i can add verified user badges on the tl
      // _id: currentUser?._id,
      userId: currentUser?.usersId,
      _id: generateId(24),
    };
    // console.log(newTweet);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets`, newTweet);
      // window.location.replace("/tweets/" + res.data._id)
      setTweets([newTweet, ...tweets]);
      setEveryOne(false);
      // setTweets([...tweets, newTweet].reverse());
      setTweet(" ");
      setPicture("");
      setVideo("");
      setLikes([]);
      setRetweet([]);
      // console.log(tweets);
    } catch (err) {
      console.log(err);
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.selectionStart; // Accessing the property to ensure TypeScript recognizes it
    }
  }, []);

  // const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setTweet(e.target.value);
  //   if (textareaRef.current) {
  //     const textarea = textareaRef.current;
  //     textarea.setSelectionRange(
  //       e.target.selectionStart,
  //       e.target.selectionEnd
  //     );
  //   }
  // };

  // const handleTextareaChange = (emojiData: { emoji: string }) => {
  //   if (textareaRef.current) {
  //     const textarea = textareaRef.current;
  //     const start = textarea.selectionStart;
  //     const end = textarea.selectionEnd;
  //     setTweet(tweet.slice(0, start) + emojiData.emoji + tweet.slice(end));
  //     textarea.setSelectionRange(
  //       start + emojiData.emoji.length,
  //       start + emojiData.emoji.length
  //     );
  //   }
  // };

  // const handleEmojiClick = (emojiData: { emoji: string }) => {
  //   if (textareaRef.current) {
  //     const textarea = textareaRef.current;
  //     const start = textarea.selectionStart;
  //     const end = textarea.selectionEnd;
  //     setTweet(tweet.slice(0, start) + emojiData.emoji + tweet.slice(end));
  //     textarea.setSelectionRange(
  //       start + emojiData.emoji.length,
  //       start + emojiData.emoji.length
  //     );
  //   }
  // }

  const handleEmojiClick = (emojiData: { emoji: string }) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      setTweet(tweet.slice(0, start) + emojiData.emoji + tweet.slice(end));
      textarea.setSelectionRange(
        start + emojiData.emoji.length,
        start + emojiData.emoji.length
      );
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.setSelectionRange(
        e.target.selectionStart,
        e.target.selectionEnd
      );
    }
  };

  return (
    <ForYouContainer>
      <div className="forYouPostContainer">
        <div
          style={{ backgroundImage: `url(${currentUser?.profilePic})` }}
          className="userProfilePicture"
        ></div>
        <form onSubmit={postTweet}>
          {everyOne ? (
            <select>
              <option>Everyone </option>
            </select>
          ) : (
            ""
          )}

          <div
            onClick={() => setEveryOne(!false)}
            className="textAreaContainer"
          >
            <textarea
              ref={textareaRef}
              className="textArea"
              placeholder="What's happening?"
              typeof="text"
              value={tweet}
              onChange={handleTextareaChange}
            />
            {/* <textarea
              className="textArea"
              placeholder="What's happening?"
              typeof="text"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            /> */}
            <div className="flexIcons">
              <div className="tweetIcons">
                <Tippy content="image" placement="bottom">
                  <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                    {<BsCardImage />}
                  </label>
                </Tippy>
                <input
                  type="file"
                  onChange={(e) => uploadImage(e.target.files)}
                  id="fileInputImage"
                  style={{ display: "none" }}
                />
                <Tippy content="video" placement="bottom">
                  <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                    {<AiOutlineFileGif />}
                  </label>
                </Tippy>
                <input
                  type="file"
                  onChange={(e) => uploadVideo(e.target.files)}
                  id="fileInputGif"
                  style={{ display: "none" }}
                />
                <Tippy content="poll" placement="bottom">
                  <span className="locationIcon">{<AiOutlineBars />} </span>
                </Tippy>
                {emoji ? (
                  <Tippy content="emoji" placement="bottom">
                    <span onClick={() => setEmoji(false)}>
                      {<BsEmojiSmileUpsideDown cursor="pointer" />}
                    </span>
                  </Tippy>
                ) : (
                  <Tippy content="emoji" placement="bottom">
                    <span onClick={() => setEmoji(true)}>
                      {<BsEmojiSmile cursor="pointer" />}
                    </span>
                  </Tippy>
                )}
                {emoji ? (
                  <div className="pickerEmoji">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                    {/* <EmojiPicker
                      onEmojiClick={(e) => {
                        setTweet(tweet + e.emoji);
                      }}
                    /> */}
                    {/* <Picker data={data} onEmojiSelect={(emoji: any) => setCurrentEmoji(emoji.native)} /> */}
                  </div>
                ) : (
                  ""
                )}

                <Tippy content="schedule" placement="bottom">
                  <span className="locationIcon">{<TbCalendarTime />} </span>
                </Tippy>
                <Tippy content="location" placement="bottom">
                  <span className="locationIcon">{<IoLocationOutline />} </span>
                </Tippy>
              </div>
              {everyOne ? (
                <div className="tweetButton">
                  {successfulUpload || tweet.length > 0 ? (
                    <button type="submit">Tweet</button>
                  ) : (
                    <button className="btn-primary" disabled>
                      Tweet
                    </button>
                  )}
                </div>
              ) : (
                <div className="tweetButton">
                  <button className="btn-primary" disabled>
                    Tweet{" "}
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </ForYouContainer>
  );
};

export default ForYouPosts;

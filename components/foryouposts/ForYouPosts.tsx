import React, { useContext, useEffect, useRef, useState } from "react";
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
import TaggingModal from "../taggingModal/TaggingModal";
import { useDebounce } from "@/hooks/useDebounce/useDebounce";
// import { useDebounce } from "../../hooks/useDebounce/useDebounce";

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
  const [taggedArray, setTaggedArray] = useState([]);
  const [openTaggingModal, setTaggingModal] = useState<boolean>();
  const [tagged, setTagged] = useState<string>("");
  const [userSelected, setUserSelected] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setTaggingModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  //We initialize a ref using the useRef, we're using the ref for the textArea so i can get the current position in the textArea
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  //useEffect checks if the textAreaRea.current is true first
  useEffect(() => {
    if (textareaRef.current) {
      console.log(textareaRef.current.selectionStart, "textAreaRef");

      textareaRef.current.selectionStart; // Accessing the property to ensure TypeScript recognizes it
    }
  }, []);

  //Function to combine the tweet and emoji by getting the current position and the end and combining them
  //Without this function, when i click on an emoji, the emoji would always be appended to the end of the textArea instead of whereever my current position in the textArea is
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

  //This function handles the onChange functionality of the textArea
  const handleTextareaChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    // if (e.target.value.length < 1) {
    //   setTaggingModal(false);
    // }
    setTweet(e.target.value);

    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.setSelectionRange(
        e.target.selectionStart,
        e.target.selectionEnd
      );
    }
  };

  const debouncedTweet = useDebounce(tweet, 2000); //Using a custom debounce hook that takes in two arguments, The tweet string and the time in milliseconds to debounce the tweet
  const atIndex = debouncedTweet.lastIndexOf("@"); //Then from the debounced tweet first I get the lastIndexOf @ in the debouncedTweet therefore it should tell me the index of the last @
  const typedAfterAt = debouncedTweet.substring(atIndex + 1).trim(); //Once i've gotten the indexOf the last @, First i add + 1 so I can get anything starting from after the "@" value so @paul would be paul without the @.

  //I then call a useEffect that would run checks for me as I type based on certain changes I would set in it's dependency array
  useEffect(() => {
    //*Until you type @, the lastIndexOf would always return -1 at the start
    //If the debouncedTweet length is > atIndex + 1 (the index of @ + 1)....(The debounced tweet Which is basically our tweet but just debounced)
    //!The +1 is there because we need to be sure we have added a value for the @ so the modal to work
    if (atIndex !== -1 && debouncedTweet.length > atIndex + 1) {
      //The tweet length should always be > than the @index + 1 before the modal opens

      //Gives me the value I write after the @
      const checkForSpace = typedAfterAt.includes(" "); //Returns either true or false for if the typedAfter contains a white/empty space. and if it does the modal should close, this is to prevent the modal container from continuously searching for whatever sentence would come after i've found the user i'm looking for

      // If The checkForSpace is true and the debouncedTweet length is absent then the modal should also remain closed but if not....
      if (checkForSpace || debouncedTweet.length < 1) {
        setTaggingModal(false);
      }
      //The else now would run if the tweet length is > 1 and there aren't any white-spaces after @
      else {
        setTaggingModal(true); //Set the suggestions modal to be true
        setIsLoading(true);
        //Fetch the users based on whatever you typed
        const fetchSuggestedUsers = async () => {
          const response = await axios({
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/search/suggested-users?usersAt=${typedAfterAt}`,
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.data) {
            setIsLoading(false);
            setTaggedArray(response.data);
          } else {
            setIsLoading(false);
            setTaggedArray([]);
          }
        };

        fetchSuggestedUsers();
      }
    }
  }, [debouncedTweet, typedAfterAt]);

  //This function would only run if tagged gets a value
  //It's what allows the tweet already typed to combine with the user that was tagged
  const handleSubmit = async () => {
    //I get the lastIndexOf the @ value
    const getStringIndex = tweet.lastIndexOf("@");
    const getStringlength = tweet.length; //Then i get the total length of the tweet

    //!Now based on the two values above I can know what position i want to slice and combine/update from the previous tweet and the present tagging i'm adding to the tweet
    const updatedTweet = tweet.slice(-getStringlength, getStringIndex) + tagged; //Slice the tweet at the positions -lengthOfTheTweet so it starts from the end instead of the beginning and stops at the index of the @ - I did this so while combining the previous tweet values and the present, The previous @ and the short name in front is cut-off example @log removes completely and gets sliced of and the tagged user is then added to it
    setTweet(updatedTweet); // Set the tweet to the updatedTweet value
    setTaggingModal(false); // Once the tweet is updated I set the modal to false
    setTagged(""); //Then i set the tagged to an "" string once again
  };

  //This useEffect runs based on if the tagged has received a value and isn't empty anymore
  useEffect(() => {
    if (tagged) {
      handleSubmit();
    }
  }, [tagged]);

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
            {openTaggingModal ? (
              <TaggingModal
                taggedPeople={taggedArray}
                setTagged={setTagged}
                isLoading={isLoading}
              />
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </ForYouContainer>
  );
};

export default ForYouPosts;

import React, { useContext, useEffect, useRef, useState } from "react";
import {
  BsArrowLeftShort,
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
import { TweetModalStyled } from "./Tweetmodal.styled";
import { MdClose } from "react-icons/md";
import { BiArrowToLeft } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import TaggingModal from "../taggingModal/TaggingModal";
import { useDebounce } from "@/hooks/useDebounce/useDebounce";

type Props = {};

const TweetModal = (props: any) => {
  const {
    currentUser,
    tweets,
    setTweets,
    tweetModal,
    setTweetModal,
  } = useContext(AppContext);

  const [emoji, setEmoji] = useState<boolean>(false);
  const [currentEmoji, setCurrentEmoji] = useState(null);
  const [everyOne, setEveryOne] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [tweet, setTweet] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [gif, setGif] = useState<string>("");
  const [likes, setLikes] = useState<any>([]);
  const [retweet, setRetweet] = useState<any>([]);
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false);
  const [taggedArray, setTaggedArray] = useState([]);
  const [openTaggingModal, setTaggingModal] = useState<boolean>();
  const [tagged, setTagged] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const [newDate, setNewDate] = useState<any>(false);

  //Function to upload image
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

  //function to upload video
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

  //Returns current Date
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
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/tweets`, newTweet);
      // window.location.replace("/tweets/" + res.data._id)
      setTweets([newTweet, ...tweets]);
      setTweet(" ");
      setPicture("");
      setVideo("");
      setLikes([]);
      setRetweet([]);
      setTweetModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value.length < 1) {
      setTaggingModal(false);
    }
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
    <TweetModalStyled>
      <div className="tweetPostContainer">
        <form onSubmit={postTweet}>
          <div className="heading">
            <BsArrowLeftShort
              onClick={() => setTweetModal(false)}
              fontSize={28}
              cursor="pointer"
            />
            <div>
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
          <div className="subTweetPostContainer">
            <div
              style={{ backgroundImage: `url(${currentUser?.profilePic})` }}
              className="userProfilePicture"
            ></div>
            <div className="formArea">
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
                <textarea
                  ref={textareaRef}
                  className="textArea"
                  placeholder="What's happening?"
                  typeof="text"
                  value={tweet}
                  onChange={handleTextareaChange}
                  // style={{ color: `${tweet?.startsWith("@")}` ? "blue" : "white" }}
                />

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
            </div>
          </div>
          <div className="flexIcons">
            <div className="tweetIcons">
              <label htmlFor="fileInputImage" style={{ cursor: "pointer" }}>
                {<BsCardImage />}
              </label>
              <input
                type="file"
                onChange={(e) => uploadImage(e.target.files)}
                id="fileInputImage"
                style={{ display: "none" }}
              />
              <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                {<AiOutlineFileGif />}
              </label>
              <input
                type="file"
                onChange={(e) => uploadVideo(e.target.files)}
                id="fileInputGif"
                style={{ display: "none" }}
              />
              <span>{<AiOutlineBars cursor="pointer" />} </span>
              {emoji ? (
                <span onClick={() => setEmoji(false)}>
                  {<BsEmojiSmileUpsideDown cursor="pointer" />}
                </span>
              ) : (
                <span onClick={() => setEmoji(true)}>
                  {<BsEmojiSmile cursor="pointer" />}
                </span>
              )}
              {emoji ? (
                <div className="pickerEmoji">
                  <EmojiPicker
                    onEmojiClick={(e) => setTweet(tweet + e.emoji)}
                  />
                  {/* <Picker data={data} onEmojiSelect={(emoji: any) => setCurrentEmoji(emoji.native)} /> */}
                </div>
              ) : (
                ""
              )}

              <span>{<TbCalendarTime cursor="pointer" />} </span>
              <span className="locationIcon">{<IoLocationOutline />} </span>
            </div>
          </div>
        </form>
        {/* {<MdClose onClick={() => setTweetModal(false)} fontSize={35} cursor='pointer' />} */}
      </div>
    </TweetModalStyled>
  );
};

export default TweetModal;

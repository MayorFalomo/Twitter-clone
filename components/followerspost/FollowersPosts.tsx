import React, { useContext, useEffect, useState } from "react";
import { FollowersPostStyle } from "./FolloweresPost.styled";
import axios from "axios";
import { AppContext } from "@/helpers/Helpers";
import Tweet from "../foryouposts/posts/Tweet";
import { RiQuillPenLine } from "react-icons/ri";
import TweetModal from "../tweetmodal/Tweetmodal";

type Props = {};

const FollowersPosts = (props: Props) => {
  const { currentUser, tweetModal, setTweetModal, observerRef } = useContext(
    AppContext
  );

  const [followingTweets, setFollowingTweets] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [addedToBookmark, setAddedToBookmark] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser) {
      axios
        .get(
          `https://twitter-clone-server-nu.vercel.app/api/users/${currentUser.username}/following-tweets`
        )
        .then((res) => {
          setFollowingTweets(res.data);
          setIsLoading(true);
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser.username]);

  return (
    <FollowersPostStyle>
      <div className="tweetsContainer">
        {!isLoading && followingTweets.length == 0 ? (
          <div className="loadingBar">
            <span style={{ textAlign: "center" }} className="loader"></span>
          </div>
        ) : followingTweets.length > 0 ? (
          followingTweets?.map((tweet: any, index: any) => {
            return (
              <div key={tweet?._id}>
                <Tweet tweet={tweet} setAddedToBookmark={setAddedToBookmark} />
              </div>
            );
          })
        ) : (
          <div className="followersPost">
            <p style={{ textAlign: "center" }}>
              {" "}
              Your following have not tweeted yet{" "}
            </p>
          </div>
        )}
        <div ref={observerRef} style={{ height: "10px" }} />
        <div className="quill" onClick={() => setTweetModal(true)}>
          <p className="tweetIconBtn">
            {
              <RiQuillPenLine
                style={{
                  background: "#1d9aef",
                  padding: "10px 10px",
                  fontSize: 55,
                  borderRadius: "50px",
                }}
              />
            }{" "}
          </p>
        </div>
        {TweetModal && (
          <div className={tweetModal ? "active" : "inactive"}>
            <TweetModal />
          </div>
        )}
        {addedToBookmark ? (
          <p className="bookmarkAdded">Tweet added to bookmark</p>
        ) : (
          ""
        )}
      </div>
    </FollowersPostStyle>
  );
};

export default FollowersPosts;

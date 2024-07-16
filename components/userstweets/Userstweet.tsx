import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Allusertweet from "../allusertweet/Allusertweet";
import { UserTweetStyle } from "./Userstweet.styled";
import { AppContext } from "@/helpers/Helpers";

type Props = {};

//Parent component is ProfilePage.tsx

const Userstweet = (props: any) => {
  const { currentUser } = useContext(AppContext);

  const [allUsersTweets, setAllUsersTweets] = useState<any>([]);

  //Function to get the currentUsers tweet
  useEffect(() => {
    if (currentUser?.username) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/tweets/get-tweet/${currentUser?.username}`
        )
        .then((res) => setAllUsersTweets(res.data))
        .catch((err) => console.log(err));
    }
  }, [currentUser?.username]);

  return (
    <UserTweetStyle>
      <div className="userTweetContainer">
        <div>
          {allUsersTweets.posts?.reverse()?.map((allTweet: any) => (
            <div key={allTweet._id} className="subAllTweet">
              <Allusertweet allTweet={allTweet} />
            </div>
          ))}
        </div>
        {allUsersTweets.posts?.length == 0 && (
          <div className="noTweetText">
            <p>You Have No Tweets </p>
          </div>
        )}
      </div>
    </UserTweetStyle>
  );
};

export default Userstweet;

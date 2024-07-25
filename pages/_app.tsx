/* eslint-disable react-hooks/exhaustive-deps */
import GlobalStyle from "@/GlobalStyle.styled";
import type { AppProps } from "next/app";
import { useState, useEffect, useReducer, useRef } from "react";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ChatContext } from "@/helpers/ChatContext";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

//*THIS IS THE PARENT COMPONENT OF EVERYTHING

type Post = {};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);
  const [tweets, setTweets] = useState<any>([]);
  const [suggestedUsers, setSuggestedUsers] = useState<any>([]);
  const [twitterBlue, setTwitterBlue] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<any>([]);
  const [bookmarks, setBookmarks] = useState<any>([]);
  const [cookies, setCookie] = useCookies(["user"]);
  const [searchTweets, setSearchTweets] = useState<string>("");
  const [tweetModal, setTweetModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<boolean>(false);

  const observerRef = useRef(null);
  //Function to get current user from backend
  // const getCurrentUser = (id: string) => {
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`).then((res) => res.json()).then((res) => {
  //     setUser(res.user)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // };

  // console.log(cookies.user);

  // useEffect(() => {
  //   getCurrentUser(cookies.user)
  // }, [cookies.user]);

  //getCurrentUser takes in a parameter called Id which we'll get from cookies.user
  const getCurrentUser = async (id: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`)
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("User ID not found");
        }
      })
      .then(async (res) => {
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err);
        router.push("/login"); // Redirect to login page if user ID is not found
      });
  };

  //UseEffect to load cookies.user and just
  useEffect(() => {
    // console.log(cookies?.user, "cookies in useEffect");

    getCurrentUser(cookies?.user);
  }, [cookies.user]);

  // console.log(currentUser, "cookies,user");

  const fetchMoreTweets = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/tweet-options/${currentUser.username}/your-tweets`
        // `${process.env.NEXT_PUBLIC_BASE_URL}/tweets`
      );
      if (res) {
        const tweeks = [...res.data];
        setTweets(tweeks);
      }
      // console.log(res, "This is Res");

      // const data = await res.data
      // console.log(data, "This is Res");
      // setTweets((prevTweets: any) => [...prevTweets, ...data]);
      // setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchMoreTweets();
    }
  }, [currentUser]);

  //UseEffect to set the currentUser based on the ID
  useEffect(() => {
    if (cookies.user) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${cookies.user}`)
        .then((res: any) => setCurrentUser(res.data))
        .catch((err: any) => console.log(err));
    }
  }, [cookies.user]);

  //useEffect to load all registered users
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`)
      .then((res: any) => setSuggestedUsers(res.data))
      .catch((err: any) => console.log(err));
  }, []);

  //function to get all bookmarks of the currentUser
  const getUserBookmarks = async (param: any) => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/bookmarks/get-bookmark/${param}`
    );
    setBookmarks(res.data);
  };

  //This useEffect would run when currentUser?._id gets a value
  useEffect(() => {
    if (currentUser?._id) {
      getUserBookmarks(currentUser?._id);
    } else {
      console.log("no user");
    }
  }, [currentUser?._id]);

  const [noOfFollowing, setNoOfFollowing] = useState(
    currentUser?.following?.length
  );

  const [notifications, setNotifications] = useState<any>();

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  //Reducer to manage chats
  //This reducer helps keep track of the chats, so if the currentUse Id is greater it know whose chats to load
  const chatReducer = (state: any, action: any) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser?._id > action.payload.uid
              ? currentUser?._id + action.payload.uid
              : action.payload.uid + currentUser?._id,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        user,
        setUser,
        getCurrentUser,
        setCurrentUser,
        suggestedUsers,
        setSuggestedUsers,
        twitterBlue,
        setTwitterBlue,
        tweets,
        setTweets,
        currentUser,
        bookmarks,
        setBookmarks,
        notifications,
        setNotifications,
        searchTweets,
        setSearchTweets,
        tweetModal,
        setTweetModal,
        observerRef,
        navigation,
        setNavigation,
        isLoading,
        setIsLoading,
        // isIntersecting,
      }}
    >
      <ChatContext.Provider value={{ data: state, dispatch }}>
        <GlobalStyle />
        <Toaster position="bottom-left" />
        <Component {...pageProps} />
      </ChatContext.Provider>
    </AppContext.Provider>
  );
}

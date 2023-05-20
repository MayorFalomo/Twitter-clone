/* eslint-disable react-hooks/exhaustive-deps */
import GlobalStyle from "@/GlobalStyle.styled";
import type { AppProps } from "next/app";
import { useState, useEffect, useReducer } from "react";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { useCookies } from "react-cookie";
import { ChatContext } from "@/helpers/ChatContext";
import { Router, useRouter } from "next/router";

//*THIS IS THE PARENT COMPONENT OF EVERYTHING

type Post = {

}
  
export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(true)
  const [user, setUser] = useState<any>(null)
  const [tweets, setTweets] = useState<any>([])
  const [suggestedUsers, setSuggestedUsers] = useState<any>([])
  const [twitterBlue, setTwitterBlue] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<any>([])
  const [bookmarks, setBookmarks] = useState<any>([])
  const [cookies, setCookie] = useCookies(["user"]);
  const [userFollowing, setUserFollowing] = useState<any>([])

  //Function to get current user from backend
  const getCurrentUser = (id: string) => {
    fetch(`https://twitter-clone-server-nu.vercel.app/api/users/${id}`).then((res) => res.json()).then((res) => {
      setUser(res.user)
    }).catch((err) => {
      console.log(err)
    })
  };

  useEffect(() => {
    getCurrentUser(cookies.user)
  }, [cookies.user]);
  
  // console.log(user, "this is user");

  // console.log(pageProps, "hellooooo APP");
  
  // useEffect(() => {
  //   setTweets([...posts].reverse())
  // }, [posts])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets`);
      setTweets(res.data?.reverse());
      // setCompleted(true)
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    axios.get(`https://twitter-clone-server-nu.vercel.app/api/users/${cookies.user}`)
      .then((res: any) => setCurrentUser(res.data)).catch((err: any) => console.log(err))
  }, [])
  
  useEffect(() => {
    axios.get(`https://twitter-clone-server-nu.vercel.app/api/users`)
      .then((res: any) => setSuggestedUsers(res.data)).catch((err: any) => console.log(err))
  }, [])
  
  const getUserBookmarks = async (param: any) => {
    const res = await axios.get(`https://twitter-clone-server-nu.vercel.app/api/bookmarks/get-bookmark/${param}`)
    setBookmarks(res.data)
  }

  useEffect(() => {
    if (isAuth) {
      getUserBookmarks(currentUser?._id)
    } else {
      console.log("no user")
    }
  }, [currentUser])

  // console.log(bookmarks, "bookmarks");

  const [noOfFollowing, setNoOfFollowing] = useState(currentUser?.following?.length);
  // console.log(noOfFollowing, "following");

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  }

  const chatReducer = (state: any, action: any) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: currentUser._id > action.payload.uid ?
            currentUser._id + action.payload.uid
            : action.payload.uid + currentUser._id
        }
      default:
        return state;
    }
  }
  // console.log(currentUser._id);
  

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  // if (!user) {
  //   router.push('/register')
  // } else {
  console.log(currentUser);
  
  // if (currentUser) {
  //   return console.log(true);
    
  // } else {
  //   console.log(false);
    
  // }
  
   if (pageProps.protected && !currentUser) {
    router.push('/login')
  } else{

    return (
      <AppContext.Provider value={{
        isAuth,
        user,
        setUser,
        setCurrentUser,
        suggestedUsers,
        setSuggestedUsers,
        twitterBlue,
        setTwitterBlue,
        tweets,
        setTweets,
        currentUser,
        bookmarks,
        setBookmarks
      }}>
        <ChatContext.Provider value={{ data: state, dispatch }} >
          <GlobalStyle />
          <Component {...pageProps} />
        </ChatContext.Provider>
      </AppContext.Provider>
    );
  }

}
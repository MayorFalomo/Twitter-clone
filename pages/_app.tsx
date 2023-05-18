import GlobalStyle from "@/GlobalStyle.styled";
import type { AppProps } from "next/app";
import { useState, useEffect, useReducer } from "react";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { useCookies } from "react-cookie";
// import { GetStaticProps } from "next/app";
import { ChatContext } from "@/helpers/ChatContext";
import { GetServerSideProps } from "next";

//*THIS IS THE PARENT COMPONENT OF EVERYTHING

type Post = {

}

// export const getServerSideProps: GetServerSideProps = async (context: any) => {
  
  // try {
  //   const res = await fetch('https://twitter-clone-server-nu.vercel.app/api/tweets')
  //   const posts: Post[] = await res.json()
  //   return {
  //     props: {
  //       posts: posts?.reverse(),
      
  //     },
  //   };
  // } catch (error) {
  //   console.log(error);

  //   return {
  //     props: {
  //       posts: [],
      
  //     },
  //   };
  // }
// }
  
export default function App({ Component, pageProps }: AppProps) {

  // const {posts} = pageProps
  const [isAuth, setIsAuth] = useState(true)
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
   }, []);
  
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
  
  const getUserBookmarks = async (param:any) => {
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
      <ChatContext.Provider value={{data: state, dispatch}} >
        <GlobalStyle />
        <Component {...pageProps} />
        </ChatContext.Provider>
    </AppContext.Provider>
  );
}
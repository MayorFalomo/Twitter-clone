import GlobalStyle from "@/GlobalStyle.styled";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { useCookies } from "react-cookie";
import { GetStaticProps } from "next";

//*THIS IS THE PARENT COMPONENT OF EVERYTHING

type Post = {
  username: string,
}

export const getStaticProps: GetStaticProps<{posts: Post[]}> = async(context) => {
  const res = await fetch(`http://localhost:7000/api/tweets`)
  const posts: Post[] = await res.json()
  
  return {
    props: {
      posts: posts.reverse(),
    }
  };
};
  
export default function App({ Component, pageProps }: AppProps) {

  const {posts} = pageProps
  const [isAuth, setIsAuth] = useState()
  const [user, setUser] = useState<any>(null)
  const [tweets, setTweets] = useState<any>(posts)
  const [suggestedUsers, setSuggestedUsers] = useState<any>([])
  const [twitterBlue, setTwitterBlue] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<any>([])
  const [bookmarks, setBookmarks] = useState<any>([])
  const [cookies, setCookie] = useCookies(["user"]);
  const [userFollowing, setUserFollowing] = useState<any>([])

  //Function to get current user from backend
  const getCurrentUser = (id: string) => {
    fetch(`http://localhost:7000/api/users/${id}`).then((res) => res.json()).then((res) => {
      setUser(res.user)
    }).catch((err) => {
      console.log(err)
    })
  };

   useEffect(() => {
     getCurrentUser(cookies.user)   
   }, []);
  
  // console.log(user, "this is user");

  // console.log(posts, "hellooooo APP");
  
  

  //  useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get(`http://localhost:7000/api/tweets`);
  //     setTweets(res.data);
  //     // setCompleted(true)
  //   };
  //   fetchPosts();
  // }, []);

    useEffect(() => {
    axios.get(`https://twitter-clone-server-nu.vercel.app/api/users/${cookies.user}`)
      .then((res: any) => setCurrentUser(res.data)).catch((err: any) => console.log(err))
    }, [])
  
    useEffect(() => {
    axios.get(`https://twitter-clone-server-nu.vercel.app/api/users`)
      .then((res: any) => setSuggestedUsers(res.data)).catch((err: any) => console.log(err))
    }, [])
  
  const getUserBookmarks = async (param:any) => {
    const res = await axios.get(`http://localhost:7000/api/bookmarks/get-bookmark/${param}`)
    setBookmarks(res.data.bookmarks)
  }

  // useEffect(() => {
  //   if (isAuth) {
  //     getUserBookmarks(currentUser?._id)
  //   } else {
  //     console.log("no user")
  //   }
  // }, [currentUser])
  console.log(currentUser?.following?.length, "user Id");
  const [noOfFollowing, setNoOfFollowing] = useState(currentUser?.following?.length);
  console.log(noOfFollowing, "following");

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
      setBookmarks,
      // following,
      // setNoOfFollowing,
    }}>
      <GlobalStyle />
        <Component {...pageProps} />
    </AppContext.Provider>
  );
}
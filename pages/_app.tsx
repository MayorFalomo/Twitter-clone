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
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [user, setUser] = useState<any>(null)
  const [tweets, setTweets] = useState<any>(posts)
  const [suggestedUsers, setSuggestedUsers] = useState<any>([])
  const [twitterBlue, setTwitterBlue] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<any>([])

  const [cookies, setCookie] = useCookies(["user"])

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
    axios.get(`http://localhost:7000/api/users/${cookies.user}`)
      .then((res: any) => setCurrentUser(res.data)).catch((err: any) => console.log(err))
    }, [])
  
    useEffect(() => {
    axios.get(`http://localhost:7000/api/users`)
      .then((res: any) => setSuggestedUsers(res.data)).catch((err: any) => console.log(err))
    }, [])
  
  // console.log(currentUser);

  return (
    <AppContext.Provider value={{isAuth, user, setUser, getCurrentUser, suggestedUsers, setSuggestedUsers, twitterBlue, setTwitterBlue, tweets, setTweets, currentUser}}>
      <GlobalStyle />
        <Component {...pageProps} />
    </AppContext.Provider>
  );
}
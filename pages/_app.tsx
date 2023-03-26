import GlobalStyle from "@/GlobalStyle.styled";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { useCookies } from "react-cookie";

//*THIS IS THE PARENT COMPONENT OF EVERYTHING

export default function App({ Component, pageProps }: AppProps) {

  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [user, setUser] = useState<any>(null)
  const [tweets, setTweets] = useState<any>([])

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
  

   useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`http://localhost:7000/api/tweets`);
      setTweets(res.data);
      // setCompleted(true)
    };
    fetchPosts();
  }, []);


  return (
    <AppContext.Provider value={{ isAuth, user, setUser, getCurrentUser,tweets, setTweets }}>
      <GlobalStyle />
        <Component {...pageProps} />
    </AppContext.Provider>
  );
}
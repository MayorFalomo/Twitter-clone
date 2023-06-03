/* eslint-disable react-hooks/exhaustive-deps */
import GlobalStyle from "@/GlobalStyle.styled";
import type { AppProps } from "next/app";
import { useState, useEffect, useReducer, useRef } from "react";
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
  const [searchPost, setSearchPost] = useState<string>("");
  const [tweetModal, setTweetModal] = useState<boolean>(false);
 const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  
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
  }, [cookies.user]);
  
  // console.log(user, "this is user");

  // console.log(pageProps, "hellooooo APP");
  
  // useEffect(() => {
  //   setTweets([...posts].reverse())
  // }, [posts])

 const observer = useRef<IntersectionObserver | null>(null);
  const lastTweetRef = useRef<HTMLDivElement>(null);

//  const handleObserver: IntersectionObserverCallback = ([entry]) => {
//     if (entry.isIntersecting) {
//       // Load more tweets when the last tweet element comes into view
//       loadMoreTweets();
//     }
//  };
  
  
  const loadMoreTweets = async () => {
    if (currentPage >= totalPages) {
      return; // No more tweets to load
    }

    const nextPage = currentPage + 1;
    const res = await axios.get(`http://localhost:7000/api/tweets?page=${nextPage}`);
    const newTweets = res.data.reverse();

    setTweets((prevTweets: any) => [...prevTweets, ...newTweets]);
    console.log(tweets);
    
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    // Initialize the Intersection Observer when the component mounts
    observer.current = new IntersectionObserver(handleObserver);
    if (lastTweetRef.current) {
      observer.current.observe(lastTweetRef.current);
    }

    return () => {
      // Cleanup the Intersection Observer when the component unmounts
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  //  useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get(`http://localhost:7000/api/tweets?page=${currentPage}`);
  //     const reversedTweets = res.data.reverse();
  //     setTweets(reversedTweets);
  //     setTotalPages(res.headers["x-total-pages"]);
  //   };
  //   fetchPosts();
  // }, []);
 
  const fetchPosts = async () => {
  if (loading) return; // Prevent multiple simultaneous requests
  setLoading(true);

  try {
    const res = await axios.get(`http://localhost:7000/api/tweets?page=${currentPage}`);
    const tweetsArray = Array.isArray(res.data) ? res.data : Array.from(res.data);
    const reversedTweets = tweetsArray.reverse();
    setTweets((prevTweets:any) => [...prevTweets, ...reversedTweets]);
    setTotalPages(res.headers["x-total-pages"]);
    setCurrentPage((prevPage) => prevPage + 1);
  } catch (error) {
    console.error('Error fetching tweets:', error);
  } finally {
    setLoading(false);
  }
  };
  
  const handleObserver = (entries:any) => {
  const target = entries[0];
  if (target.isIntersecting) {
    fetchPosts();
  }
  };
  
  useEffect(() => {
  const observer = new IntersectionObserver(handleObserver);
  if (lastTweetRef.current) {
    observer.observe(lastTweetRef.current);
  }

  return () => {
    if (lastTweetRef.current) {
      observer.unobserve(lastTweetRef.current);
    }
  };
}, [lastTweetRef]);
//   const handleObserver = (entries) => {
//   const target = entries[0];
//   if (target.isIntersecting) {
//     fetchPosts();
//   }
// };
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get(`http://localhost:7000/api/tweets?page=${currentPage}`);
  //     setTweets(res.data?.reverse());
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

  //  useEffect(() => {
  //   const fetchPosts = async (params:any) => {
  //     const res = await axios.get(`https://blogaroo-backend.vercel.app/api/posts` + search);
  //     ses(res.data);
  //     setCompleted(true)
  //   };
  //   fetchPosts(skip);
  // }, [search]);
  // console.log(bookmarks, "bookmarks");

  const [noOfFollowing, setNoOfFollowing] = useState(currentUser?.following?.length);
  // console.log(noOfFollowing, "following");

// useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:7000/api/users/${currentUser._id}/get-notifications`
//         );
//         setNotifications(response.data);
//       } catch (error) {
//         console.log('Error fetching notifications:', error);
//       }
//     };

//     fetchNotifications();
// }, [currentUser._id]);
  
    const [notifications, setNotifications] = useState<any>();
// console.log(currentUser);

  // console.log(notifications, "this is notifications");
  console.log(tweets);
  
  

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
  // console.log(notifications, "notifications");
  

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  // if (!user) {
  //   router.push('/register')
  // } else {
  // console.log(currentUser);
  
  // if (currentUser) {
  //   return console.log(true);
    
  // } else {
  //   console.log(false);
    
  // }
  
   if (pageProps.protected && !currentUser) {
     router.push('/login')
     return null
  } 

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
        notifications,
        setNotifications,
        searchPost,
        setSearchPost,
        tweetModal,
        setTweetModal,
        lastTweetRef,
      }}>
        <ChatContext.Provider value={{ data: state, dispatch }} >
          <GlobalStyle />
          <Component {...pageProps} />
        </ChatContext.Provider>
      </AppContext.Provider>
    );
  }
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
  const [searchTweets, setSearchTweets] = useState<string>("");
  const [tweetModal, setTweetModal] = useState<boolean>(false);
 const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<boolean>(false);

  //Function to get current user from backend
  // const getCurrentUser = (id: string) => {
  //   fetch(`https://twitter-clone-server-nu.vercel.app/api/users/${id}`).then((res) => res.json()).then((res) => {
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
  const getCurrentUser = async(id: string) => {
 await fetch(`https://twitter-clone-server-nu.vercel.app/api/users/${id}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("User ID not found");
      }
    })
   .then((res) => {      
      setUser(res.user);
    })
    .catch((err) => {
      console.log(err);
      router.push("/login"); // Redirect to login page if user ID is not found
    });
};

  //UseEffect to load cookies.user and just 
useEffect(() => {
  getCurrentUser(cookies?.user);
}, [cookies.user]);
  
  const observerRef = useRef(null);
  

   const fetchMoreTweets = async () => {
    //  if (!isLoading) {
       setIsLoading(true);
      // setIsPreload(true);
      try {
        const res = await axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets`);
        // console.log(res, "This is Res");
        
        // const data = await res.data
                // console.log(data, "This is Res");
        // setTweets((prevTweets: any) => [...prevTweets, ...data]);
        // setCurrentPage((prevPage) => prevPage + 1);
        const tweeks =  [...res.data].reverse()
        setTweets(tweeks)
      } catch (error) {
        console.error('Error fetching tweets:', error);
      } finally {
          setIsLoading(false);
     
      }
   };


  useEffect(() => {
    fetchMoreTweets();
  }, []);
    

//  useEffect(() => {
//     const handleScroll = () => {
//       const viewportHeight = window.innerHeight;
//       const scrollPosition = window.scrollY;
//       console.log(viewportHeight, "This is ViewPort height");
      
//       // Set the threshold height as a fraction of the viewport height, adjust as needed
//       const thresholdFraction = 0.5;
//       const thresholdHeight = viewportHeight * thresholdFraction;

//       // Check if the scroll position is greater than or equal to the threshold height
//       if (scrollPosition >= thresholdHeight) {
//         console.log('Hello');
//       }
//     };

//     // Attach the event listener to the scroll event
//     window.addEventListener('scroll', handleScroll);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   const handleScroll = () => {
//   const isAtBottom =
//     window.innerHeight + document.documentElement.scrollTop + 700 >=
//     document.documentElement.offsetHeight;

//   if (isAtBottom && !isLoading) {
//     console.log("Reached the bottom");
//     fetchMoreTweets();
//   }
// };

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, [isLoading, fetchMoreTweets]);

  //  useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const isIntersecting = entries[0].isIntersecting;
  //     setIsIntersecting(isIntersecting);
  //   });

  //   if (observerRef.current) {
  //     observer.observe(observerRef.current);
  //   }

  //   return () => {
  //     if (observerRef.current) {
  //       observer.unobserve(observerRef.current);
  //     }
  //   };
  //  }, [isLoading]);
  
  
  // useEffect(() => {
  //   if (!isIntersecting && !isLoading) {
  //     fetchMoreTweets();
  //   }
  // }, [isIntersecting, isLoading]);

 
//useEffect to load the currentUser info
  
  useEffect(() => {
    axios.get(`https://twitter-clone-server-nu.vercel.app/api/users/${cookies.user}`)
      .then((res: any) => setCurrentUser(res.data)).catch((err: any) => console.log(err))
  }, [cookies.user])
  
  
  //useEffect to load all registered users
  useEffect(() => {
    axios.get(`https://twitter-clone-server-nu.vercel.app/api/users`)
      .then((res: any) => setSuggestedUsers(res.data)).catch((err: any) => console.log(err))
  }, [])

  
  //function to get all bookmarks of the currentUser
  const getUserBookmarks = async (param: any) => {
    const res = await axios.get(`https://twitter-clone-server-nu.vercel.app/api/bookmarks/get-bookmark/${param}`)
    setBookmarks(res.data)
  }

  //This useEffect would run when currentUser?._id gets a value
  useEffect(() => {
    if (isAuth) {
      getUserBookmarks(currentUser?._id)
    } else {
      console.log("no user")
    }
  }, [currentUser?._id])

  const [noOfFollowing, setNoOfFollowing] = useState(currentUser?.following?.length);
  
    const [notifications, setNotifications] = useState<any>();
  

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  }

  //Reducer to manage chats
  //This reducer helps keep track of the chats, so if the currentUse Id is greater it know whose chats to load
  const chatReducer = (state: any, action: any) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: currentUser?._id > action.payload.uid ?
            currentUser?._id + action.payload.uid
            : action.payload.uid + currentUser?._id
        }
      default:
        return state;
    }
  }  

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  
  

    return (
      <AppContext.Provider value={{
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
        // isIntersecting,
      }}>
        <ChatContext.Provider value={{ data: state, dispatch }} >
          <GlobalStyle />
          <Component {...pageProps} />
        </ChatContext.Provider>
      </AppContext.Provider>
    );
  }
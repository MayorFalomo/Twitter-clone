import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import ForYouPosts from "@/components/foryouposts/ForYouPosts";
import FollowersPosts from "@/components/followerspost/FollowersPosts";
import { HomeContainer } from "@/styles/Home.styled";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/search/Search";
import Trends from "@/components/trends/Trends";
import Tweets from "@/components/foryouposts/posts/Tweets";
import { GetStaticProps } from "next";
import { AppContext } from "@/helpers/Helpers";
import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";



type Post = {
  username: string,
}

// export const getStaticProps: GetStaticProps<{posts: Post[]}> = async(context) => {
//   const res = await fetch(`http://localhost:7000/api/tweets`)
//   const posts: Post[] = await res.json()
  
//   return { props: { posts } };
// };

//*THIS IS THE HOMEPAGE, IT'S WHAT YOU'RE GOING TO SEE FIRST WHEN YOU LOGIN
//*THIS WAS WHERE NEXT DEFINED ALL THEIR OWN PAGE
export default function Home(props: any) {
  
  const router = useRouter()
  const { currentUser } = useContext(AppContext)
  const [current, setCurrent] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  const handleClick = (param: boolean) => {
    setCurrent(param);
    setActive(!active);
  };

  // const {posts} = useContext(AppContext)

  // console.log(posts, "all the index");
  

  // console.log(current, "current");
      
      //   }
      // }
  


      return (
        <HomeContainer>
          <Head>
            <title>Twitter-clone</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="mainHomePage" >
            <Navbar />
            <main>
              <div className="homeHeader">
                <div className="homeHeading">
                  <h1 >Home </h1>
                </div>
                <div className="mobileHeader" >
                  <div style={{ backgroundImage: `url(${currentUser?.profilePic})` }} className="profilePicHeader" > </div>
                  <p><BsTwitter className='loginLogo' style={{ color: ' #1d9aef' }} /></p>
                </div>
                <ul className="postGroup" >
                  <a
                    className={active ? "linkActive" : "link"}
                    onClick={() => handleClick(false)}
                  >
                    <li> For you </li>
                  </a>
                  <a
                    className={!active ? "linkActive" : "link"}
                    onClick={() => handleClick(true)}
                  >
                    <li> Following </li>
                  </a>
                </ul>
              </div>
              <div className="centerGrid" >
                {current == true ? <div><FollowersPosts /></div> : <div>
                  <ForYouPosts />
                  <Tweets />
                </div>}
              </div>
            </main>
            <div className="trendsContainer" >
              <Search />
              <Trends />
            </div>
          </div>
        </HomeContainer>
      );
    }
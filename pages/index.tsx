import Head from "next/head";
import { useContext, useEffect, useState} from "react";
import ForYouPosts from "@/components/foryouposts/ForYouPosts";
import FollowersPosts from "@/components/followerspost/FollowersPosts";
import { HomeContainer } from "@/styles/Home.styled";
import Navbar from "@/components/navbar/Navbar";
import Search from "@/components/search/Search";
import Trends from "@/components/trends/Trends";
import Tweets from "@/components/foryouposts/posts/Tweets";
import { AppContext } from "@/helpers/Helpers";
import { useRouter } from "next/router";
import { BsStars, BsTwitter } from "react-icons/bs";
import MobileNav from "@/components/mobilenav/MobileNav";
import Navigation from "@/components/navigation/Navigation";
import Preload from "@/components/preload/Preload";


//*THIS IS THE HOMEPAGE, IT'S WHAT YOU'RE GOING TO SEE FIRST WHEN YOU LOGIN
//*THIS WAS WHERE NEXT DEFINED ALL THEIR OWN PAGE
export default function Home(props: any) {
  
  const { currentUser, navigation, setNavigation, isLoading, isIntersecting} = useContext(AppContext)

  const router = useRouter()
  
  const [current, setCurrent] = useState<number>(0);
  // const [active, setActive] = useState<boolean>(false);
  // const [mobileNavCon, setMobileNav] = useState<boolean>(false);
  // const [show, setShow] = useState<boolean>(true);
  const [isPreload, setIsPreload] = useState<boolean>(false);

  const handleClick = (param: any) => {
    setCurrent(param);
  };

  const handleOpenNavigation = () => {
    setNavigation(true)
  }

  useEffect(() => {
setIsPreload(true);
    setTimeout(() => {
      setIsPreload(false)
    }, 2000)
  }, [])  
  
  
      return (
        <HomeContainer>
          <Head>
            <title>Tweeks - A Twitter-clone</title>
            <meta name="description" content="Tweets" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
          </Head>
          {
            isLoading && isIntersecting ? <Preload /> :
            <div className="mainHomePage" >
              <Navbar />
              <main>
                <div className="homeHeader">
                  <div className="homeHeading">
                    <h1 >Home </h1>
                  </div>
                  <div className={`mobileHeader`} >
                    <div onClick={handleOpenNavigation} style={{ backgroundImage: `url(${currentUser?.profilePic})` }} className="profilePicHeader" > </div>
                    <p><BsTwitter className='hiddenloginLogo' style={{ color: ' #1d9aef' }} /></p>
                    <p><BsTwitter className='loginLogo' style={{ color: ' #1d9aef' }} /></p>
                    <p><BsStars className='loginLogo' style={{ color: ' #1d9aef' }} /></p>
                    <div className={navigation ? 'openNavigation' : "closedNavigation"} ><Navigation /></div>
                  </div>
                  <ul className="postGroup" >
                    <a
                      className={current == 0 ? "linkActive" : "link"}
                      onClick={() => handleClick(0)}
                    >
                      <li> For you </li>
                    </a>
                    <a
                      className={current == 1 ? "linkActive" : "link"}
                      onClick={() => handleClick(1)}
                    >
                      <li> Following </li>
                    </a>
                  </ul>
                </div>
                <div className="centerGrid" >
                  {current == 1 ? <div><FollowersPosts /></div> : <div>
                    <ForYouPosts />
                    <Tweets />
                  </div>}
                </div>
              </main>
              <div className="trendsContainer" >
                <Search />
                <Trends />
              </div>
              <div className="mobileNav" > <MobileNav /></div>
          </div>}
        </HomeContainer>
      );
    }
import React, { useContext, useEffect, useState } from "react";
import { NavContainer } from "./Navbar.styled";
import { RiHome7Line, RiQuillPenFill } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { RiHashtag } from "react-icons/ri";
import { BiBell, BiDotsHorizontalRounded } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineEllipsisHorizontalCircle } from "react-icons/hi2";
import { RiQuillPenLine } from "react-icons/ri";
import Link from "next/link";
import { useCookies } from "react-cookie";
import axios from "axios";
import { AppContext } from "@/helpers/Helpers";

type Props = {};

const Navbar = (props: any) => {

  const { currentUser, twitterBlue, setTwitterBlue } = useContext(AppContext)
  
  const [cookies, setCookies] = useCookies(["user"])
  const [tweeterUser, setTweeterUser] = useState<any>([])

  
  return (
    <NavContainer>
      <nav>
        <div className="navContainer">
          <div className="subNavContainer">
            <div className="logoContainer">
              <span className="twitterLogo">{<TfiTwitter />} </span>
            </div>
            <ul>
              <Link href='/' ><li>
                <div className="navLinkItems">
                {<RiHome7Line className="navIcon"  />}
                  <span>Home </span>
                  </div>
              </li></Link>
              <Link href='/explore' ><li>
                <div  className="navLinkItems" >
                <RiHashtag className="navIcon"  />
                  <span>Explore</span>
                  </div>
              </li></Link>
              <Link href='/notifications' ><li>
                <div className="navLinkItems">
                <BiBell className="navIcon" />
                  <span>Notifications </span>
                  </div>
              </li></Link>
              <Link href='/messages' ><li>
                <div className="navLinkItems">
                <RxEnvelopeClosed className="navIcon" />
                  <span>Messages </span>
                  </div>
              </li></Link>
              <Link href='/bookmarks' ><li>
                <div className="navLinkItems" >
                <IoBookmarkOutline className="navIcon" />
                  <span>Bookmarks </span>
                  </div>
              </li></Link>
              <li>
                <div onClick={() => setTwitterBlue(true)} className="navLinkItems">
                <AiFillTwitterSquare className="navIcon" />
                  <span>Twitter Blue </span>
                  </div>
              </li>
              <Link href='/profile' ><li>
                <div className="navLinkItems">
                <BsPersonFill className="navIcon" />
                  <span>Profile </span>
                  </div>
              </li></Link>
              <li>
                <div className="navLinkItems">
                <HiOutlineEllipsisHorizontalCircle className="navIcon" />
                  <span>More </span>
                  </div>
                {/* <div className="navLinkItems">
                <RiQuillPenLine className="tweetIconBtn" />
                  <span>More </span>
                  </div> */}
              </li>

              <button className="tweetBtn">Tweet </button>
              <div className="quill" ><p className="tweetIconBtn" >{<RiQuillPenLine style={{ background: '#1d9aef', padding: "10px 10px", fontSize: 50, borderRadius: "50px"}} />} </p></div>
            </ul>
          </div>
          <div className="navProfileFlex" >
          <div className="navProfile">
            <Link href="/profile" style={{backgroundImage: `url(${currentUser?.profilePic})`}} className="bgImg"></Link>
            <div className="navSubProfile">
              <div className="navUsername" style={{ fontSize: 22 }}>
                <Link href="/profile" >{currentUser?.username}</Link>
              </div>
              <div
                className="navEmail"
                style={{ fontSize: 22, }}
              >
                {currentUser?.usersAt}
              </div>
              </div>
            </div>
            <div className="logOutIcon" >{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
            </div>
        </div>
        {/* <div onClick={() => setT(false)} className={overlay ? "overlay" : ""} > </div> */}
      </nav>
    </NavContainer>
  );
};

export default Navbar;

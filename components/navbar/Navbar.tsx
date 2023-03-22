import React from "react";
import { NavContainer } from "./Navbar.styled";
import { RiHome7Line } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { RiHashtag } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoBookmarkOutline } from "react-icons/io5";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineEllipsisHorizontalCircle } from "react-icons/hi2";
import { RiQuillPenLine } from "react-icons/ri";
import Link from "next/link";

type Props = {};

const Navbar = (props: any) => {
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
              <Link href='./explore' ><li>
                <div  className="navLinkItems" >
                <RiHashtag className="navIcon"  />
                  <span>Explore</span>
                  </div>
              </li></Link>
              <Link href='./notifications' ><li>
                <div className="navLinkItems">
                <BiBell className="navIcon" />
                  <span>Notifications </span>
                  </div>
              </li></Link>
              <Link href='messages' ><li>
                <div className="navLinkItems">
                <RxEnvelopeClosed className="navIcon" />
                  <span>Messages </span>
                  </div>
              </li></Link>
              <Link href='bookmarks' ><li>
                <div className="navLinkItems" >
                <IoBookmarkOutline className="navIcon" />
                  <span>Bookmarks </span>
                  </div>
              </li></Link>
              <li>
                <div className="navLinkItems">
                <AiFillTwitterSquare className="navIcon" />
                  <span>Twitter Blue </span>
                  </div>
              </li>
              <Link href='./profile' ><li>
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
              </li>

                <button className="tweetBtn">Tweet </button>
            </ul>
          </div>
          <div className="navProfile">
            <div className="bgImg"></div>
            <div className="navSubProfile">
              <div className="navUsername" style={{ fontSize: 22 }}>
                i am Taveren{" "}
              </div>
              <div
                className="navEmail"
                style={{ fontSize: 22, color: "rgb()" }}
              >
                @mayorfalomo1{" "}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </NavContainer>
  );
};

export default Navbar;

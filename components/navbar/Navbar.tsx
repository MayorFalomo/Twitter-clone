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
              <li>
                <span>{<RiHome7Line />} </span>
                <a>Home </a>
              </li>
              <li>
                <span>{<RiHashtag />} </span>
                <a>Explore</a>
              </li>
              <li>
                <span>{<BiBell />} </span>
                <a>Notifications </a>
              </li>
              <li>
                <span>{<RxEnvelopeClosed />} </span>
                <a>Messages </a>
              </li>
              <li>
                <span>{<IoBookmarkOutline />} </span>
                <a>Bookmarks </a>
              </li>
              <li>
                <span>{<AiFillTwitterSquare />} </span>
                <a>Twitter Blue </a>
              </li>
              <li>
                <span>{<BsPersonFill />} </span>
                <a>Profile </a>
              </li>
              <li>
                <span>{<HiOutlineEllipsisHorizontalCircle />} </span>
                <a>More </a>
              </li>

              <li>
                <a className="writeTweet">{<RiQuillPenLine />} </a>
                <a className="tweetBtn">Tweet </a>
              </li>
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

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
                <a>
                {<RiHome7Line className="navIcon"  />}
                  <span>Home </span>
                  </a>
              </li>
              <li>
                <a>
                <RiHashtag className="navIcon"  />
                  <span>Explore</span>
                  </a>
              </li>
              <li>
                <a>
                <BiBell className="navIcon" />
                  <span>Notifications </span>
                  </a>
              </li>
              <li>
                <a>
                <RxEnvelopeClosed className="navIcon" />
                  <span>Messages </span>
                  </a>
              </li>
              <li>
                <a>
                <IoBookmarkOutline className="navIcon" />
                  <span>Bookmarks </span>
                  </a>
              </li>
              <li>
                <a>
                <AiFillTwitterSquare className="navIcon" />
                  <span>Twitter Blue </span>
                  </a>
              </li>
              <li>
                <a>
                <BsPersonFill className="navIcon" />
                  <span>Profile </span>
                  </a>
              </li>
              <li>
                <a>
                <HiOutlineEllipsisHorizontalCircle className="navIcon" />
                  <span>More </span>
                  </a>
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

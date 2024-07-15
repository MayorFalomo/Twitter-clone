import React, { useContext, useEffect, useState } from "react";
import { NavContainer } from "./Navbar.styled";
import { RiHome7Line } from "react-icons/ri";
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
import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase-config";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Navbar = (props: any) => {
  const {
    currentUser,
    setCurrentUser,
    twitterBlue,
    setTwitterBlue,
    notifications,
    setCommentModal,
  } = useContext(AppContext);
  const router = useRouter();
  const currentRoute = router.pathname;

  const [logOut, setLogOut] = useState<boolean>(false);
  const [lengthOfNotification, setLengthOfNotification] = useState([]);

  //Function to handle Log out
  const handleLogOut = async () => {
    await signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .then(() => router.push("/login"))
      .catch((err) => {
        console.log(err, "Error Logging out user");
      });
  };

  //Function to handle LogOut
  const handleActive = () => {
    if (logOut) {
      setLogOut(false);
    } else {
      setLogOut(true);
    }
  };

  //useEffect to check the present Length of notifications
  useEffect(() => {
    const notify = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/${currentUser?._id}/get-notifications`
        )
        .then((res: any) => setLengthOfNotification(res.data))
        .catch((err) => console.log("No new Notifications"));
    };
    if (currentUser) {
      notify();
    }
  }, [currentUser?._id]);

  return (
    <NavContainer>
      <AnimatePresence>
        <motion.nav>
          <div className="navContainer">
            <div className="subNavContainer">
              <div className="logoContainer">
                <span className="twitterLogo">{<TfiTwitter />} </span>
              </div>
              <ul>
                <Link href="/">
                  <li>
                    <div className="navLinkItems">
                      {<RiHome7Line className="navIcon" />}
                      <span className="links">Home </span>
                    </div>
                  </li>
                </Link>
                <Link href="/trending">
                  <li>
                    <div className="navLinkItems">
                      <RiHashtag className="navIcon" />
                      <span className="links">Explore</span>
                    </div>
                  </li>
                </Link>
                <Link href="/notifications">
                  <li>
                    <div className="navLinkItems">
                      <BiBell className="navIcon" />
                      <span className="noOfNotifications">
                        {" "}
                        {lengthOfNotification.length}{" "}
                      </span>
                      {/* <span className="noOfNotifications" > {currentUser?.notifications?.length  > 0 ? notifications?.length || currentUser?.notifications?.length : "" } </span> */}
                      <span className="links">Notifications </span>
                    </div>
                  </li>
                </Link>
                <Link href="/messages">
                  <li>
                    <div className="navLinkItems">
                      <RxEnvelopeClosed className="navIcon" />
                      <span className="links">Messages </span>
                    </div>
                  </li>
                </Link>
                <Link href="/bookmarks">
                  <li>
                    <div className="navLinkItems">
                      <IoBookmarkOutline className="navIcon" />
                      <span className="links">Bookmarks </span>
                    </div>
                  </li>
                </Link>
                <li>
                  <div
                    onClick={() => setTwitterBlue(true)}
                    className="navLinkItems"
                  >
                    <AiFillTwitterSquare className="navIcon" />
                    <span className="links">Twitter Blue </span>
                  </div>
                </li>
                <Link href="/profile">
                  <li>
                    <div className="navLinkItems">
                      <BsPersonFill className="navIcon" />
                      <span className="links">Profile </span>
                    </div>
                  </li>
                </Link>
                {/* <Link href="/more"> */}
                <li>
                  <div className="navLinkItems">
                    <HiOutlineEllipsisHorizontalCircle className="navIcon" />
                    <span className="links">More </span>
                  </div>
                </li>
                {/* </Link> */}

                <button className="tweetBtn">Tweet </button>
                <div className="quill">
                  <p className="tweetIconBtn">
                    {
                      <RiQuillPenLine
                        style={{
                          background: "#1d9aef",
                          padding: "10px 10px",
                          fontSize: 50,
                          borderRadius: "50px",
                        }}
                      />
                    }{" "}
                  </p>
                </div>
              </ul>
            </div>
            <div onClick={handleActive} className="navProfileFlex">
              <div className="navProfile">
                <div
                  style={{ backgroundImage: `url(${currentUser?.profilePic})` }}
                  className="bgImg"
                ></div>
                <div className="navSubProfile">
                  <div className="navUsername" style={{ fontSize: 22 }}>
                    <p>{currentUser?.username}</p>
                  </div>
                  <div className="navEmail" style={{ fontSize: 22 }}>
                    {currentUser?.usersAt}
                  </div>
                </div>
              </div>
              <div className="logOutIcon">
                {<BiDotsHorizontalRounded fontSize="30px" cursor="pointer" />}
              </div>
              {logOut ? (
                <div onClick={handleLogOut} className="logOutCon">
                  <span>Log out {currentUser?.usersAt} </span>{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {/* <div onClick={() => setT(false)} className={overlay ? "overlay" : ""} > </div> */}
        </motion.nav>
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { LoginContainer } from "@/styles/Login.styled";
import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { AppContext } from "../helpers/Helpers";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const Login = (props: any) => {
  const router = useRouter();

  const { getCurrentUser } = useContext(AppContext);
  const [cookie, setCookie] = useCookies(["user"]);
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async (res) => {
        setCookie("user", res.user.uid, { path: "/" });
        console.log(res.user.uid, "res user uid");

        let userInfo = {
          userId: res.user.uid,
        };

        await axios
          .post(
            "https://twitter-clone-server-nu.vercel.app/api/users/login",
            userInfo
          )
          .then(() => router.push("/"))
          .then(async () => await getCurrentUser(res.user.uid))
          .catch((err) => err && setIsAuth(true));
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setCookie("user", res.user.uid, { path: "/" });
      })
      .then(() => router.push("/"))
      // .then(() => window.location.reload())
      .catch(() => setIsAuth(true));
  };

  return (
    <LoginContainer>
      <AnimatePresence>
        <motion.div
          className="LoginPageContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="subLoginPage">
            <IoMdClose className="letterX" />
            <BsTwitter
              className="loginLogo"
              style={{ color: " #1d9aef", fontSize: "40px" }}
            />
            <h1>Sign In to Twitter </h1>
            <button onClick={signInWithGoogle} className="googleBtn">
              {" "}
              <FcGoogle size={30} /> Sign In With Google{" "}
            </button>
            <div className="orBars">
              <span className="leftBar"></span>
              <p>or</p>
              <span className="rightBar"></span>
            </div>
            <form onSubmit={handleLogin}>
              <input
                className="Input"
                type="text"
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
              <input
                className="Input"
                type="text"
                onChange={(e: any) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
              <div className="loginFlexBtn">
                <button
                  className="LoginSignInBtn"
                  style={{ backgroundColor: "black", color: "white" }}
                  id="nextBtn"
                >
                  Sign In{" "}
                </button>
                {isAuth ? <span>Check email and password again!</span> : ""}
              </div>
              <p>
                Don't have an account?{" "}
                <Link href="register">
                  <span style={{ color: "#1d9aef", cursor: "pointer" }}>
                    Sign up
                  </span>
                </Link>{" "}
              </p>
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </LoginContainer>
  );
};

export default Login;

import { RegisterContainer } from '@/styles/Register.styled'
import React, { useState, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import {auth, provider} from '../firebase-config'
import { BsTwitter } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { IoMdClose } from 'react-icons/io'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { AppContext } from '@/helpers/Helpers'
import Link from 'next/link'


type Props = {}

const register = (props: any) => {

  const router = useRouter()

  const {getCurrentUser} = useContext(AppContext)
  const [email, setEmail] = useState<string>("")
  const [userNames, setUserName] = useState<string>("")
  const [passwords, setPasswords] = useState<string>("")
  const [cookies, setCookie] = useCookies(["user"])
  const [name, setName] = useState("")

  //Sign In With Google
   const signInWithGoogle = async () => {
        signInWithPopup(auth, provider).then((res) => {
            setCookie("user", res.user.uid, { path: "/" })
            console.log(res.user);
            
            let userInfo = {
            userId: res.user.uid,
            username:  res.user.displayName,
            email: res.user.email,
            profilePic: res.user.photoURL,
            coverPhoto: "https://www.whoa.in/201604-Whoa/be-you-be-unique-facebook-cover-pictures.jpg",
            password: "123456",
            usersAt: `@${res.user.displayName}`,
            following: [],
            followers: [],
            notifications: [],
            bio: "Regular Human",
            }
            axios.post("http://localhost:7000/api/users/register", userInfo).catch((err) => { console.log(err) })
                    getCurrentUser(res.user.uid)
        }).then(() =>
            router.push("/")
     ).then(() => window.location.reload()).catch((err) => console.log(err))
  }
  

//Sign up by creating account
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, passwords).then((res) => {
      setCookie("user", res.user.uid, { path: "/" })
      
      const userInfo = {
        userId: res.user.uid,
        username: userNames,
        email: email,
        password: passwords,
        profilePic: "https://i.pinimg.com/564x/33/f4/d8/33f4d8c6de4d69b21652512cbc30bb05.jpg",
        coverPhoto: "https://www.whoa.in/201604-Whoa/be-you-be-unique-facebook-cover-pictures.jpg",
        usersAt: `@${userNames}`,
        following: [],
        followers: [],
        notifications: [],
        bio: "Regular Human",
      }
      axios.post("http://localhost:7000/api/users/register", userInfo).then(() =>
        router.push("/")        
      ).then(() =>
        window.location.reload()
      ).catch((err) => { console.log(err) })
      getCurrentUser(res.user.uid)
            console.log(res.user.uid, "This is submit res");
    }).catch((err) => console.log(err))
  }

  const getRandomEmail = () => {
    if (name.length > 0) {
      setEmail(name + "@fake.com")
    } else {
      axios.get("https://random-word-api.herokuapp.com/word")
        .then((res) => setEmail(res.data[0] + "@fake.com"))
        .catch((err) => console.log(err))
    }
  }

  const getRandomName = () => {
    if (email.includes("@fake.com")) {
      setUserName(email.split("@")[0])
    } else {
      axios.get("https://random-word-api.herokuapp.com/word")
        .then((res) => setUserName(res.data[0]))
        .catch((err) => console.log(err))
    }
  }

  const getRandomPassword = () => {
    let passNum = ""
    let passChar = ""

    for (let i = 0; i < 10; i++) {
      passNum += Math.floor(Math.random() * 10)
    }
    for (let i = 0; i < 10; i++) {
      passChar += String.fromCharCode(Math.floor(Math.random() * 28) + 98)
    }

    let result = Array.from(passNum.length > passChar.length ? passNum : passChar,
      (_, i) => (passNum[i] || "") + (passChar[i] || "")).join("")
    return result;
  }
   
   
 
  return (
    <RegisterContainer>
    <div>
       <div className='signUpPageContainer' >
                <div className='subLoginPage' >
                    <IoMdClose className='letterX' />
          <BsTwitter className='loginLogo' style={{color: ' #1d9aef', fontSize: '40px'}} />
          <h1>Join Twitter Today</h1>
          <button onClick={signInWithGoogle} className='googleBtn' > <FcGoogle size={30}  /> Sign In With Google </button>
          <div className='orBars' >
              <span className='leftBar' ></span>
              <p>or</p>
              <span className='rightBar' ></span>
          </div>
            <form onSubmit={(e) => handleSubmit(e)} >
              <div className='flex-Center' >
                <input className='Input' type="text" value={email} onChange={(e: any) => setEmail(e.target.value)} placeholder="Enter Email" />
                <div onClick={getRandomEmail}  className='generateBtn'>generate email </div>
              </div>
              <div className='flex-Center' >
                <input className='Input' type="text" value={userNames} onChange={(e: any) => setUserName(e.target.value)} placeholder="Enter username" />
                <div onClick={getRandomName} className='generateBtn' >generate username </div>
              </div>
              <div className='flex-Center' >
                <input className='Input' type="text" value={passwords} onChange={(e: any) => setPasswords(e.target.value)} placeholder="Enter Password" />
                <div  className='generateBtn' onClick={() => setPasswords(getRandomPassword())} >generate password </div>
              </div>
              <div className='loginFlexBtn'  >
                  <button type='submit' className='LoginSignInBtn' style={{backgroundColor: 'black', color: 'white'}} id='nextBtn' >Create account </button>
                  {/* <button className='LoginSignInBtn' id='backgroundHover' >  Forgot Password? </button> */}
              </div>
              <p>Have an account already?<Link href='login' ><span style={{color: '#1d9aef', cursor: 'pointer' }} >Log in</span></Link> </p>
                    </form>
                    </div>
                    </div>
      </div>
      </RegisterContainer>
  )
}

export default register
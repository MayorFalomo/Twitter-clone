import React, {useContext, useState} from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import {auth, provider} from '../firebase-config'
import { AppContext } from '../helpers/Helpers'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import {FcGoogle} from 'react-icons/fc'
import axios from 'axios'
import { BsTwitter } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { LoginContainer } from '@/styles/Login.styled'
import Link from 'next/link'


type Props = {}


const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const login = (props: any) => {

    const router = useRouter()

    const { getCurrentUser } = useContext(AppContext)
    const [cookie, setCookie] = useCookies(["user"])
    const [email, setEmail] = useState<any>("")
    const [password, setPassword] = useState<any>("")
    const [isAuth, setIsAuth] = useState<any>(false)

    
    const signInWithGoogle = async () => {
        signInWithPopup(auth, provider).then((res) => {
            setCookie("user", res.user.uid, { path: "/" })
            
            let userInfo = {
            userId: res.user.uid,
            username:  res.user.displayName,
            email: res.user.email,
            profilePic: res.user.photoURL,
            coverPhoto: "https://blog.contentstudio.io/wp-content/uploads/2022/04/twitter-header.jpg",
            password: "12345",
            usersAt: `@${res.user.displayName}`,
            following: [],
            followers: [],
            notifications: [],
            bio: "Regular Human",
            location: "Lagos, Nigeria",
            birthday: "April 19th, 1999",
            links: "https://mayowa-falomo.netlify.app"

            }
            axios.post("http://localhost:7000/api/users/login", userInfo).catch((err) => { console.log(err) })
                    getCurrentUser(res.user.uid)
        }).then(() => router.push("/")).then(() =>
            window.location.reload()
        ).catch((err) => console.log(err))
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((res) => {
            setCookie("user", res.user.uid, { path: "/" })
        }).then(() => router.push("/") ).then(() =>
            window.location.reload()
        ).catch((err) => setIsAuth(true)
        )
    }
    return (
      <LoginContainer>
            <div className='LoginPageContainer' >
                <div className='subLoginPage' >
                    <IoMdClose className='letterX' />
          <BsTwitter className='loginLogo' style={{color: ' #1d9aef', fontSize: '40px'}} />
          <h1>Sign In to Twitter </h1>
          <button onClick={signInWithGoogle} className='googleBtn' > <FcGoogle size={30}  /> Sign In With Google </button>
          <div className='orBars' >
              <span className='leftBar' ></span>
              <p>or</p>
              <span className='rightBar' ></span>
          </div>
          <form onSubmit={handleLogin} >
              <input className='Input' type="text" onChange={(e: any) => setEmail(e.target.value)} placeholder="Enter Email" />
              <input className='Input' type="text" onChange={(e:any) => setPassword(e.target.value)} placeholder="Enter Password" />
              <div className='loginFlexBtn'  >
                  <button className='LoginSignInBtn' style={{backgroundColor: 'black', color: 'white'}} id='nextBtn' >Sign In </button>
                            { isAuth ? <p>Check email and password again!</p> : "" }
              </div>
              <p>Don't have an account? <Link href='register' ><span style={{color: '#1d9aef', cursor: 'pointer' }} >Sign up</span></Link> </p>
                    </form>
                    </div>
                    </div>
            </LoginContainer>
  )
}

export default login
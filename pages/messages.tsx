/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from '@/components/navbar/Navbar'
import { db } from '../firebase-config'
import { AppContext } from '@/helpers/Helpers'
import { MessagesStyle } from '@/styles/Messages.styled'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where ,} from 'firebase/firestore'
import Link from 'next/link'
import React,{useContext, useState} from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsEnvelopePlus } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import Chats from '@/components/chats/Chats'
import Chat from '@/components/chat/Chat'
import { ChatContext } from '@/helpers/ChatContext'
import MobileNav from '@/components/mobilenav/MobileNav'

type Props = {}

const messages = (props: any) => {

  const { currentUser, suggestedUsers } = useContext(AppContext)
  const {dispatch} = useContext(ChatContext)

  const [username, setUsername] = useState<string>("")
  const [user, setUser] = useState<any>(null)
  const [err, setErr] = useState(false)
  const [chatComponentActive, setChatComponentActive] = useState<any>(false)
  const [switchToChats, setSwitchToChats] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState(false)

  //This serach function works well
  const handleSearch = async () => {
    const q = query(collection(db, "users"),
      where("username", "==", username));
   try{ 
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc: any) => {
        setUser(doc.data())
        // console.log(user);    
      })
    } catch (err) {
      setErr(true)
    }
  }

  //This function works well too
  const handleKey = (e: any) => {
    e.code === "Enter" && handleSearch() 
    setChatComponentActive(true)
  }

  const handleSelect = async () => {
    
    //Check whether the group exists or not(inside chats in firestore), If not create one
    const combinedId = currentUser._id > user.uid ?
      currentUser._id + user.uid
      : user.uid + currentUser._id;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //Create chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        
        //Create user chats
        await updateDoc(doc(db, "userChats", currentUser._id), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            username: user.username,
            profilePic: user.profilePic,
            usersAt: user.usersAt,
          },
          [combinedId + ".date"]: serverTimestamp(),
        })
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser._id,
            username: currentUser.username,
            profilePic: currentUser.profilePic,
            usersAt: currentUser.usersAt,
          },
          [combinedId + ".date"]: serverTimestamp()
        })
      }
      // await dispatch({ type: "CHANGE_USER", payload: u })
      // console.log(dispatch({ type: "CHANGE_USER", payload: u }), "dispatch");
      
    } catch (err) {
      console.log(err);
    }
   
    setUser(null);
    setUsername("")
  }

  // console.log(user, "this is users state");
  // console.log(currentUser);
  
  
  return (
    <MessagesStyle>
      <div className={isMobile ? 'ChatActive' : "messagesContainer"} >
      <Navbar />
      <div className='centerGridContainer' >
        <header>
          <h1>Messages </h1>
          <div className='messageIcon' >
            <span>{<AiOutlineSetting fontSize='30px' opacity={0.3} />} </span>
            <span>{<BsEnvelopePlus  fontSize='30px' opacity={0.3} />} </span>
          </div>
        </header>
        <div className='inputContainer' >
          <input type='text' onKeyDown={handleKey} value={username} onChange={(e:any) => setUsername(e.target.value) }placeholder='Search Direct Messages' className='searchInput' />
          </div>
          {err && <p style={{ marginTop: 20}} > Error USER NOT FOUND</p> }
          {user && <div onClick={handleSelect } className="userChat">
            <div style={{ backgroundImage: `url(${user.profilePic})` }} className='profilePic' > </div>
            <div>
              <span>{user?.username} </span>
              <span>{user?.usersAt} </span>
              <span></span>
            </div>
          </div>}
          <Chats isMobile={isMobile} setIsMobile={setIsMobile} setChatComponentActive={setChatComponentActive} />
          </div>
        <div className='leftGrid' >
         
          {chatComponentActive ? <div ><Chat isMobile={isMobile} setIsMobile={setIsMobile} /></div> :
            <div className='subLeftGrid' >
              <div  className='subLeft'>
              <h1>Select a message </h1>
              <p>Choose from your existing conversations, start a new one, or just keep swimming. </p>
                <Link href="" ><button onClick={() => setChatComponentActive(true)} className='newMessageBtn'>New message</button> </Link>
                </div>
            </div>}
        </div>
          <div className="mobileNav" > <MobileNav/></div>
      </div>
    </MessagesStyle>
  )
}

export default messages
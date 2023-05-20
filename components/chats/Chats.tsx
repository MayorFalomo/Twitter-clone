import { db } from '@/firebase-config'
import { AppContext } from '@/helpers/Helpers'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Chatstyled } from './Chats.styled'
import { ChatContext } from '@/helpers/ChatContext'

interface Chat {
  date: any
  userInfo: {
    uid: string;
    username: string;
      profilePicture: string;
    date: {
      seconds: number;
      nanoseconds: number;
    };
  };
  lastMessage: {
    texts: string;
    date: {
      seconds: number;
      nanoseconds: number;
    };
  };
}

//Parent component is messages.tsx page
const Chats = (props: any) => {

    const { currentUser } = useContext(AppContext)
    const { dispatch } = useContext(ChatContext)    

    const [chats, setChats] = useState<Chat[]>([])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser._id), (doc) => {
            setChats(doc.data() as Chat[])
        })
        return () => {
            unsub();
        }
    }
    currentUser?._id && getChats();
}, [currentUser._id])
    
    const handleSelect = (u: any) => {
        props.setChatComponentActive(true)
        dispatch({ type: "CHANGE_USER", payload: u })
        console.log(dispatch({ type: "CHANGE_USER", payload: u }), "dispatch");
        if (window.innerWidth < 1000) {
            props.setIsMobile(true)
            console.log(props.isMobile, "isMOBILE")
        } else {
            setIsMobile(false)
        }
    }    
    
    return (
      <Chatstyled>
      <div className='chatsContainer' >
          {Object?.entries(chats)?.sort((a, b) => b[1].date - a[1].date )?.map((chat: any) => (
              <div className="allUsersChat" style={{cursor: "pointer", }} key={chat[0]} onClick={() =>  handleSelect(chat[1].userInfo)} >
                  <div style={{backgroundImage: `url${chat[1].userInfo.profilePicture} `}} className='profilePic' > </div>
                  <div className='chatHeadingCon' >
                      <h2>{chat[1].userInfo.username} </h2>
                      <span>{chat[1].userInfo?.usersAt} </span>
                      <p>{chat[1].lastMessage?.texts?.slice(0, 50)}... </p>
                </div>
              </div>
          ))}
              
            </div>
            </Chatstyled>
  )
}

export default Chats
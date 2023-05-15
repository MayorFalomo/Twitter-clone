import { db } from '@/firebase-config'
import { AppContext } from '@/helpers/Helpers'
import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Chatstyled } from './Chats.styled'
import { ChatContext } from '@/helpers/ChatContext'

type Props = {}

const Chats = (props: any) => {

    const { currentUser } = useContext(AppContext)
    const { dispatch } = useContext(ChatContext)
    
    // console.log(dispatch, "dispatching");
    

    const [chats, setChats] = useState<any>([])

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser._id), (doc) => {
            setChats(doc.data())
        })
        return () => {
            unsub();
        }
    }
    currentUser?._id && getChats();
}, [currentUser._id])

    // Object.entries(chats).map((chat) => (
    // console.log(chat[1], "chat[1")
    // ));
    
    const handleSelect = (u:any) => {
        dispatch({ type: "CHANGE_USER", payload: u })
        console.log(dispatch({ type: "CHANGE_USER", payload: u}), "dispatch");
    }

    // console.log(currentUser._id, "users chats");
    
    
    return (
      <Chatstyled>
      <div className='chatsContainer' >
          {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date )?.map((chat: any) => (
              <div className="allUsersChat" style={{cursor: "pointer", }} key={chat[0]} onClick={() =>  handleSelect(chat[1].userInfo)} >
                  <div style={{backgroundImage: `url${chat[1].userInfo.profilePicture} `}} className='profilePic' > </div>
                  <div className='chatHeadingCon' >
                      <h3>{chat[1].userInfo.username} </h3>
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
/* eslint-disable react-hooks/exhaustive-deps */
import { ChatContext } from '@/helpers/ChatContext'
import React, { useContext, useEffect, useState } from 'react'
import { ChatStyled } from './Chat.styled';
import { Timestamp, arrayUnion, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import Message from '../message/Message';
import { BsCardImage, BsEmojiSmile, BsEmojiSmileUpsideDown } from 'react-icons/bs';
import { AiOutlineFileGif, AiOutlineSend } from 'react-icons/ai';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import { AppContext } from '@/helpers/Helpers';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { IoInformationCircleOutline } from 'react-icons/io5';
import moment from 'moment';
import EmojiPicker from 'emoji-picker-react';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';


type Props = {}

const Chat = (props: any) => {

    const {currentUser} = useContext(AppContext)
    const { data } = useContext(ChatContext);

    const [messages, setMessages] = useState<any>([])
    const [texts, setTexts] = useState<string>("")
    const [picture, setPicture] = useState<any>(null);
    const [video, setVideo] = useState<any>(null);
    const [emoji, setEmoji] = useState<boolean>(false);
    const [userObject, setUserObject] = useState<any>()
    
    useEffect(() => {
        handleData()
    }, [data.user.uid])

        const handleData = async () => {
            const waitForId = data.user.uid
        console.log(waitForId);
        
            try {
                await waitForId            
                await axios.get((`https://twitter-clone-server-nu.vercel.app/api/users/${waitForId}`)).then((res) => setUserObject(res.data))
                    .catch((err: any) => console.log(err)
                    )
            } catch (err) {
                console.log(err);
            
            }
        }    
    
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })
        return () => {
            unSub()
        }
    }, [data.chatId])

    const handleSubmit = async () => {
        if (picture) {
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, picture);
        try {
            await uploadTask;
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    texts: texts?.length == 0 ? "" : texts ,
                    senderId: currentUser?._id,
                    date: Timestamp.now(),
                    picture: downloadURL,
                }),
            });
        } catch (error) {
            console.log(error, "There is an error");
        }
    } else if (video) {
        // Handle video upload and Firestore update similarly
            const storageRef = ref(storage, uuid())
            const uploadTask = uploadBytesResumable(storageRef, video);
        try {
            await uploadTask;
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    texts: texts?.length == 0 ? "" : texts,
                    senderId: currentUser?._id,
                    date: Timestamp.now(),
                    // picture: downloadURL,
                    video: downloadURL,
                }),
            });
        } catch (error) {
            console.log(error, "There is an error");
        }
    } else {
        // Handle case without attachments
             await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    texts,
                    senderId: currentUser?._id,
                    date: Timestamp.now(),
                })
            })
            await updateDoc(doc(db, "userChats", currentUser?._id), {
                [data.chatId + ".lastMessage"]: {
                    texts,
                },
                [data.chatId + ".date"]: serverTimestamp(),
            })
            await updateDoc(doc(db, "userChats", data.user.uid), {
                [data.chatId + ".lastMessage"]: {
                    texts,
                },
                [data.chatId + ".date"] : serverTimestamp(),
            })
    }

    setTexts("");
        setPicture(null);
        setVideo(null)
    }

//Function to make the enter key send message too
     const handleKey = (e:any) => {
    e.code === "Enter" && handleSubmit() 
    }
    
    //Function to check the innerwidth and decide what component to show
    const handleResize = () => {
        if (window.innerWidth < 1000) {
            props.setIsMobile(false)
        } else {
            props.setIsMobile(false)
        }
    }
    

    return (
      <ChatStyled>
      <div className='chatCon' >
                <div className='subChatCon' >
                    <div className='heading'  >
                        <div className='headingDetails' >
          <div className='profileDp' style={{backgroundImage: `url(${userObject?.profilePic})`  }} ></div>
                            <Link href={'/users/' + data.user?.username } ><span className='username' >{data.user?.username}</span></Link>
                        </div>
                        <p onClick={handleResize} >{props.isMobile ? <IoMdClose cursor='pointer' fontSize='35' /> : <IoInformationCircleOutline fontSize='35'/> }</p>
                    </div>
                    <div className="userObject" >
                        <Link href={'/users/' + userObject?.username } ><div style={{ backgroundImage: `url(${userObject?.profilePic})` }} className='profilePic' ></div></Link>
                        <Link href={'/users/' + userObject?.username} ><h2>{userObject?.username} </h2></Link>
                        <p>{userObject?.usersAt} </p>
                        <h2 className='bio' >{userObject?.bio} </h2>
                        <p className='createdAt' >Joined {moment(userObject?.createdAt).format("MM YYYY")} <span>{userObject?.followers?.length} Followers </span> </p>
                    </div>
                <div  className='mapContainer' >
                        {messages?.map((message: any) => (
                        <div  key={message.id} >
                            <Message message={message} />
                        </div>
                    ))}
                    </div>
                </div>
                <div className='inputCon' >
                    <div className='inputSpan' >
                    <label htmlFor="fileInputImage" style={{ cursor: "pointer", marginLeft: '10px' }}>
                  {<BsCardImage color="#1d9aef" />}
                </label>
                <input type="file" onChange={(e:any) => setPicture(e.target.files[0]) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif color="#1d9aef" />}
                </label>
                    <input type="file" onChange={(e:any) => setVideo(e.target.files[0])} id="fileInputGif" style={{ display: "none" }} />
                    {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmileUpsideDown color="#1d9aef" cursor="pointer" />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile color="#1d9aef" cursor="pointer" />}
                  </span>
                )}
                {emoji ? (
                    <div className="pickerEmoji" >
                        <EmojiPicker onEmojiClick={(e) => setTexts(texts + e.emoji) } />
                    </div>
                ) : (
                  ""
                )}
                        <input typeof="text" onKeyDown={handleKey} onChange={(e) => setTexts(e.target.value) } value={texts} placeholder='Start a new message' className='inputTextArea' />
                        {texts.length > 0 || picture !== null || video !== null ? <button onClick={handleSubmit} >{<AiOutlineSend color='#1d9aef' className='sendIcon' />}</button>
                            :
                            <button disabled >{<AiOutlineSend color='#1d9aef' className='sendIcon' />}</button>}
                    </div>
                    </div>
            </div>
            </ChatStyled> 
  )
}

export default Chat;
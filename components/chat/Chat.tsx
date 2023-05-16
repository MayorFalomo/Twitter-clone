import { ChatContext } from '@/helpers/ChatContext'
import React, { useContext, useEffect, useState } from 'react'
import { ChatStyled } from './Chat.styled';
import { Timestamp, arrayUnion, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase-config';
import Message from '../message/Message';
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineFileGif, AiOutlineSend } from 'react-icons/ai';
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import { AppContext } from '@/helpers/Helpers';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { IoInformationCircleOutline } from 'react-icons/io5';


type Props = {}

const Chat = (props: any) => {

    const {currentUser} = useContext(AppContext)
    const { data } = useContext(ChatContext);

    const [messages, setMessages] = useState<any>([])
    const [texts, setTexts] = useState<string>("")
    const [picture, setPicture] = useState<any>(null);
    const [video, setVideo] = useState<any>(null);
    const [emoji, setEmoji] = useState<boolean>(false);
    const [successfulUpload, setSuccessfulUpload] = useState<any>("")

    console.log(data, "data");
    
    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })
        return () => {
            unSub()
        }
    }, [data.chatId])


    // console.log(data.user.username);

    // console.log(messages);
    
    // const handleSubmit = async () => {
    //     // e.preventDefault();
    //     if (picture) {
    //         const storageRef = ref(storage, uuid())
    //         const uploadTask = uploadBytesResumable(storageRef, picture)
    //         uploadTask.on((error:any) => {
    //            return console.log(error, "There is an error");
    //         }, async() => {
    //             await getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //                  console.log(downloadURL, "This is the download url")
                     
    //                  await updateDoc(doc(db, "chats", data.chatId), {
    //                      messages: arrayUnion({
    //                 id: uuid(),
    //                 texts,
    //                 senderId: currentUser?._id,
    //                 date: Timestamp.now(),
    //                 picture: downloadURL,
    //                 video: downloadURL
    //             })
    //                  })
    //         })
    //         }
    //         )
    //     } else if(video) {
    //         const storageRef = ref(storage, uuid())
    //         const uploadTask = uploadBytesResumable(storageRef, video)
    //         uploadTask.on((error:any) => {
    //            return console.log(error, "There is an error");
    //         }, async() => {
    //             await getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //                  await updateDoc(doc(db, "chats", data.chatId), {
    //                      messages: arrayUnion({
    //                 id: uuid(),
    //                 texts,
    //                 senderId: currentUser?._id,
    //                 date: Timestamp.now(),
    //                 video: downloadURL
    //             })
    //                  })
    //         })
    //         }
    //         )
    //     } else {
    //         await updateDoc(doc(db, "chats", data.chatId), {
    //             messages: arrayUnion({
    //                 id: uuid(),
    //                 texts,
    //                 senderId: currentUser?._id,
    //                 date: Timestamp.now(),
    //                 // picture: picture,
    //             })
    //         })
    //         await updateDoc(doc(db, "userChats", currentUser._id), {
    //             [data.chatId + ".lastMessage"]: {
    //                 texts,
    //             },
    //             [data.chatId + ".date"]: serverTimestamp(),
    //         })
    //         await updateDoc(doc(db, "userChats", data.user.uid), {
    //             [data.chatId + ".lastMessage"]: {
    //                 texts,
    //             },
    //             [data.chatId + ".date"] : serverTimestamp(),
    //         })
           
    //     }
    //      setTexts("")
    //         setPicture(null)
    // }

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
            await updateDoc(doc(db, "userChats", currentUser._id), {
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
    }


     const handleKey = (e:any) => {
    e.code === "Enter" && handleSubmit() 
  }
    // console.log(messages, "messages");
    // console.log(data, "data");
    // console.log(currentUser._id === props.message.senderId, "lets see" );
    

    

    return (
      <ChatStyled>
      <div className='chatCon' >
                <div>
                    <div className='heading'  >
                        <div className='headingDetails' >
          <div className='profileDp' style={{backgroundImage: currentUser?.profilePic }} ></div>
                            <span className='username' >{data.user?.username}</span>
                        </div>
                        <p>{<IoInformationCircleOutline fontSize={35} />} </p>
                </div>
                <div  className='mapContainer' >
                        {messages?.map((message: any) => (
                        <div>
                            <Message message={message} key={message.id} />
                        </div>
                    ))}
                        </div>
                </div>
                <div className='inputCon' >
                    <div className='inputSpan' >
                    <label htmlFor="fileInputImage" style={{ cursor: "pointer", marginLeft: '10px' }}>
                  {<BsCardImage color="#1d9aef" fontSize="25" />}
                </label>
                <input type="file" onChange={(e:any) => setPicture(e.target.files[0]) } id="fileInputImage" style={{ display: "none" }} />
                <label htmlFor="fileInputGif" style={{ cursor: "pointer" }}>
                  {<AiOutlineFileGif color="#1d9aef" fontSize="30" />}
                </label>
                    <input type="file" onChange={(e:any) => setVideo(e.target.files[0])} id="fileInputGif" style={{ display: "none" }} />
                    {emoji ? (
                  <span onClick={() => setEmoji(false)}>
                    {<BsEmojiSmile color="#1d9aef" fontSize="30" cursor="pointer" />}
                  </span>
                ) : (
                  <span onClick={() => setEmoji(true)}>
                    {<BsEmojiSmile color="#1d9aef" fontSize="30" cursor="pointer" />}
                  </span>
                )}
                {emoji ? (
                    <div className="pickerEmoji" >
                        <Picker data={data} onEmojiSelect={((emoji: any) => setTexts(texts + emoji.native) )} />
                    </div>
                ) : (
                  ""
                )}
                        <input typeof="text" onKeyDown={handleKey} onChange={(e) => setTexts(e.target.value) } value={texts} placeholder='Start a new message' className='inputTextArea' />
                        { texts.length > 0 || picture !== null || video !== null ? <button onClick={handleSubmit} >{<AiOutlineSend fontSize='40' color='#1d9aef' className='sendIcon' />}</button> : <button disabled >{<AiOutlineSend fontSize='40' color='#1d9aef' className='sendIcon' />}</button> }
                    </div>
                    </div>
            </div>
            </ChatStyled> 
  )
}

export default Chat;
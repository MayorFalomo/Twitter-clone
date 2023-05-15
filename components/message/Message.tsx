import React, { useContext, useEffect, useRef } from 'react'
import { MessageStyle } from './Message.styled';
import { AppContext } from '@/helpers/Helpers';
import { ChatContext } from '@/helpers/ChatContext';

type Props = {}

const Message = (props: any) => {
    const { currentUser } = useContext(AppContext)
    const { data } = useContext(ChatContext)

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    },[props.message])
    
    // console.log(props.message);
    // console.log(currentUser);
        // console.log(currentUser._id === props.message.senderId, "lets see" );

    
    return (
      <MessageStyle>
            <div className='messageContainer' ref={ref} >
                <div className={currentUser?._id == props.message?.senderId ? "currentUserTextContainer" : 'userTextContainer'} >
                    <p style={{color: 'white'}}  className={currentUser?._id == props.message?.senderId ? 'currentUsersText' : "usersText"} >{props.message?.texts} </p>
                    {props.message?.picture && <img src={{backgroundImage: `url(${props.message?.picture})`}} className='picture' /> }
                    {/* <div style={{backgroundImage: `url(${props.message.senderId === currentUser._id ? currentUser.profilePic : data.user.profilePic  })`}}> </div> */}
                    </div>
      </div>
            </MessageStyle>
  )
}

export default Message
import React, { useContext, useEffect, useRef } from 'react'
import { MessageStyle } from './Message.styled';
import { AppContext } from '@/helpers/Helpers';
import moment from 'moment';

type Props = {}

const Message = (props: any) => {
    const { currentUser } = useContext(AppContext)

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    },[props.message])

    
    return (
      <MessageStyle>
            <div className='messageContainer' ref={ref} >
                <div className={currentUser?._id == props.message?.senderId ? "currentUserTextContainer" : 'userTextContainer'} >
                    <p style={{ color: 'white' }}
                        className={currentUser?._id == props.message?.senderId ? 'currentUsersText' : "usersText"} >
                        {props.message?.texts?.length > 1 ? props.message?.texts : ""} </p>
                </div>

                {props.message?.picture == undefined ? "" :
                    <div className={currentUser?._id == props.message?.senderId ? 'picturesContainer' : "userPictureContainer"} >
                        <div style={{ backgroundImage: `url(${props.message?.picture})` }} className={ currentUser?._id == props.message?.senderId ? 'picture' : 'userPictureImg' }> </div>
                    </div>}
                
                <div className={currentUser?._id == props.message?.senderId ? "currentVideoContainer" : "userVideoContainer" } >
                    {props.message?.video == undefined ? "" : <div className={currentUser?._id == props.message?.senderId  ? 'currentVideoContainer' : 'userVideoContainer '}  >
                        <video className={currentUser?._id == props.message?.senderId ?  "currentVideo" : "userBgVideo"} controls loop>
                            <source src={props?.message?.video} />
                         </video>
                    </div>}
                    <span style={{ color: 'rgb(113,118,123)', margin: '1px 10px'  }} className="dates" >{ moment(props.message.date.seconds * 1000).format("LLL")} </span>
               </div>
      </div>
            </MessageStyle>
  )
}

export default Message
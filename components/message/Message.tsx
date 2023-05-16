import React, { useContext, useEffect, useRef } from 'react'
import { MessageStyle } from './Message.styled';
import { AppContext } from '@/helpers/Helpers';
import { ChatContext } from '@/helpers/ChatContext';
import moment from 'moment';

type Props = {}

const Message = (props: any) => {
    const { currentUser } = useContext(AppContext)
    const { data } = useContext(ChatContext)

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    },[props.message])
    
    console.log(props.message);

    // const timeStamp = new Date();
    // console.log(timeStamp);

    // const timeStamp =
    
    console.log(props.message?.video);
    

    
    // console.log(currentUser);
        // console.log(currentUser._id === props.message.senderId, "lets see" );

    
    return (
      <MessageStyle>
            <div className='messageContainer' ref={ref} >
                <div className={currentUser?._id == props.message?.senderId ? "currentUserTextContainer" : 'userTextContainer'} >
                    <p style={{ color: 'white' }} className={currentUser?._id == props.message?.senderId ? 'currentUsersText' : "usersText"} >{props.message?.texts?.length > 1 ? props.message?.texts : ""} </p>
                  
                    {/* <div style={{backgroundImage: `url(${props.message.senderId === currentUser._id ? currentUser.profilePic : data.user.profilePic  })`}}> </div> */}
                </div>
                <div className={currentUser?._id == props.message?.senderId ? 'picturesContainer' : "userPictureContainer"} >
                    {currentUser?._id == props.message?.senderId && props.message?.picture?.length > 1 ?
                        <div style={{ backgroundImage: `url(${props.message?.picture})` }} className='picture'> </div>
                        :
                        <div style={{ backgroundImage: `url(${props.message?.picture})` }} className='userPictureImg'> </div>
                    }
                        {/* <span style={{ color: 'rgb(113,118,123)', fontSize: 18}}className='span' >{ moment(props.message.date.seconds * 1000).format("LLL")} </span> */}
                </div>
                <div className={currentUser?._id == props.message?.senderId ? "currentVideoContainer" : "userVideoContainer" } >
                    {/* {currentUser?._id == props.message?.senderId && props.message?.video?.length > 1 ?
                        <video controls className= "currentVideo" >
                        <source src={props.message?.video?.length > 1 ? props.message?.video : ""} type="video/mp4" />
                        </video>
                        :
                        <video controls className="userBgVideo" >
                        <source src={props.message?.video?.length > 1 ? props.message?.video : ""} type="video/mp4" />
                        </video>
                    } */}
                    {props.message?.video == undefined ? "" : <div>
                        <video className={currentUser._id !== props.message?.senderId ?  "userBgVideo" : ""} controls loop>
                            <source src={props?.message?.video} type="video/mp4" />
                         </video>
                    </div> }
               </div>
                {/* <div className={ currentUser?._id == props.message?.senderId && props.message?.video?.length > 1  ? 'currentVideoContainer' : 'userVideoContainer '} >
                    {currentUser?._id == props.message?.senderId && props.message?.video?.length > 1 ?
                        <video className={"currentVideo"} controls loop>
                            <source src={props.message?.video} type="video/mp4" />
                        </video> : ""}
                    {<video className={currentUser._id !== props.message?.senderId ?  "userBgVideo" : ""} controls loop>
                             <source src={props?.message?.video} type="video/mp4" />
                         </video>
                    }
                    <span style={{ color: 'rgb(113,118,123)', fontSize: 18}} >{ moment(props.message.date.seconds * 1000).format("LLL")} </span>
                </div> */}
      </div>
            </MessageStyle>
  )
}

export default Message
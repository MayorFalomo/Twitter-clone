import React, { useEffect, useState } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import UsersReplies from '../usersreplies/UsersReplies'
import Userstweet from '../userstweets/Userstweet'
import { ProfileStyled } from './ProfilePage.styled'

type Props = {}

const ProfilePage = (props: any) => {

    const [current, setCurrent] = useState<any>(0)
    const [active, setActive] = useState(false)
     const handleClick = (param: any) => {
    setCurrent(param);
    setActive(!active);
    };

    

    
    
    
    return (
      <ProfileStyled>
      <div className='profilePageStyled' >
          <div className='subProfileStyle' >
          <div className='subProfileFlex' >
           <ul>
            <li style={{listStyle: 'none'}} >{<BsArrowLeft fontSize='40px' cursor='pointer' />} </li>
            </ul>
            <div className='profileUsersDetails' >
            <h1>{props.userProfile?.username} </h1>
              <p> No of tweets</p>
              </div>
          </div>
          <div className='profilePhotoContainers' >
          <div style={{ backgroundImage: `url(${props.userProfile?.coverPhoto})` }} className='backDropPhoto' >  </div>
            <div style={{ backgroundImage: `url(${props.userProfile?.profilePic})` }} className='profileDp'></div>
          </div>
                    <div className='editProfileBtn'><button  >Edit Profile </button></div>
                    <div className='userDetailsContainer' >
                    <h1 style={{fontSize: 35}} >{props.userProfile?.username} </h1>
                    <p style={{color: "#575B5F", fontSize: 24}} >{props.userProfile?.usersAt} </p>
                    <div className='usersBio' style={{margin: '30px auto', fontSize: 24}}>
                        <p>{props.userProfile?.bio} </p>
                        </div>
                        <div className='usersExtraInfoContainer' style={{margin: '30px auto',}}>
                    <div className='usersExtraInfo' >
                                <span style={{ color: "#575B5F" }}>{<CiLocationOn />} {props.userProfile?.location} </span>
                                <span style={{ color: "#575B5F" }}> {<AiOutlineLink />} {props.userProfile?.links} </span>
                        <span style={{color: "#575B5F"}}>{props.userProfile?.birthday} </span><br />
                            </div>
                                <p style={{ color: "#575B5F", fontSize: 24 }} >{new Date(props.userProfile?.createdAt).toDateString()} </p>
                            </div>
                    <div className='followContainer' style={{marginBottom: 70}} >
                        <span style={{ fontSize: 24 }}>No of following </span>
                        <span style={{ fontSize: 24 }}>No of followers </span>
                        </div>
                        </div>
                    <div className='tweetsDetails'>
                        <span onClick={(e:any) => handleClick(0)} className={active ? "border-bottom" : "no-border"} style={{ fontSize: 24, cursor: "pointer" }} >Tweets </span>
                        <span onClick={(e:any) => handleClick(1)} className={active ? "border-bottom" : ""} style={{ fontSize: 24, cursor: "pointer" }}>Replies </span>
                        <span onClick={(e:any) => handleClick(2)} style={{ fontSize: 24, cursor: "pointer" }}>Media </span>
                        <span onClick={(e: any) => handleClick(3)} style={{ fontSize: 24, cursor: "pointer" }}> Likes</span>          
                    </div>
                {current == 0 && <Userstweet/> }
                {current == 1 && <UsersReplies/> }

                </div>
            </div>
            </ProfileStyled>
  )
}

export default ProfilePage
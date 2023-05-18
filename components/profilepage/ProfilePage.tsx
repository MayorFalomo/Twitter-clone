import { AppContext } from '@/helpers/Helpers'
import moment from 'moment'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BiCalendar } from 'react-icons/bi'
import { BsArrowLeft, BsBalloon, BsBalloonFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import EditProfileModal from '../editprofilemodal/EditProfileModal'
import UsersReplies from '../usersreplies/UsersReplies'
import Userstweet from '../userstweets/Userstweet'
import { ProfileStyled } from './ProfilePage.styled'

type Props = {}

const ProfilePage = (props: any) => {
    const { currentUser } = useContext(AppContext);

    const [current, setCurrent] = useState<any>(0)
  const [following, setNoOfFollowing] = useState<any>(currentUser.following?.length)

     const handleClick = (param: any) => {
    setCurrent(param);
    };
    
    // console.log(following, "number")

    // console.log(props.userProfile);
    
    
    
    return (
      <ProfileStyled>
            <div className={props.editProfileModal ?  "opaque": 'profilePageStyled'} >
          <div className='subProfileStyle' >
          <div className='subProfileFlex' >
            <Link href='/' style={{listStyle: 'none'}} >{<BsArrowLeft fontSize='40px' cursor='pointer' />} </Link>
            <div className='profileUsersDetails' >
            <h1>{props.userProfile?.username} </h1>
              <p>{props.allUsersTweets.posts?.length} Tweets</p>
              </div>
          </div>
          <div className='profilePhotoContainers' >
          <div style={{ backgroundImage: `url(${props.userProfile?.coverPhoto})` }} className='backDropPhoto' >  </div>
            <div style={{ backgroundImage: `url(${props.userProfile?.profilePic})` }} className='profileDp'></div>
          </div>
                    <div onClick={() => props.setEditProfileModal(!false)} className='editProfileBtn'><button> Edit Profile </button></div>
                    <div className={props.editProfileModal ? "overlay" : "hideOverlay"} > </div>
                    <div className={props.editProfileModal ? 'editProfileModal' : "removeModal"} >{props.editProfileModal ? <EditProfileModal userProfile={props.userProfile} setUserProfile={props.setUserProfile} setEditProfileModal={props.setEditProfileModal} />: ""}</div>
                    <div className='userDetailsContainer' >
                    <h1 style={{ fontWeight: 800}} >{props.userProfile?.username} </h1>
                    <p style={{color: "#575B5F", fontWeight: 600}} >{props.userProfile?.usersAt} </p>
                    <div className='usersBio' style={{margin: '30px auto', fontWeight: 600}}>
                        <p>{props.userProfile?.bio} </p>
                        </div>
                        <div className='usersExtraInfoContainer' style={{margin: '30px auto',}}>
                    <div className='usersExtraInfo' >
                                <span style={{ color: "#575B5F" }}>{<CiLocationOn />} {props.userProfile?.location} </span>
                                <span style={{ color: "#575B5F" }}  className='usersLink' > {<AiOutlineLink />} {props.userProfile?.links} </span>
                        <span style={{color: "#575B5F", fontWeight: 600}}>{<BsBalloon/>} Born {props.userProfile?.birthday} </span><br />
                            </div>
                                <p style={{ color: "#575B5F",fontWeight: 600 }} >{<BiCalendar/>} Joined {moment(props.userProfile?.createdAt).format("MMMM YYYY")} </p>
                            </div>
                    <div className='followContainer' style={{marginBottom: 70}} >
                            <span>{currentUser?.following?.length} Following  </span>
                            <span>{currentUser?.followers?.length} Followers </span>
                        </div>
                        </div>
                    <ul className='tweetsDetails'>
                        <li onClick={(e:any) => handleClick(0)} className={current == 0  ? "border-bottom" : "no-border"} style={{  cursor: "pointer" }} >Tweets </li>
                        <li onClick={(e:any) => handleClick(1)} className={current == 1 ? "border-bottom" : ""} style={{ cursor: "pointer" }}>Replies </li>
                        <li onClick={(e:any) => handleClick(2)}  className={current == 2 ? "border-bottom" : ""} style={{ cursor: "pointer" }}>Media </li>
                        <li onClick={(e: any) => handleClick(3)}  className={current == 3 ? "border-bottom" : ""} style={{ cursor: "pointer" }}> Likes</li>          
                    </ul>
                {current == 0 && <Userstweet/> }
                {current == 1 && <UsersReplies/> }
                </div>
            </div>
            </ProfileStyled>
  )
}

export default ProfilePage
import axios from 'axios'
import moment from 'moment'
import React, {useState, useEffect} from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BiCalendar, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowLeft, BsBalloon } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineNotificationAdd } from 'react-icons/md'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { SingleUserStyle } from './Singleuser.styled'
import SingleUserReplies from './SingleUserReplies'
import Singleusertweets from '../singletweet/Singleusertweets'

type Props = {}

const Singleuser = (props: any) => {

    const [current, setCurrent] = useState<any>(0)
    const [allUsersTweets, setAllUsersTweets] = useState<any>([])

     const handleClick = (param: any) => {
         setCurrent(param);
    };

    useEffect(() => {
          axios.get(`http://localhost:7000/api/tweets/get-tweet/${props.user?.username}`)
          .then((res) => setAllUsersTweets(res.data)).catch((err) => console.log(err))
    }, [props.user?.username])
    
    // console.log(allUsersTweets.posts.length, "All tweets");
    

    
    return (
      <SingleUserStyle>
      <div  className='profilePageStyled' >
           <div className='subProfileStyle' >
          <div className='subProfileFlex' >
           <ul>
            <li style={{listStyle: 'none'}} >{<BsArrowLeft fontSize='40px' cursor='pointer' />} </li>
            </ul>
            <div className='profileUsersDetails'>
            <h1>{props.user?.username} </h1>
              <p>{allUsersTweets.posts?.length} Tweets</p>
              </div>
          </div>
          <div className='profilePhotoContainers' >
          <div style={{ backgroundImage: `url(${props.user?.coverPhoto})` }} className='backDropPhoto' >  </div>
            <div style={{ backgroundImage: `url(${props.user?.profilePic})` }} className='profileDp'></div>
                    </div>
                    {<div className='profilePageIcons' >
                        <span>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </span>
                        <span>{<RxEnvelopeClosed fontSize='30px' cursor='pointer' />} </span>
                        <span>{<MdOutlineNotificationAdd fontSize='30px' cursor='pointer' />} </span>
                        <a> Following </a>
                    </div>}
                    <div> </div>
                    {/* <div onClick={() => props.setEditProfileModal(!false)} className='editProfileBtn'><button> Edit Profile </button></div> */}
                    <div className={props.editProfileModal ? "overlay" : "hideOverlay"} > </div>
                    {/* <div className={props.editProfileModal ? 'editProfileModal' : "removeModal"} >{props.editProfileModal ? <EditProfileModal userProfile={props.userProfile} setUserProfile={props.setUserProfile} setEditProfileModal={props.setEditProfileModal} />: ""}</div> */}
                    <div className='userDetailsContainer' >
                    <h1 style={{fontSize: 35, fontWeight: 800}} >{props.userProfile?.username} </h1>
                    <p style={{color: "#575B5F", fontSize: 24, fontWeight: 600}} >{props.userProfile?.usersAt} </p>
                    <div className='usersBio' style={{margin: '30px auto', fontSize: 24, fontWeight: 600}}>
                        <p>{props.userProfile?.bio} </p>
                        </div>
                        <div className='usersExtraInfoContainer' style={{margin: '30px auto',}}>
                    <div className='usersExtraInfo' >
                                <span style={{ color: "#575B5F", fontWeight: 600 }}>{<CiLocationOn />} {props.user?.location} </span>
                                <span style={{ color: "#575B5F", fontWeight: 600 }}  className='usersLink' > {<AiOutlineLink />} {props.user?.links} </span>
                        <span style={{color: "#575B5F", fontWeight: 600}}>{<BsBalloon/>} {props.user?.birthday} </span><br />
                            </div>
                                <p style={{ color: "#575B5F", fontSize: 24, fontWeight: 600 }} >{<BiCalendar/>} Joined {moment(props.user?.createdAt).format("MMMM YYYY")} </p>
                            </div>
                    <div className='followContainer' style={{marginBottom: 70}} >
                            <span style={{ fontSize: 24 }}>No of following  {0}</span>
                            <span style={{ fontSize: 24 }}>No of followers {0} </span>
                        </div>
                        </div>
                    <ul className='tweetsDetails'>
                        <li onClick={(e:any) => handleClick(0)} className={current == 0  ? "border-bottom" : "no-border"} style={{ fontSize: 24, cursor: "pointer" }} >Tweets </li>
                        <li onClick={(e:any) => handleClick(1)} className={current == 1 ? "border-bottom" : ""} style={{ fontSize: 24, cursor: "pointer" }}>Replies </li>
                        <li onClick={(e:any) => handleClick(2)} style={{ fontSize: 24, cursor: "pointer" }}>Media </li>
                        <li onClick={(e: any) => handleClick(3)} style={{ fontSize: 24, cursor: "pointer" }}> Likes</li>          
                    </ul>
                {current == 0 && <div> {allUsersTweets?.posts?.map((allTweets:any) => (<div key={allTweets._id} ><Singleusertweets allTweets={allTweets} /> </div>) )} </div> }
                {current == 1 && <SingleUserReplies/> }
                </div>
            </div>
            </SingleUserStyle>
  )
}

export default Singleuser
import axios from 'axios'
import moment from 'moment'
import React, {useState, useEffect, useContext} from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BiCalendar, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowLeft, BsBalloon } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineNotificationAdd } from 'react-icons/md'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { SingleUserStyle } from './Singleuser.styled'
import SingleUserReplies from './SingleUserReplies'
import Singleusertweets from '../singletweet/Singleusertweets'
import { AppContext } from '@/helpers/Helpers'
import EditProfileModal from '../editprofilemodal/EditProfileModal'
import Link from 'next/link'

type Props = {}

//[username] in pages is the parent component
const Singleuser = (props: any) => {

    const {currentUser, setCurrentUser, user} = useContext(AppContext)

    const [current, setCurrent] = useState<any>(0)
    const [allUsersTweets, setAllUsersTweets] = useState<any>([])
    const [copied, setCopied] = useState<boolean>(false)
    const [followingButton, setFollowingButton] = useState<boolean>(false)
    const [onMouseHover, setOnMouseHover] = useState<boolean>(false)
    const [urlParams, setUrlParams] = useState<string>(props.suggestedUser?._id)
    const [usernames, setUsernames] = useState<string>(props.suggestedUser?.username)
    const [usersAt, setUsersAt] = useState<string>(props.suggestedUser?.usersAt)
    const [usersProfileDp, setUsersProfileDp] = useState<string>(props.suggestedUser?.profilePic)
    const [followersArray, setFollowersArray] = useState<any>(props.user?.following)
    const [noOfFollowersArray, setNoOfFollowersArray] = useState<number>(followersArray?.length)

     const handleClick = (param: any) => {
         setCurrent(param);
    };

    // console.log(followingArray, "following Array");
    // console.log(noOfFollowingsArray, "no of following");
    
    useEffect(() => {
          axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets/get-tweet/${props.user?.username}`)
          .then((res) => setAllUsersTweets(res.data)).catch((err) => console.log(err))
    }, [props.user?.username])

     const handleFollow = async () => {
    // e.preventDefault()
    setUrlParams(props.suggestedUser?._id)
    setUsernames(props.suggestedUser?.username)
    setUsersAt(props.suggestedUser?.usersAt)
    setUsersProfileDp(props.suggestedUser?.profilePic)
    setFollowingButton(true)
           const followAUser = {
            currentUserName: currentUser?.username, 		//username of the user who is following the current user.
            currentUsersAt: currentUser?.usersAt,
            currentProfileDp: currentUser?.profilePic,
            currentUserId: currentUser?._id,
            userToAddToName: usernames,
            userToAddToAt: usersAt,
            userToAddToProfilePic: usersProfileDp, 	//username of the user who is following the current user.
            usersId: urlParams,
     }
     try {
      //  console.log(followAUser, "Follow object");
         setCurrentUser({ ...currentUser, following: [...currentUser?.following, followAUser] })
        //  console.log(currentUser, currentUser);
       await axios.put(`https://twitter-clone-server-nu.vercel.app/api/users/follow-user`, followAUser)
         .catch((err) => console.log(err))
         setFollowingButton(true)
        setNoOfFollowersArray(followersArray?.length + 1)
     } catch (err) {
       console.log(err);
        }
    }
    
    const handleRemoveFollower = async () => {
    const data = {
      userToBeUnfollowed: urlParams,
      currentUser: currentUser?._id,
    }    
    // console.log(data, "This is data");
    
    try {
        await axios.put(`https://twitter-clone-server-nu.vercel.app/api/users/unfollow-user`, data) 	//username of the user who is following the current user.
            .catch((err) => console.log(err));
        setNoOfFollowersArray(followersArray.length)
        let filtered = currentUser?.following.filter((val: any) => val.usersId !== props.suggestedUser?._id)
        setCurrentUser({ ...currentUser, following: [...filtered] })
        setFollowingButton(false)
    }
    catch (err) {
      console.log(err);
    }
  }
    
    // console.log(currentUser, "current user");
    // console.log(props.userProfile, "All tweets");
     const handleCopyToClipboard = (param:any) => {
    navigator.clipboard.writeText(
      `https://insttagg-server.vercel.app/post/${param}`
    );
    setCopied(!copied);
    };

    // console.log(noOfFollowing);
    
    
    return (
      <SingleUserStyle>
      <div  className='profilePageStyled'>
           <div className='subProfileStyle'>
          <div className='subProfileFlex'>
            <Link href='/' className='arrowLeft' >{<BsArrowLeft cursor='pointer' />} </Link>
            <div className='profileUsersDetails'>
            <h1>{props.user?.username} </h1>
              <p>{allUsersTweets.posts?.length} Tweets</p>
              </div>
          </div>
          <div className='profilePhotoContainers'>
          <div style={{ backgroundImage: `url(${props.user?.coverPhoto})` }} className='backDropPhoto' >  </div>
            <div style={{ backgroundImage: `url(${props.user?.profilePic})` }} className='profileDp'></div>
                    </div>
                    {currentUser?.username === props.user?.username ? <div className='editProfileBtn'><button> Your profile </button></div> :
                        <div className='profilePageIcons' >
                        {/* <span>{<BiDotsHorizontalRounded />} </span> */}
                        <Link href='/messages' ><span>{<RxEnvelopeClosed />} </span></Link>
                        {/* <span>{<MdOutlineNotificationAdd />} </span> */}
                            <div className='singleUserFollow' >
                                {currentUser.following?.some((e: any) => e.usersId === props.suggestedUser?._id) ?
                                    <button onClick={handleRemoveFollower} onMouseEnter={() => setOnMouseHover(true)}
                                        onMouseLeave={() => setOnMouseHover(false)}
                                        className="btn-following" >{onMouseHover ? "Unfollow" : "Following"} </button>
                                    :
                                    <button onClick={handleFollow} className='btn-follow'
                                        disabled={currentUser?.username == props.suggestedUser?.username} >Follow </button>}
                            </div>
                    </div>}
                   {props.editProfileModal ? <EditProfileModal/> : "" }
                    <div className={props.editProfileModal ? "overlay" : "hideOverlay"} > </div>
                    <div className='userDetailsContainer' >
                    <h1 style={{ fontWeight: 800}} >{props.user?.username} </h1>
                    <p style={{color: "#575B5F", fontWeight: 600}} className='usersAt' >{props.user?.usersAt} </p>
                    <div className='usersBio' style={{margin: '30px auto', fontWeight: 600}}>
                        <p style={{color: '#BABBBC'}} >{props.user?.bio} </p>
                        </div>
                        <div className='usersExtraInfoContainer' style={{margin: '30px auto',}}>
                    <div className='usersExtraInfo' >
                                <span style={{ color: "#575B5F", fontWeight: 600 }}>{<CiLocationOn />} {props.user?.location} </span>
                                <a href={props.user?.links} target='_blank' ><span style={{ color: "#575B5F", fontWeight: 600 }}  className='usersLink' > {<AiOutlineLink />} {props.user?.links} </span></a>
                        <span style={{color: "#575B5F", fontWeight: 600}}>{<BsBalloon/>} {props.user?.birthday} </span><br />
                            </div>
                                <p style={{ color: "#575B5F", fontWeight: 600 }} className='createdAt' >{<BiCalendar/>} Joined {moment(props.user?.createdAt).format("MMMM YYYY")} </p>
                            </div>
                    <div className='followContainer' style={{marginBottom: 70}} >
                            <p > {props.user?.following?.length} <span>Following</span> </p>
                            <p>{noOfFollowersArray} <span>Followers </span> </p>
                        </div>
                        </div>
                    <ul className='tweetsDetails'>
                        <li onClick={(e:any) => handleClick(0)} className={current == 0  ? "border-bottom" : "no-border"} style={{ cursor: "pointer" }} >Tweets </li>
                        <li onClick={(e:any) => handleClick(1)} className={current == 1 ? "border-bottom" : ""} style={{ cursor: "pointer" }}>Replies </li>
                        <li onClick={(e:any) => handleClick(2)} className={current == 2 ? "border-bottom" : ""} style={{  cursor: "pointer" }}>Media </li>
                        <li onClick={(e: any) => handleClick(3)} className={current == 3 ? "border-bottom" : ""} style={{ cursor: "pointer" }}> Likes</li>          
                    </ul>
                {current == 0 && <div className="singleTweetsContainer" > {allUsersTweets?.posts?.map((allTweets:any) => (<div key={allTweets._id} className="singleTweet" ><Singleusertweets allTweets={allTweets} /> </div>) )} </div> }
                {current == 1 && <SingleUserReplies/> }
                </div>
            </div>
            </SingleUserStyle>
  )
}

export default Singleuser
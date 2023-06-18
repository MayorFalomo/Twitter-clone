import { AppContext } from '@/helpers/Helpers'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { MdOutlineVerified } from 'react-icons/md'
import { MeetStyled } from './Meet.styled'
import axios from 'axios'

type Props = {}

//Parent component is connect.tsx
const Meet = (props: any) => {

    const { currentUser, setCurrentUser, suggestedUsers } = useContext(AppContext)
    
    // console.log(props.suggest);
    const [current, setCurrent] = useState<any>(0)
    // const [allUsersTweets, setAllUsersTweets] = useState<any>([])
    const [followingButton, setFollowingButton] = useState<boolean>(false)
    const [onMouseHover, setOnMouseHover] = useState<boolean>(false)
    const [urlParams, setUrlParams] = useState<string>(props.suggest?._id)
    const [usernames, setUsernames] = useState<string>(props.suggest?.username)
    const [usersAt, setUsersAt] = useState<string>(props.suggest?.usersAt)
    const [usersProfileDp, setUsersProfileDp] = useState<string>(props.suggest?.profilePic)
    const [followersArray, setFollowersArray] = useState<any>(props.suggest?.following)
    const [noOfFollowersArray, setNoOfFollowersArray] = useState<number>(followersArray?.length)

     const handleClick = (param: any) => {
         setCurrent(param);
    };

    // console.log(followingArray, "following Array");
    // console.log(noOfFollowingsArray, "no of following");
    
    // useEffect(() => {
    //       axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets/get-tweet/${props.user?.username}`)
    //       .then((res) => setAllUsersTweets(res.data)).catch((err) => console.log(err))
    // }, [props.user?.username])

  //Handle follow of a user
     const handleFollow = async () => {
    // e.preventDefault()
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
      //  console.log(followAUser, "This is followAuser");
       
     try {
         setCurrentUser({ ...currentUser, following: [...currentUser?.following, followAUser] })
       await axios.put(`https://twitter-clone-server-nu.vercel.app/api/users/follow-user`, followAUser)
         .catch((err) => console.log(err))
         setFollowingButton(true)
        setNoOfFollowersArray(followersArray?.length + 1)
     } catch (err) {
       console.log(err);
        }
    }
    
  //Handle Unfollowing of a user
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
        let filtered = currentUser?.following.filter((val: any) => val.usersId !== props.suggest?._id)
        setCurrentUser({ ...currentUser, following: [...filtered] })
        setFollowingButton(false)
    }
    catch (err) {
      console.log(err);
    }
  }

     console.log(currentUser)

    return (
      <MeetStyled>
      <div className='meetContainer' >
           <div className='subConnectFlex' >
              <div style={{ backgroundImage: `url(${props.suggest.profilePic})` }} className='bgImg' ></div>
                    <div className='followFlex' >
                        <div>
                      <Link href={'/users/' + props.suggest?.username} ><h3>{props.suggest?.username} <span style={{color:'#1d9aef'}}  >{props.suggest?.followers?.length > 5 ? <MdOutlineVerified/> : "" }</span> </h3></Link>
                            <p style={{ color: "#575B5F" }} className='usersAt' >{props.suggest?.usersAt} </p>
                            <p>{props.suggest?.bio} </p>
                            </div>
                 <div className='singleUserFollow' >
                                {currentUser?.following?.some((e: any) => e.usersId === props.suggest?._id) ?
                                    <button onClick={handleRemoveFollower} onMouseEnter={() => setOnMouseHover(true)}
                                        onMouseLeave={() => setOnMouseHover(false)}
                                        className="btn-following" >{onMouseHover ? "Unfollow" : "Following"} </button>
                                    :
                                    <button onClick={handleFollow} className='btn-follow'
                                        disabled={currentUser?.username == props.user?.username} >Follow </button>}
                            </div>
                  </div>
          </div>
            </div>
            </MeetStyled>
  )
}

export default Meet
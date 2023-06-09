import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useContext } from 'react'
import { SuggestedStyle } from './SuggestedUser.styled'

type Props = {}

const Suggestedpeople = (props: any) => {

  const { currentUser, setCurrentUser,  } = useContext(AppContext)
  
  const [followingButton, setFollowingButton] = useState<boolean>(false)
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false)
  const [urlParams, setUrlParams] = useState<string>(props.suggestedUser?._id)
  const [usernames, setUsernames] = useState<string>(props.suggestedUser?.username)
  const [usersAt, setUsersAt] = useState<string>(props.suggestedUser?.usersAt)
  const [usersProfileDp, setUsersProfileDp] = useState<string>(props.suggestedUser?.profilePic)
  const [followActive, setFollowActive] = useState<boolean>(false);

   const handleClick = async () => {
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
       setCurrentUser({ ...currentUser, following: [...currentUser?.following, followAUser] })
       await axios.put(`https://twitter-clone-server-nu.vercel.app/api/users/follow-user`, followAUser)
         .catch((err) => console.log(err))
       setFollowingButton(true)
      //  setNoOfFollowings()
     } catch (err) {
       console.log(err);
        }
  }

  const handleRemoveFollower = async () => {
    const data = {
      userToBeUnfollowed: urlParams,
      currentUser: currentUser?._id,
    }        
    try {
     await axios.put(`https://twitter-clone-server-nu.vercel.app/api/users/unfollow-user`, data) 	//username of the user who is following the current user.
        .catch((err) => console.log(err));
        currentUser?.following?.filter((val: any) => console.log(val.usersId === props.suggestedUsers?._id , "vals id"))
      let filtered = currentUser?.following.filter((val: any) => val.usersId !== props.suggestedUser?._id)
      // console.log(filtered, "this is filtered");
      setCurrentUser({ ...currentUser, following: [...filtered] })
      // console.log("User Unfollowed");
      setFollowingButton(false)
    }
    catch (err) {
      console.log(err);
    }
  }

  
  return (
    <SuggestedStyle>
      <div className='suggestedContainer' >
          <div className='subSuggestedContainer'>
          <Link href={`/users/${props.suggestedUser?.username}`} style={{ backgroundImage: `url(${props.suggestedUser?.profilePic})` }} className='profileImage' > </Link>
          <div>
              <Link  href={`/users/${props.suggestedUser?.username}`} ><h3>{props.suggestedUser.username} </h3></Link>
              <p>{props.suggestedUser.usersAt} </p>
          </div>
        </div>
          <div>
            {currentUser?.following?.some((e: any) => e.usersId === props.suggestedUser?._id) ?
              <button onClick={handleRemoveFollower} onMouseEnter={() => setOnMouseHover(true)}
                onMouseLeave={() => setOnMouseHover(false)}
                className="btn-following" >{onMouseHover ? "Unfollow" : "Following"} </button>
              :
              <button onClick={handleClick} className='btn-follow'
            disabled={currentUser?.username == props.suggestedUser?.username} >Follow </button>}</div>
      </div>
      </SuggestedStyle>
  )
}

export default Suggestedpeople
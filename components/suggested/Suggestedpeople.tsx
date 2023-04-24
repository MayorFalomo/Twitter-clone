import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import React, { useState, useContext } from 'react'
import { SuggestedStyle } from './SuggestedUser.styled'

type Props = {}

const Suggestedpeople = (props: any) => {

  const {currentUser, setCurrentUser} = useContext(AppContext)
  const [followingButton, setFollowingButton] = useState<boolean>(false)
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false)
  const [urlParams, setUrlParams] = useState<string>(" ")
  const [followActive, setFollowActive] = useState<boolean>(false)

   const handleFollow = () => {
           const followAUser = {
                currentUsername: currentUser.username, 		//username of the user who is following the current user.
                currentUsersAt: currentUser.usersAt,
            currentProfileDp: currentUser.profileDp,
            currentUserId: currentUser._id,
            userToAddToName: props.suggestedUser?.username,
            userToAddToAt: props.suggestedUser?.usersAt,
            userToAddToDp: props.suggestedUser?.profilepic, 	//username of the user who is following the current user.
            userToAddUserId: props.suggestedUser?._id	//username of the user who is following the current user.
     }
     try {
       axios.put(`http://localhost:7000/api/users/follow-user`, followAUser)
         .catch((err) => console.log(err))
          setCurrentUser({...currentUser, following: [...currentUser?.following, followAUser ]})
     } catch (err) {
       console.log(err);
        }
  }
  const handleClick = (e: any) => {
     e.preventDefault()
    setUrlParams(props.suggestedUser?._id)
     setFollowingButton(false)
    //  setCommentModal(true)
  };
  console.log(urlParams);
  
  return (
    <SuggestedStyle>
      <div className='suggestedContainer' >
          <div className='subSuggestedContainer'>
          <div style={{ backgroundImage: `url(${props.suggestedUser?.profilePic})` }} className='profileImage' > </div>
          <div>
              <h3>{props.suggestedUser.username} </h3>
              <p>{props.suggestedUser.usersAt} </p>
          </div>
        </div>
        {followingButton ? <button onClick={handleClick} onMouseEnter={() => setOnMouseHover(true)} onMouseLeave={() => setOnMouseHover(false)} className="btn-following" >{onMouseHover ? "Unfollow" :  "Following"} </button> : <button onClick={handleClick} className='btn-follow' >Follow </button>}
      </div>
      </SuggestedStyle>
  )
}

export default Suggestedpeople
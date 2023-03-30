import React, { useState } from 'react'
import { SuggestedStyle } from './SuggestedUser.styled'

type Props = {}

const Suggestedpeople = (props: any) => {

  const [followingButton, setFollowingButton] = useState<boolean>(false)
  const [onMouseHover, setOnMouseHover] = useState<boolean>(false)

  
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
        {followingButton ? <button onClick={() => setFollowingButton(false)} onMouseEnter={() => setOnMouseHover(true)} onMouseLeave={() => setOnMouseHover(false)} className="btn-following" >{onMouseHover ? "Unfollow" :  "Following"} </button> : <button onClick={() => setFollowingButton(true)} className='btn-follow' >Follow </button>}
      </div>
      </SuggestedStyle>
  )
}

export default Suggestedpeople
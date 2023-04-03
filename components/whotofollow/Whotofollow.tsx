import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Suggestedpeople from '../suggested/Suggestedpeople'
import { WhoToFollowStyled } from './Whotofollow.styled'

type Props = {}

const Whotofollow = (props: Props) => {

   const [seeMoreUsers, setSeeMoreUsers] = useState<number>(3)
  const [suggestedUsers, setSuggestedUsers] = useState<any>([])

  
  useEffect(() => {
    axios.get(`http://localhost:7000/api/users`)
      .then((res: any) => setSuggestedUsers(res.data)).catch((err: any) => console.log(err))
  }, [])


  return (
    <WhoToFollowStyled>
    <div className='whoToFollowContainer' >
       <div className="suggestFollows" >
        <h1>Who to follow </h1>
         <div className="mapContainer" >
          {suggestedUsers.slice(0, seeMoreUsers).map((suggestedUser: any, index: string) => (
            <div key={index} className='whoToFollow' >
              <Suggestedpeople suggestedUser={suggestedUser} />
            </div>
          ))}
          <Link href='trending' ><p className="showUsers" >Show more </p></Link>
        </div>
      </div>
      </div>
      </WhoToFollowStyled>
  )
}

export default Whotofollow
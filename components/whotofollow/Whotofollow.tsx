import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Suggestedpeople from '../suggested/Suggestedpeople'
import { WhoToFollowStyled } from './Whotofollow.styled'

type Props = {}

const Whotofollow = (props: any) => {

  const {suggestedUsers} = useContext(AppContext)

   const [seeMoreUsers, setSeeMoreUsers] = useState<number>(3)

  



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
import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Suggestedpeople from '../suggested/Suggestedpeople'
import { WhoToFollowStyled } from './Whotofollow.styled'
import { shuffle } from 'lodash';

type Props = {}

const Whotofollow = (props: any) => {

  const {suggestedUsers} = useContext(AppContext)

  // const [seeMoreUsers, setSeeMoreUsers] = useState<number>(3)
  const [randomUsers, setRandomUsers] = useState<any[]>([]);

  useEffect(() => {
    const shuffledUsers = shuffle(suggestedUsers)

    const randomThreeUsers = shuffledUsers.slice(0, 3)
    
    setRandomUsers(randomThreeUsers)
  },[suggestedUsers])
  
  // const showRandomUsers = () => {
  //   const shuffledObjects = shuffle(suggestedUsers)
  // }


  return (
    <WhoToFollowStyled>
    <div className='whoToFollowContainer' >
       <div className="suggestFollows" >
        <h1>Who to follow </h1>
         <div className="mapContainer" >
          {randomUsers?.map((suggestedUser: any, index: number) => (
            <div key={index} className='whoToFollow' >
              <Suggestedpeople suggestedUser={suggestedUser} />
            </div>
          ))}
          <Link href='/connect' ><p className="showUsers" >Show more </p></Link>
        </div>
        </div>
        <div className='policies' >
          <span>Terms of Service </span>
          <span>Privacy Policy </span>
          <span>Cookie Policy </span>
        </div>
        <div className='policies' >
          <span>Accesibility </span>
          <span>Ads Info </span>
          <span>More... </span>
          <span> &copy; 2023 X Corp </span>
        </div>
      </div>
      </WhoToFollowStyled>
  )
}

export default Whotofollow
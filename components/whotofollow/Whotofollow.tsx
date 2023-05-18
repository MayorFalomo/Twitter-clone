import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Suggestedpeople from '../suggested/Suggestedpeople'
import { WhoToFollowStyled } from './Whotofollow.styled'

type Props = {}

const Whotofollow = (props: any) => {

  const {suggestedUsers, setSuggestedUsers} = useContext(AppContext)

  const [seeMoreUsers, setSeeMoreUsers] = useState<number>(3)
  
  // const generateRandomUsers = () => {
  //   return Math.floor(Math.random() * suggestedUsers.length)
  // }

  // useEffect(() => {
  //   getRandomUsers()
  // }, [])

  // const getRandomUsers = () => {
  //   const randomUsers = [
  //     generateRandomUsers(),
  //     generateRandomUsers(),
  //     generateRandomUsers()
  //   ]
  //   const selectedUsers = suggestedUsers.filter((suggestedUser: any) => randomUsers.includes(suggestedUser.id))
  //   setSuggestedUsers(selectedUsers)
  // }

  // const getRandomUsers = () => {
  //   const randomUsers: any[] = []

  //   //Generate three ranndom indices
  //   const randomIndices: number[] = [];
  //   while (randomUsers.length < 3) {
  //     const randomIndex = Math.floor(Math.random() * suggestedUsers.length);
  //     if (!randomIndices.includes(randomIndex)) {
  //       randomIndices.push(randomIndex);
  //     }
  //   }

  //   // Retrieve the corressponding user objects
  //   randomIndices.forEach((index) => {
  //     randomUsers.push(suggestedUsers[index])
  //   })
  //   // return console.log(randomUsers);

    
  // }
  // console.log(suggestedUsers, "suggested");

  // console.log(getRandomUsers(), "function");
  

  // console.log(getRandomUsers, "function");
  
  



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
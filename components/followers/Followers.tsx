import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { MdOutlineVerified } from 'react-icons/md'
import Mappedfollowers from '../mappedfollowers/mappedfollowers'

type Props = {}

const Followers = (props: any) => {
    const { currentUser, setCurrentUser } = useContext(AppContext)
    
  
    
    // console.log(props.followers, "This is followers");
    
  return (
      <div className='meetContainer' >
          {currentUser.followers?.length > 0 ? <div className='mappedContainer' >
              {currentUser?.followers?.map((followers: any) => (
                  <div key={followers.userId} className="subMapped" >
                      <Mappedfollowers followers={followers} />
                  </div>
              ))}
          </div>
              :
              <div className="noFollowersText" ><h2>You have no followers </h2></div>
          }
          
         
            </div>
  )
}

export default Followers
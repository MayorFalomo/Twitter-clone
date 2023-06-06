import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { MdOutlineVerified } from 'react-icons/md'
import MappedFollowers from '../mappedfollowers/Mappedfollowers'

type Props = {}

const Followers = (props: any) => {
    const { currentUser, setCurrentUser } = useContext(AppContext)
    
  
    
    console.log(currentUser.followers, "This is followers");
    
  return (
      <div className='meetContainer' >
          {currentUser.followers?.length > 0 ? <div className='mappedContainer' >
              {currentUser?.followers?.map((followers: any) => (
                  <div key={followers.userId} className="subMapped" >
                      <MappedFollowers followers={followers} />
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
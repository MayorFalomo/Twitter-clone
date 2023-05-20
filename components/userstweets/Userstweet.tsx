import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Allusertweet from '../allusertweet/Allusertweet'
import { UserTweetStyle } from './Userstweet.styled'
import { AppContext } from '@/helpers/Helpers'

type Props = {}

//Parent component is ProfilePage.tsx

const Userstweet = (props: any) => {

  const { currentUser } = useContext(AppContext)
  
  const [allUsersTweets, setAllUsersTweets] = useState<any>([])

  //Function to get the currentUsers tweet
  useEffect(() => {
     axios.get(`https://twitter-clone-server-nu.vercel.app/api/tweets/get-tweet/${currentUser?.username}`)
      .then((res) => setAllUsersTweets(res.data))
      .catch((err) => console.log(err))
  }, [currentUser?.username])
  


  return (
    <UserTweetStyle>
    <div className='userTweetContainer' >
      <div>{allUsersTweets.posts?.map((allTweet: any) => (
        <div key={allTweet._id} className='subAllTweet' >
          <Allusertweet allTweet={allTweet} />
        </div>
      ))} </div>
      </div>
    </UserTweetStyle>
  )
}

export default Userstweet
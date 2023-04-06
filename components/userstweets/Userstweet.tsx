import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Allusertweet from '../allusertweet/Allusertweet'
import { UserTweetStyle } from './Userstweet.styled'

type Props = {}

const Userstweet = (props: any) => {
  const [cookies, setCookie] = useCookies(["user"])
  const [userObject, setUserObject] = useState<any>([])
  const [allUsersTweets, setAllUsersTweets] = useState<any>([])
  
  useEffect(() => {
    axios.get(`http://localhost:7000/api/users/${cookies.user}`).then((res) => setUserObject(res.data)).catch((err) => console.log(err)
    )
  }, [cookies.user])

  
  useEffect(() => {
     axios.get(`http://localhost:7000/api/tweets/get-tweet/${userObject?.username}`)
      .then((res) => setAllUsersTweets(res.data))
      .catch((err) => console.log(err))
  }, [userObject?.username])  //Only run once, not on every render. 描述如何在组件

  // console.log(userObject, "userObject");
  
  // console.log(allUsersTweets?.posts, "All the posts");
  


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
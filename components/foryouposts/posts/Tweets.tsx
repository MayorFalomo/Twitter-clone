import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'
import React, {useContext, useEffect, useState} from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Tweet from './Tweet'
import { TweetsContainer } from './Tweets.styled'


const Tweets = (props: any) => {

  const { tweets } = useContext(AppContext)
  const [userMap, setUserMap] = useState<any>([])

  // console.log(tweets, "all tweeets");

  useEffect(() => {
    axios.get(`http://localhost:7000/api/users`)
      .then((res) => setUserMap(res.data)).catch((err) => console.log(err)
      )
  }, [])
  

  
  
    return (
      <TweetsContainer>
            <div>
          {tweets?.map((tweet: any,index:any) => (
            <div key={index} >
              <Tweet tweet={tweet} />
                  </div>
          ))}
          {/* {userMap.map((thank: any) => (
            <div key={thank._id} >
              <Tweet userMap={userMap} thank={thank} />
              </div>
          ))} */}
           </div>
    </TweetsContainer>
  )
}


export default Tweets;
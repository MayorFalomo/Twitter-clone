import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'
import React, {useContext, useEffect} from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Tweet from './Tweet'
import { TweetsContainer } from './Tweets.styled'


const Tweets = (props:any) => {

  const { tweets } = useContext(AppContext)

  // console.log(tweets, "all tweeets");
  
  

  
  
    return (
      <TweetsContainer>
            <div>
          {tweets?.map((tweet: any,index:any) => (
            <div key={index} >
              <Tweet tweet={tweet} />
                  </div>
                ))}
           </div>
    </TweetsContainer>
  )
}


export default Tweets;
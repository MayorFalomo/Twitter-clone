import { AppContext } from '@/helpers/Helpers'
import React, {useContext} from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Tweet from './Tweet'
import { TweetsContainer } from './Tweets.styled'

type Props = {}

const Tweets = (props: any) => {

  const { tweets } = useContext(AppContext)
  
    return (
      <TweetsContainer>
            <div>
          {tweets.reverse().map((tweet: any,index:any) => (
            <div key={index} >
              <Tweet tweet={tweet} />
                  </div>
                ))}
           </div>
    </TweetsContainer>
  )
}

export default Tweets
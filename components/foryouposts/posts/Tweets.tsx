import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'
import React, {useContext, useEffect, useState} from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Tweet from './Tweet'
import { TweetsContainer } from './Tweets.styled'


const Tweets = (props: any) => {

  const { tweets, bookmarks, } = useContext(AppContext)
  const [userMap, setUserMap] = useState<any>([])
  const [addedToBookmark, setAddedToBookmark] = useState<boolean>(false)


  // console.log(bookmarks);

  // useEffect(() => {
  //   axios.get(`https://twitter-clone-server-nu.vercel.app/api/users`)
  //     .then((res) => setUserMap(res.data)).catch((err) => console.log(err)
  //     )
  // }, [])
  
// console.log(userMap);
  // console.log(tweets, "these are tweets");
  

  
  
    return (
      <TweetsContainer>
            <div className='tweetsContainer' >
          {tweets?.map((tweet: any,index:any) => (
            <div key={index} >
              <Tweet tweet={tweet} setAddedToBookmark={setAddedToBookmark} />
                  </div>
          ))}
                  {addedToBookmark ? <p className="bookmarkAdded" >Tweet added to bookmark</p> : ""}
           </div>
    </TweetsContainer>
  )
}


export default Tweets;
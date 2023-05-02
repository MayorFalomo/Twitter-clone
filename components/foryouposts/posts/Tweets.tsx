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

  useEffect(() => {
    axios.get(`http://localhost:7000/api/users`)
      .then((res) => setUserMap(res.data)).catch((err) => console.log(err)
      )
  }, [])
  

  
  
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
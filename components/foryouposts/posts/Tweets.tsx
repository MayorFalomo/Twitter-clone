import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next'
import React, {useContext, useEffect, useState} from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Tweet from './Tweet'
import { TweetsContainer } from './Tweets.styled'
import { RiQuillPenLine } from 'react-icons/ri'
import TweetModal from '@/components/tweetmodal/Tweetmodal'


const Tweets = (props: any) => {

  const { tweets, bookmarks, tweetModal, setTweetModal, lastTweetRef } = useContext(AppContext)
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
  // console.log(process.env.NEXT_PUBLIC_API_KEY);
  

  
  
    return (
      <TweetsContainer>
            <div className='tweetsContainer' >
          {tweets?.map((tweet: any,index:any) => (
            <div key={index} ref={lastTweetRef} >
              <Tweet tweet={tweet} setAddedToBookmark={setAddedToBookmark} />
                  </div>
          ))}
          <div className="quill" onClick={() => setTweetModal(true)} ><p className="tweetIconBtn" >{<RiQuillPenLine style={{ background: '#1d9aef', padding: "10px 10px", fontSize: 55, borderRadius: "50px" }} />} </p></div>
          {TweetModal && <div className={tweetModal ? "active" : "inactive"} ><TweetModal/></div> }
                  {addedToBookmark ? <p className="bookmarkAdded" >Tweet added to bookmark</p> : ""}
           </div>
    </TweetsContainer>
  )
}


export default Tweets;
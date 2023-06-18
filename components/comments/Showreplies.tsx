import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import Showreply from './Showreply'

type Props = {}

//Parent component is CommentPage.tsx
const Showreplies = (props: any) => {

    const [mappedReplies, setMappedReplies] = useState<any>()
  const [likeTweet, setLikeTweet] = useState<boolean>(false)

     const [views, setViews] = useState<number>(0)
  
      useEffect(() => {
    const view = Math.floor(Math.random() * props.suggestedUsers?.length);
    setViews(view)
      }, [])
  
      //Add like function
  const handleAddLike = async () => {
  }

  //Handle Remove Like 
  const removeLike = async () => {
    setLikeTweet(false)
  }    
    
  return (
      <div className='showRepliesContainer' >
          <div className='replyCon' >
          {props.replies.map((reply:any) => (
              <div key={reply.newId} className='subReplyCon' ><Showreply reply={reply} views={views} /> </div>
          ))}
              </div>
          </div>
  )
}

export default Showreplies
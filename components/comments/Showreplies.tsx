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
    // console.log(props.urlParams);

    const [mappedReplies, setMappedReplies] = useState<any>()
    const views = Math.floor(Math.random() * props.suggestedUsers.length)
//   const [suggestedUsers, setSuggestedUsers] = useState<any>(props.suggestedUsers?.length)
  const [likeTweet, setLikeTweet] = useState<boolean>(false)

      //Add like function
  const handleAddLike = async () => {
  }

  //Handle Remove Like 
  const removeLike = async () => {
    setLikeTweet(false)
  }
    // console.log(props.replies, "This are replies");
    
    
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
import moment from 'moment'
import React,{useState, useEffect} from 'react'

type Props = {}

//Parent component is Replymodal.tsx
const Mappedreply = (props: any) => {

    const [mappedComment, setMappedComment] = useState<any>()

    useEffect(() => {
        props.singleTweet.comments.map((single: any) => {
        return setMappedComment(single)
        })
    }, [props.singleTweet.comments])
    

  return (
      <div>
        <h1>{mappedComment?.username} <span>{mappedComment?.usersAt} </span> <span>{moment(mappedComment?.createdAt).format("MMMM D")} </span>  </h1>
        <p >{mappedComment?.comments?.slice(0, 85)}... </p>
        <p className='tweet' >Replying to <span> {mappedComment?.usersAt} </span> </p>
    </div>
  )
}

export default Mappedreply
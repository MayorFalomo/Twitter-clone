/* eslint-disable @next/next/no-img-element */
import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import React, {useContext, useEffect, useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { QuotedReplies } from './QuotedReplies.styled'

type Props = {}

//Parent component is [Quoted].tsx
const QuotedReply = (props: any) => {

    const { suggestedUsers, currentUser } = useContext(AppContext)
    
     const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, SetLikeTweet] = useState<boolean>(false)
  const [noOfRetweet, setNoOfRetweet] = useState<number>(0)
  const [noOfLikes, setNoOfLikes] = useState<number>(0)
  const [retweetTweet, setRetweetTweet] = useState<boolean>(false)
 const [views, setViews] = useState<number>(0)
  
      useEffect(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);
    setViews(view)
  }, [])
  
  const handleLike = () => {
    SetLikeTweet(true)
    setNoOfLikes(noOfLikes + 1 )
  }

   const removeLike = async () => {
    SetLikeTweet(false)
    setNoOfLikes(noOfLikes - 1 )
  }
  
  const handleRetweet = () => {
    setRetweet(true)
    setNoOfRetweet(noOfRetweet + 1)
  }
  const removeRetweet = () => {
    setRetweet(false)
    setNoOfRetweet(noOfRetweet - 1)
  }

  // console.log(props.quotedProps);
  
    
    return (
      <QuotedReplies>
        <div className='postsContainer' >
            <Link href={'/users/' + props.quoted?.username} className="profilePicture" style={{ backgroundImage: `url(${props.quoted?.profileDp || props.quoted?.photo})` }} ></Link>
                 <div className='subPostsContainer'>
              <div className='flexTweetProfileDetails'>
                 <div className='tweetProfileDetails'>
              <Link href={'/users/' + props.quoted?.username} className='userName' > {props.quoted?.username} </Link>
              <span className='userAt'>{props.quoted?.usersAt}</span>
              <span className='createdAt' >{moment(props.quoted?.createdAt).format("MMMM D")} </span>
            </div>
                <div className='removeModalContainer'>
                  {<BiDotsHorizontalRounded  cursor='pointer' />}
                  {/* {modalActive ? <span className='remove' >Remove bookmark </span> : ""} */}
                </div>
          </div>
          <p className='tweet-caption' >{props.quoted?.comments} </p>
            {props.quoted?.picture?.length > 1 ? <img src={props.quoted?.picture} className='picture' alt='img'/> : ""}
            <div className='subQuotedTweet' >
              <div className='mainTweetDetails' >
              <span style={{ backgroundImage: `url(${props.quotedProps?.profileDp})`}} className='profilePic' > </span>
              <span >{props.quotedProps.username} </span>
              <span style={{ color: 'rgb(113,118,123)', fontWeight: 400}} className='mainTweetUsersAt' >{props.quotedProps.usersAt} </span>
                <span style={{color: 'rgb(113,118,123)', fontWeight: 400, marginLeft: '20px', display: "list-item", listStyle: "disc outside none"}} className='mainTweetCreatedAt' >{moment(props.quotedProps?.createdAt).format("MMMM D")}  </span>
              </div>
              <p>{props.quotedProps.tweet} </p>
            </div>
          <div className='tweetOptions'>
            <div className='flexIconsAndValues'>
              <p>
                <FaRegComment
                  className="likeIcon"
                  style={{ cursor: "pointer", opacity: 0.4}}
                />
            </p>
              <span>{0} </span>
              {/* {commentModal ?  <div className="activeModal" ><Slug urlParams={urlParams} setCommentModal={setCommentModal} /> </div> : ""} */}
            </div>
            <div  className='flexIconsAndValues'>
              {retweet ? <p>
                {
                  <AiOutlineRetweet
                    onClick={removeRetweet}
                    className="likeIcon"
                    style={{ cursor: "pointer", color: "#00BA7C" }}/>
                  }</p>
                  :
              <p>
                {
                    <AiOutlineRetweet
                    onClick={handleRetweet}
                    className="likeIcon"
                    style={{ cursor: "pointer" }}
                  />
                }</p>}
              <span>{noOfRetweet} </span>
            </div>
            <div className='flexIconsAndValues'>
              {likeTweet ? (
                      <BsFillHeartFill
                        onClick={removeLike}
                        className='likeIcon'
                        style={{
                        color: "red",
                        cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FaRegHeart
                        className='likeIcon'
                      style={{ cursor: "pointer" }}
                      onClick={handleLike }
                      />
                    )}
                <span>{noOfLikes} </span>
            </div>
            <div className='flexIconsAndValues'>
              <p>
                  {
                        <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer" }}
                      />
                }</p>
              <span>{views.toLocaleString()}{views > 1000 ? "k" : ""} </span>
            </div>
            <div>
              <p >
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer"}}
                      />
                }</p>
            </div>
          </div>
            {/* <div className='showThread' >
          <div style={{ cursor: "pointer", backgroundImage: `url(${props.quoted?.profileDp})` }} className='subUserPhoto' > </div>
              <Link href={'/posts/' + props.quoted?.postId} >
                <p>Show this thread </p>
              </Link>
            </div> */}
        </div>
            </div>
      </QuotedReplies>
  )
}

export default QuotedReply
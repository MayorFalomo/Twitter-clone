import React from 'react'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";
import { IoHeartSharp } from "react-icons/io5";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Tweetstyled } from './Tweet.styled'
import moment from 'moment';
import Link from 'next/link';
type Props = {}

const Tweet = (props: any) => {
  return (
      <Tweetstyled>
           <div className='postsContainer' >
            <div className="profilePicture" style={{ backgroundImage: `url(${props.tweet.picture})` }} ></div>
          <div className='subPostsContainer' >
              <div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
              <h2>{props.tweet.username} </h2>
              <div className='tweetProfileFlex' >
              <p>{props.tweet.usersAt} </p>
              <ul>
                <li>{moment(new Date(props.tweet.createdAt)).fromNow()} </li>
                </ul>
                </div>
                  </div>
                  <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
                    </div>
                    <p className='tweet-caption' >{props.tweet.tweet} </p>
                    {/* <img src={props.tweet.picture} className='tweet-image' alt='img' /> */}
          <div style={{ backgroundImage: `url(${props.tweet.picture})` }} className='tweet-image' ></div>
          <div className='tweetOptions' >
            <div className='flexIconsAndValues' >
              <p>
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>100 </span>
            </div>
            <div  className='flexIconsAndValues'>
              <p>
                  {
                        <AiOutlineRetweet
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>200 </span>
            </div>
            <div  className='flexIconsAndValues'>
              <p>
                  {
                        <FaRegHeart
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>200 </span>
            </div>
            <div>
              <p>
                  {
                        <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
            </div>
            <div>
              <p>
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
            </div>
          </div>
          <Link href='' >
            <div className='showThread' >
          <div style={{ cursor: "pointer", backgroundImage: `url(${props.tweet.picture})` }} className='subUserPhoto' > </div>
            <p>Show this thread </p>
            </div>
          </Link>
              </div>
            </div>
    </Tweetstyled>
  )
}

export default Tweet
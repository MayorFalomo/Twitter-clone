import React, { useContext, useState } from 'react'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineUpload } from "react-icons/ai";
import { IoHeartSharp } from "react-icons/io5";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Tweetstyled } from './Tweet.styled'
import moment from 'moment';
import Link from 'next/link';
import { green } from 'colors';
import { BsFillHeartFill } from 'react-icons/bs';
import { AppContext } from '@/helpers/Helpers';
import Id from '@/pages/posts/[id]';
import { useRouter } from 'next/router';
import axios from 'axios';
type Props = {}

const Tweet = (props: any) => {

  const { currentUser, suggestedUsers } = useContext(AppContext)

  const [postId, setPostId] = useState(props.tweet?._id)
  const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, SetLikeTweet] = useState<boolean>(false)
  const [likesArray, setLikesArray] = useState<any>(props.tweet.likes)

  // console.log(likesArray, "likes array");
  
  const handleAddLike = async () => {
    const likeData = {
       username: currentUser.username,
      profileDp: currentUser?.profileDp,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: props.tweet._id,
    }
    await axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
    setLikesArray([...likesArray, likeData])
  }

  const removeLike = async () => {
    SetLikeTweet(false)
    const likeData = {
      username: currentUser.username,
      profileDp: currentUser?.profileDp,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    } 	//takes the id of the post and removes it from the
    await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
    let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
    setLikesArray(filtered) 	//filtered is a array with all the items that are not the likeData.username, this is the
  }

  
  const views = Math.floor(Math.random() * suggestedUsers.length)

  // const query = useRouter()
  // console.log(props.tweet._id);
  
  return (
      <Tweetstyled>
           <div className='postsContainer' >
            <div className="profilePicture" style={{ backgroundImage: `url(${props.tweet?.profileDp})` }} ></div>
                 <div className='subPostsContainer' >
              <Link href={'/posts/' + props.tweet?._id} ><div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
              <span className='userName' > {props.tweet?.username}</span>
              <span className='userAt'>{props.tweet?.usersAt}</span>
              <span className='createdAt' >{moment(new Date(props.tweet?.createdAt)).fromNow()}</span>
            </div>
                  <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
          </div>
            </Link>
                    <p className='tweet-caption' >{props.tweet?.tweet} </p>
                    {/* <img src={props.tweet.picture} className='tweet-image' alt='img' /> */}
          {props.tweet?.picture.length > 1 ? <div style={{ backgroundImage: `url(${props.tweet?.picture})` }} className='tweet-image' ></div> : ""}
          <div className='tweetOptions' >
            <div className='flexIconsAndValues' >
              <p>
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>{props.tweet.comments.length} </span>
            </div>
            <div  className='flexIconsAndValues'>
              {retweet ? <p>
                {
                  <AiOutlineRetweet
                    onClick={() => setRetweet(false)}
                    className="likeIcon"
                    style={{ cursor: "pointer", fontSize: 35, color: "#00BA7C" }}
                  />
                }</p> :
              <p>
                {
                    <AiOutlineRetweet
                    onClick={() => setRetweet(true)}
                    className="likeIcon"
                    style={{ cursor: "pointer", fontSize: 35 }}
                  />
                }</p>}
              <span>{0} </span>
            </div>
            <div  className='flexIconsAndValues'>
              {likesArray && (
                  <p>
                    {likesArray.some(
                      (e: any) => e.username === currentUser?.username
                    ) ? (
                      <BsFillHeartFill
                        onClick={removeLike}
                        className='likeIcon'
                        style={{
                          color: "red",
                          fontSize: 35,
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FaRegHeart
                        className='likeIcon'
                        onClick={handleAddLike}
                        style={{ fontSize: 35, cursor: "pointer" }}
                      />
                    )}
                  </p>
                )}
              <span>{props.tweet.likes?.length} </span>
            </div>
            <div className='flexIconsAndValues'>
              <p>
                  {
                        <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>{views.toLocaleString()}{views > 1000 ? "k" : ""} </span>
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
          <div style={{ cursor: "pointer", backgroundImage: `url(${props.tweet?.profileDp})` }} className='subUserPhoto' > </div>
            <p>Show this thread </p>
            </div>
          </Link>
        </div>
            </div>
    </Tweetstyled>
  )
}



export default Tweet
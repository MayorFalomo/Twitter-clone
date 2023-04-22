import { AppContext } from '@/helpers/Helpers'
import moment from 'moment'
import Link from 'next/link'
import React, {useContext, useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { CommentPageStyle } from './Commentpage.styled'

type Props = {}

const Commentpage = (props: any) => {

    const { suggestedUsers } = useContext(AppContext)
    
    const views = Math.floor(Math.random() * suggestedUsers.length)
    
    const [retweet, setRetweet] = useState<boolean>(false)
    const [likeTweet, SetLikeTweet] = useState<boolean>(false)


  console.log(props);
  
    return (
      <CommentPageStyle>
      <div className='commentPageContainer' >
            <div className="profilePicture" style={{ backgroundImage: `url(${props.tweet?.profileDp})` }} ></div>
                 <div className='subPostsContainer' >
              <Link href={'/posts/' + props.comment?.postId} ><div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
              <span className='userName' > {props.comment?.username}</span>
              <span className='userAt'>{props.comment?.usersAt}</span>
              <span className='createdAt' >{moment(new Date(props.comment?.createdAt)).fromNow()}</span>
            </div>
                  <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
          </div>
            </Link>
                    <p className='tweet-caption' style={{fontSize: 28, fontWeight: 400}} >{props.comment?.comments} </p>
            {/* {props.tweet?.picture.length > 1 ? <div style={{ backgroundImage: `url(${props.tweet?.picture})` }} className='tweet-image'> </div> : ""} */}
          {props.comment?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.comment?.picture})` }} className='tweet-image' ></div> : ""}
          <div className='tweetOptions' >
            <div className='flexIconsAndValues' >
              <p>
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
              <span>{0} </span>
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
              {likeTweet ? <p>
                  {
                        <BsFillHeartFill
                    className="likeIcon"
                    onClick={() => SetLikeTweet(false)}
                      style={{ cursor: "pointer", fontSize: 35, color: "red",}}
                      />
                }</p> :
              <p>
                  {
                        <FaRegHeart
                      className="likeIcon"
                      onClick={() => SetLikeTweet(true)}
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>}
              <span>{0} </span>
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
          </div>
            </div>
            </CommentPageStyle>
  )
}

export default Commentpage
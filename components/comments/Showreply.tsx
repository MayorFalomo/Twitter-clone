import moment from 'moment';
import Link from 'next/link';
import React, {useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai';
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { ShowReplyStyle } from './Showreply.styled';

type Props = {}

//parent component is Showreplies.tsx
const Showreply = (props: any) => {
  
  const [likeTweet, setLikeTweet] = useState<boolean>(false)
    const [retweet, setRetweet] = useState<boolean>(false)
    
     const handleAddLike = async () => {
  }

  //Handle Remove Like 
  const removeLike = async () => {
    setLikeTweet(false)
  }
  
  return (
      <ShowReplyStyle>
      <div className='showReplyContainer' >
       <div className="profilePicture" style={{ backgroundImage: `url(${props.reply?.profileDp})` }} ></div>
                 <div className='subPostContainer' >
            <div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
              <span className='userName' > {props.reply?.username}</span>
              <span className='userAt'>{props.reply?.usersAt}</span>
              <span className='createdAt' >{moment(props.reply?.createdAt).format("MMMM D")}</span>
            </div>
                  <div>{<BiDotsHorizontalRounded cursor='pointer' />} </div>
          </div>
                    <p className='repliedText' style={{fontWeight: 400}} >{props.reply?.comments} </p>
          {props.reply?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.reply?.picture})` }} className='tweet-image' ></div> : ""}
          <div className='tweetOption' >
            <div className='flexIconsAndValues' >
              <p className='commentIcon' >
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer"}}
                      />
                  }</p>
                      <span> 0 </span>
                  </div>
            <div  className='flexIconsAndValues'>
              {retweet ? <p>
                {
                  <AiOutlineRetweet
                    onClick={() => setRetweet(false)}
                    className="likeIcon"
                    style={{ cursor: "pointer", color: "#00BA7C" }}
                  />
                }</p> :
              <p>
                {
                    <AiOutlineRetweet
                    onClick={() => setRetweet(true)}
                    className="likeIcon"
                    style={{ cursor: "pointer",}}
                  />
                }</p>}
              <span>{0} </span>
            </div>
            <div  className='flexIconsAndValues'>
              { likeTweet? (
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
                        onClick={handleAddLike}
                        style={{ cursor: "pointer" }}
                      />
                    )}
              <span>{props?.reply.like?.length} </span>
            </div>
            <div className='flexIconsAndValues'>
              <p>
                  {
                        <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer", }}
                      />
                }</p>
              <span>{props.views.toLocaleString()}{props.views > 1000 ? "k" : ""} </span>
            </div>
            <div  className='flexIconsAndValues' >
              <p>
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer", }}
                      />
                }</p>
              </div>
            </div>
            </div> 
      </div>
      </ShowReplyStyle>
  )
}

export default Showreply
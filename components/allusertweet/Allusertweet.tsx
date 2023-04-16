import moment from 'moment'
import React, {useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { FiUpload } from 'react-icons/fi'
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import { FaRegComment, FaRegHeart, FaRetweet} from 'react-icons/fa'
import { AllUserTweets } from './Allusertweet.styled'

type Props = {}

const Allusertweet = (props: any) => {

    const [likeTweet, setLikeTweet] = useState<boolean>(false)
    const [retweet, setRetweet] = useState<boolean>(false)

    // console.log(props.allTweet);
    const views = Math.floor(Math.random() * 20000)

    
    return (
        <AllUserTweets>
        <div className="AllUserTweetContainer" >
      <div className='AllUserTweet' >
        <div style={{ backgroundImage: `url(${props.allTweet?.profilePic})` }} className='userTweetPic' > </div>
        <div className='flexUserInfoContainer' >
          <div className='flexUserInfo' >
          <h1>{props.allTweet?.username} </h1>
          <span>{props.allTweet?.usersAt} </span>
          <span className='createdAt' >{moment(new Date(props.allTweet?.createdAt)).fromNow()}</span>
          </div>
          <p className='tweetText' >{props.allTweet?.tweet} </p>
                  <div className='tweetOptions' >
            <div className='flexIconsAndValues' >
              <p>
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35, color: '#71767B' }}
                      />
                }</p>
              <span>0 </span>
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
                    <FaRetweet
                    onClick={() => setRetweet(true)}
                    className="likeIcon"
                    style={{ cursor: "pointer", fontSize: 35, color: '#71767B' }}
                  />
                }</p>}
              <span>0 </span>
            </div>
            <div  className='flexIconsAndValues'>
              {likeTweet ? <p>
                  {
                        <BsFillHeartFill
                    className="likeIcon"
                    onClick={() => setLikeTweet(false)}
                      style={{ cursor: "pointer", fontSize: 35, color: "red",}}
                      />
                }</p> :
              <p>
                  {
                        <BsHeart
                      className="likeIcon"
                      onClick={() => setLikeTweet(true)}
                      style={{ cursor: "pointer", fontSize: 35,color: '#71767B' }}
                      />
                }</p>}
              <span>0 </span>
            </div>
            <div className='flexIconsAndValues'>
              <p>
                  {
                        <BiBarChart
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35,color: '#71767B' }}
                      />
                                    }</p>
                                <span>{views}{views > 10000 ? "k" : ""} </span>
            </div>
            <div>
              <p>
                  {
                        <FiUpload
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35, color: '#71767B' }}
                      />
                }</p>
            </div>
                    </div>
                    </div>
                    </div>
            </div>
            </AllUserTweets>
  )
}

export default Allusertweet
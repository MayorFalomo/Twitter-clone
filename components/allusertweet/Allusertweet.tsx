import moment from 'moment'
import React, {useContext, useState} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { FiUpload } from 'react-icons/fi'
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import { FaRegComment, FaRegHeart, FaRetweet} from 'react-icons/fa'
import { AllUserTweets } from './Allusertweet.styled'
import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import Slug from '../commentmodal/Commentmodal'

type Props = {}

const Allusertweet = (props: any) => {

  const { currentUser, suggestedUsers } = useContext(AppContext)
  
  const [postId, setPostId] = useState(props.allTweet?._id)
    const [likeTweet, setLikeTweet] = useState<boolean>(false)
  const [retweet, setRetweet] = useState<boolean>(false)
    const [likesArray, setLikesArray] = useState<any>(props.allTweet.likes)
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  const [commentModal, setCommentModal] = useState<boolean>(false)
  const [modalLink, setModalLink] = useState<string>("")
  const [urlParams, setUrlParams] = useState<string>(" ")
  const [getUsername, setGetUsername] = useState<string>("")

  const handleLikeEvent = () => {

    if (likesArray.includes(likesArray.username)) {
      console.log("You cannot like this tweet");
    }
    else {
      // const handleAddLike = async () => {
        const likeData = {
          username: currentUser.username,
          profileDp: currentUser?.profilePic,
          usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
          postId: props.allTweet._id,
        }
        axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
        setLikesArray([...likesArray, likeData])
        setNoOfLikesArray(likesArray?.length + 1);
      }
  }

   const removeLike = async () => {
    setLikeTweet(false)
    const likeData = {
      username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    } 	//takes the id of the post and removes it from the
    await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
    let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
    setLikesArray(filtered)
    setNoOfLikesArray(likesArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  }

   const handleClick = (e: any) => {
     e.preventDefault()
     setUrlParams(props.allTweet?._id)
     setCommentModal(true)
  };

  const handleLink = (e: any) => {
    e.preventDefault()
    setGetUsername(props.tweet?._username)
    //  setCommentModal(true)
  };
  
  const views = Math.floor(Math.random() * suggestedUsers?.length);

    
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
              <p onClick={handleClick} >
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35, color: '#71767B' }}
                      />
                }</p>
                  <span>{props.allTweet.comments?.length} </span>
              {commentModal ?  <div className="activeModal" ><Slug urlParams={urlParams} setCommentModal={setCommentModal} /> </div> : ""}
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
               {likesArray && (
                  <p>
                    {likesArray.some(
                      (e: any) => e.username == currentUser?.username
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
                        onClick={handleLikeEvent}
                        style={{ fontSize: 35, cursor: "pointer" }}
                      />
                    )}
                  </p>
                )}
              <span>{noOfLikesArray} </span>
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
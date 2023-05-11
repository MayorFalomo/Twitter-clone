import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import React, {useContext, useState} from 'react'
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
  const [likesArray, setLikesArray] = useState<any>()
  const [noOfLikesArray, setNoOfLikesArray] = useState<any>()
  const [commentModal, setCommentModal] = useState<boolean>(false)
  const [modalLink, setModalLink] = useState<string>("")
  const [urlParams, setUrlParams] = useState<string>(" ")
  const [getUsername, setGetUsername] = useState<string>("")
  const [modalActive, setModalActive] = useState<boolean>(false)

      const views = Math.floor(Math.random() * suggestedUsers?.length);

    const removeLike = async () => {
    }
    // SetLikeTweet(false)
    // const likeData = {
    //   username: currentUser.username,
    //   profileDp: currentUser?.profilePic,
    //   usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
    //   postId,
    // }
    // await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
    // let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
    // setLikesArray(filtered)
    // setNoOfLikesArray(likesArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
    //   const handleLikeEvent = () => {
    // if (likesArray.includes(likesArray.username)) {
    //   console.log("You cannot like this tweet");
    // }
    // else {
    //   // const handleAddLike = async () => {
    //     const likeData = {
    //       username: currentUser.username,
    //       profileDp: currentUser?.profilePic,
    //       usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
    //       postId: props.bookmark.postId,
    //     }
    //     axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
    //     setLikesArray([...likesArray, likeData])
    //     setNoOfLikesArray(likesArray?.length + 1);
    //   }
    // }
    // console.log(props.quotedProps);
    
    return (
      <QuotedReplies>
        <div className='postsContainer' >
            <Link href={'/users/' + props.quoted?.username} className="profilePicture" style={{ backgroundImage: `url(${props.quoted?.profileDp})` }} ></Link>
                 <div className='subPostsContainer'>
              <div className='flexTweetProfileDetails'>
                 <div className='tweetProfileDetails'>
              <Link href={'/users/' + props.quoted?.username} className='userName' > {props.quoted?.username} </Link>
              <span className='userAt'>{props.quoted?.usersAt}</span>
              <span className='createdAt' >{moment(props.quoted?.createdAt).format("MMMM D")} </span>
            </div>
                <div className='removeModalContainer'>
                  {<BiDotsHorizontalRounded  fontSize='30px' cursor='pointer' />}
                  {modalActive ? <span className='remove' >Remove bookmark </span> : ""}
                </div>
          </div>
          <p className='tweet-caption' >{props.quoted?.comments} </p>
            {props.quoted?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.quoted?.picture})` }} className='tweet-image' ></div> : ""}
            <div className='subQuotedTweet' >
              <div className='mainTweetDetails' >
              <span style={{ backgroundImage: `url(${props.quotedProps.profileDp})`}} className='profilePic' > </span>
              <span style={{fontSize: '24px'}} >{props.quotedProps.username} </span>
              <span style={{fontSize: '20px', color: 'rgb(113,118,123)', fontWeight: 500}} >{props.quotedProps.usersAt} </span>
                <span style={{fontSize: '20px', color: 'rgb(113,118,123)', fontWeight: 500, marginLeft: '20px', display: "list-item", listStyle: "disc outside none"}} >{moment(props.quotedProps?.createdAt).format("MMMM D")}  </span>
              </div>
              <p>{props.quotedProps.tweet} </p>
            </div>
          <div className='tweetOptions'>
            <div className='flexIconsAndValues'>
              <p>
                <FaRegComment
                  className="likeIcon"
                  style={{ cursor: "pointer", fontSize: 35 }}
                />
            </p>
              <span>{0} </span>
              {/* {commentModal ?  <div className="activeModal" ><Slug urlParams={urlParams} setCommentModal={setCommentModal} /> </div> : ""} */}
            </div>
            <div  className='flexIconsAndValues'>
              {retweet ? <p>
                {
                  <AiOutlineRetweet
                    onClick={() => setRetweet(false)}
                    className="likeIcon"
                    style={{ cursor: "pointer", fontSize: 35, color: "#00BA7C" }}/>
                  }</p>
                  :
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
            <div className='flexIconsAndValues'>
              {likeTweet ? (
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
                        style={{ fontSize: 35, cursor: "pointer" }}
                      />
                    )}
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
              <p >
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
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
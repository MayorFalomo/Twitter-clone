import Comments from '@/components/comments/Comments'
import Navbar from '@/components/navbar/Navbar'
import Quoted from '@/components/quoted-comment/Quoted-comment'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import Whotofollow from '@/components/whotofollow/Whotofollow'
import { AppContext } from '@/helpers/Helpers'
import { SingleTweetStyle } from '@/styles/Id.styled'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { AiOutlineBars, AiOutlineFileGif, AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowLeft, BsCardImage, BsEmojiSmile, BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { TbCalendarTime } from 'react-icons/tb'

type Props = {}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:7000/api/tweets')
  const data = await res.json()

  const paths = data.map((path: any) => {
    return {
          params: { id: path._id }
    }
  })
  return { 
    paths, 
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch('http://localhost:7000/api/tweets/' + id)
  const data = await res.json()
  console.log(context, "context");
  
  return {
    props: {
      tweetData: data
    },
  }
}

const Id = ({ tweetData }: any) => {
  
  const {currentUser, suggestedUsers, tweets, setTweets } = useContext(AppContext)
  
  const [tweetProps, setTweetProps] = useState<any>(tweetData)

  const [postId, setPostId] = useState(tweetData?._id)
  // const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, SetLikeTweet] = useState<boolean>(false)
  const [emoji, setEmoji] = useState<boolean>(false);
  const [everyOne, setEveryOne] = useState<boolean>(false);
  const [tweet, setTweet] = useState<string>("");
  const [picture, setPicture] = useState<string>("");
  const [video, setVideo] = useState<string>("");
  const [gif, setGif] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [cookies, setCookie] = useCookies(["user"])
  const [tweeterUser, setTweeterUser] = useState<any>([])
  const [successfulUpload, setSuccessfulUpload] = useState<boolean>(false)
  // const [comments, setComments] = useState<string>("")
  const [likesArray, setLikesArray] = useState<any>(tweetData?.likes)
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  const [retweet, setRetweet] = useState<boolean>(false)
  const [retweetArray, setRetweetArray] = useState<any>(tweetProps?.retweet)
  const [noOfRetweetArray, setNoOfRetweetArray] = useState<number>(retweetArray?.length)
  const [retweetModal, setRetweetModal] = useState<boolean>(false)
  const [urlParams, setUrlParams] = useState<string>(" ")
  const [quotedCommentModal, setQuotedCommentModal] = useState<boolean>(false)
  const [commentModal, setCommentModal] = useState<boolean>(false)


  useEffect(() => {
    axios.get(`http://localhost:7000/api/users/${currentUser?._id}`).then((res) => setTweeterUser(res.data)).catch((err) => console.log(err)
    )
  }, [currentUser?._id]); 

  const handleAddRetweet = async () => {
    setRetweetModal(false)
    const retweetData = {
       username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId: tweetProps._id,
    }
    await axios.put(`http://localhost:7000/api/tweets/retweet-tweet`, retweetData).catch((err) => console.log(err))
    setRetweetArray([...retweetArray, retweetData])    
    setNoOfRetweetArray(retweetArray.length + 1 );
  }

   const removeRetweet = async () => {
    setRetweet(false)
    const retweetData = {
      username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    }
    await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, retweetData).catch((err) => console.log(err))
    let filtered = retweetArray.filter((item: any) => item.username !== retweetData.username)
    setRetweetArray(filtered)
    setNoOfRetweetArray(retweetArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  }
  
  
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
          postId: tweetData._id,
        }
        axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
        setLikesArray([...likesArray, likeData]);
        setNoOfLikesArray(likesArray?.length + 1);
      }
  }
  
  // console.log(likesArray, "Thank");
  
  // }
  // const handleAddLike = async () => {
  //   const likeData = {
  //      username: currentUser.username,
  //     profileDp: currentUser?.profileDp,
  //     usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
  //     postId: props.tweet._id,
  //   }
  //   await axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
  //   setLikesArray([...likesArray, likeData])    
  //   setNoOfLikesArray(likesArray.length + 1 );
  // }

  const removeLike = async () => {
    SetLikeTweet(false)
    const likeData = {
      username: currentUser.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    }
    await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
    let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
    setLikesArray(filtered)
    setNoOfLikesArray(likesArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  }

  const handleClick = (e: any) => {
     e.preventDefault()
     setUrlParams(tweetProps?._id)
     setQuotedCommentModal(true)
  };
    // console.log(tweets, "This is tweets");

  const handleOpenAndClose = (e: any) => {
    e.preventDefault()
    setQuotedCommentModal(true);
    setUrlParams(tweetProps?._id)
    // setRetweetModal(false)
  }
 
  const params = useRouter()
  // console.log(params, "This is params");

  
  const views = Math.floor(Math.random() * suggestedUsers.length)


  // console.log(urlParams, "retweet Modal");
  
  return (
    <SingleTweetStyle>
      <div className={'singleTweetContainer'} >
        <Navbar />
        <div className='centerGridContainer' >
          {<div className={quotedCommentModal ? 'overlay' : "removeOverlay"} > </div>}
          <div className='centerGridHeader' >
            <Link href='/' ><span>{<BsArrowLeft fontSize='40px' cursor='pointer' />}  </span></Link>
              <h1>Thread </h1>
          </div>
          <div className='userDetailsContainer'>
          <div className='subUserDetailsContainer' >
            <div style={{ backgroundImage: `url(${tweetProps?.profileDp})` }} className='profilePic' > </div>
            <div>
            <h1>{tweetProps?.username} </h1>
              <p>{tweetProps?.usersAt} </p>
              </div>
            </div>
            <span>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />}</span>
          </div>
          <p className='tweetText'>{tweetProps?.tweet}</p>
          { tweetProps?.picture.length > 0 ? <div style={{ background: `url(${tweetProps?.picture})` }} className='picture' > </div> : ""}
          <div className='postDetailsContainer' >
            <div className='timeAndViews' >
              <span  style={{ color: "#575B5F", fontSize: 24, fontWeight: 600 }} > {moment(tweetProps?.createdAt).format('h:mm a')} </span>
              <span className="listStyle" style={{ color: "#575B5F", fontSize: 24, fontWeight: 600 }} >{moment(tweetProps?.createdAt).format("D MMMM, YYYY")} </span>
              <span className='listStyle'  style={{ color: "#575B5F", fontSize: 24, fontWeight: 600 }} > {views} Views</span>
            </div>
            <div className='tweetCount' >
              <div className='subTweetCount' >
              <p><span>{retweetArray.length} </span> Retweets </p>
              <p><span>{0} </span> Quotes </p>
              <p><span>{ likesArray.length} </span> Likes </p>
              <p><span>{0} </span> Bookmarks </p>
              </div>
              </div>
            </div>
            <div className='tweetOptions' >
            <div className='flexIconsAndValues' >
              <p>
                  {
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35}}
                      />
                }</p>
              <span>{tweetProps?.comments?.length} </span>
            </div>
            <div  className='flexIconsAndValues'>
               {retweetArray && (
                  <div className='retweetIcon'>
                    {retweetArray.some(
                      (e: any) => e.username == currentUser?.username
                    ) ? (
                      <AiOutlineRetweet
                        onClick={removeRetweet}
                        className='likeIcon'
                        style={{
                          color: "#00BA7C",
                          fontSize: 35,
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <AiOutlineRetweet
                        className='likeIcon'
                        onClick={() => setRetweetModal(true)}
                        style={{ fontSize: 35, cursor: "pointer",   }}
                      />
                  )}
                  {retweetModal ? <div className={retweetModal ? 'retweetModal' : "removeModal"} >
                <span onClick={handleOpenAndClose} >Quote Tweet </span>
                { quotedCommentModal ?  <div className="activeModal" ><Quoted urlParams={urlParams} setRetweetModal={setRetweetModal} quotedCommentModal={quotedCommentModal} setQuotedCommentModal={setQuotedCommentModal} setCommentModal={setCommentModal} /> </div> : null}
                <span onClick={handleAddRetweet} >Retweet </span>
              </div> : "" }
                  </div>
              )}
             
              <span>{noOfRetweetArray} </span>
            </div>
            <div className='flexIconsAndValues'>
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
              <span>{likesArray?.length} </span>
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
         
          <Comments tweetProps={tweetProps} setTweetProps={setTweetProps} />
        </div>
        <div className='leftGridSection' >
          <Search />
          {/* <Whotofollow /> */}
          <Trends/>
        </div>
      </div>
      </SingleTweetStyle>
  )
}

export default Id
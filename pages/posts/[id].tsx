import Comments from '@/components/comments/Comments'
import Navbar from '@/components/navbar/Navbar'
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
  
  const { suggestedUsers, tweets, setTweets } = useContext(AppContext)
  
  const [tweetProps, setTweetProps] = useState<any>(tweetData)


  const [retweet, setRetweet] = useState<boolean>(false)
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
  const [comments, setComments] = useState<string>("")



  useEffect(() => {
    axios.get(`http://localhost:7000/api/users/${cookies.user}`).then((res) => setTweeterUser(res.data)).catch((err) => console.log(err)
    )
  }, [cookies.user]);  
    // console.log(tweets, "This is tweets");

 
  const params = useRouter()
  // console.log(params, "This is params");

  
  const views = Math.floor(Math.random() * suggestedUsers.length)


  // console.log();
  
  return (
    <SingleTweetStyle>
      <div className='singleTweetContainer' >
        <Navbar />
        <div className='centerGridContainer' >
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
              <p><span>{0} </span> Retweets </p>
              <p><span>{0} </span> Quotes </p>
              <p><span>{ tweetProps.likes.length} </span> Likes </p>
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
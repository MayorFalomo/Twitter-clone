import { AppContext } from '@/helpers/Helpers'
import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import React, {useState, useContext, useEffect} from 'react'
import { AiOutlineRetweet, AiOutlineUpload } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'
import Slug from '../commentmodal/Commentmodal'
import { BookmarkStyle } from './Bookmark.styled'

type Props = {}

//Parent component is bookmarks.tsx
const Bookmark = (props: any) => {

    const { currentUser, suggestedUsers, bookmarks, setBookmarks, } = useContext(AppContext)
    
  const [postId, setPostId] = useState(props.bookmark?._id)
  const [retweet, setRetweet] = useState<boolean>(false)
  const [likeTweet, SetLikeTweet] = useState<boolean>(false)
  const [likesArray, setLikesArray] = useState<any>(props.bookmark.likes)
  const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  const [commentModal, setCommentModal] = useState<boolean>(false)
  const [modalLink, setModalLink] = useState<string>("")
  const [urlParams, setUrlParams] = useState<string>(" ")
  const [getUsername, setGetUsername] = useState<string>("")
  const [modalActive, setModalActive] = useState<boolean>(false)
    

      const handleLikeEvent = () => {
    if (likesArray.includes(likesArray.username)) {
      console.log("You cannot like this tweet");
    }
    else {
      // const handleAddLike = async () => {
        const likeData = {
          username: currentUser?.username,
          profileDp: currentUser?.profilePic,
          usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
          postId: props.bookmark.postId,
        }
        axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
        setLikesArray([...likesArray, likeData])
        setNoOfLikesArray(likesArray?.length + 1);
      }
  }

   const removeLike = async () => {
    SetLikeTweet(false)
    const likeData = {
      username: currentUser?.username,
      profileDp: currentUser?.profilePic,
      usersAt: currentUser?.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
      postId,
    }
    await axios.put(`https://twitter-clone-server-nu.vercel.app/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
    let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
    setLikesArray(filtered)
    setNoOfLikesArray(likesArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
    }
    
  const handleClick = (e: any) => {
     e.preventDefault()
     setUrlParams(props.tweet?._id)
     setCommentModal(true)
    };

     const handleRemoveBookmark = async () => {
    axios.delete(`https://twitter-clone-server-nu.vercel.app/api/bookmarks/delete-bookmark/${props.bookmark?.postId}`).catch((err) => console.log(err))
         let filtered = bookmarks.filter((bookmark: any) => bookmark.postId !== props.bookmark.postId)         
    setBookmarks(filtered)
         setModalActive(false)
         props.setRemovedBookmark(true)
        //  setTimeout(() => {
        //      props.setRemovedBookmark(false)
        //  }, 3000)
  }
  const [views, setViews] = useState<number>(0)

      useEffect(() => {
    const view = Math.floor(Math.random() * suggestedUsers?.length);
    setViews(view)
  }, [])

    const handleRemove = () => {
        setModalActive(true)
    }
    
    // console.log(props?.bookmark?.postId, "props");
    // console.log(bookmarks, "map over");
    

    return (
      <BookmarkStyle>
           <div className='postsContainer' >
            <Link href={'/users/' + props.bookmark?.username} className="profilePicture" style={{ backgroundImage: `url(${props.bookmark?.profileDp})` }} ></Link>
                 <div className='subPostsContainer' >
              <div className='flexTweetProfileDetails' >
                 <div className='tweetProfileDetails' >
              <Link href={'/users/' + props.bookmark?.username} className='userName' > {props.bookmark?.username} </Link>
              <span className='userAt'>{props.bookmark?.usersAt}</span>
              {props.tweet?.newDates == undefined ? <span className='createdAt' >{moment(new Date(props.bookmark?.createdAt)).fromNow()}</span> : <span className='createdAt' >a few seconds ago </span> }
            </div>
                <div className='removeModalContainer' >
                  {<BiDotsHorizontalRounded onClick={handleRemove} fontSize='30px' cursor='pointer' />}
                    {modalActive ? <span onClick={handleRemoveBookmark} className='remove' >Remove bookmark </span> : ""}
                </div>
          </div>
          <p className='tweet-caption' >{props.bookmark?.tweet} </p>
          {props.bookmark?.picture?.length > 1 ? <div style={{ backgroundImage: `url(${props.bookmark?.picture})` }} className='tweet-image' ></div> : ""}
            {props.bookmark?.video?.length > 1 ? <video controls src={`${props.bookmark?.video}`} className='tweet-video' ></video> : ""}
          <div className='tweetOptions'>
            <div className='flexIconsAndValues'>
              <p onClick={handleClick}>
                        <FaRegComment
                      className="likeIcon"
                      style={{ cursor: "pointer" }}
                      />
            </p>
              <span>{props.bookmark.comments?.length} </span>
              {commentModal ?  <div className="activeModal" ><Slug urlParams={urlParams} setCommentModal={setCommentModal} /> </div> : ""}
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
                    style={{ cursor: "pointer", }}
                  />
                }</p>}
              <span>{0} </span>
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
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <FaRegHeart
                        className='likeIcon'
                        onClick={handleLikeEvent}
                        style={{ cursor: "pointer" }}
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
                      style={{ cursor: "pointer", }}
                      />
                }</p>
              <span>{views.toLocaleString()}{views > 1000 ? "k" : ""} </span>
            </div>
            {/* <div>
              <p onClick={handleBookmark} >
                  {
                        <AiOutlineUpload
                      className="likeIcon"
                      style={{ cursor: "pointer", fontSize: 35 }}
                      />
                }</p>
            </div> */}
          </div>
            <div className='showThread' >
          <div style={{ cursor: "pointer", backgroundImage: `url(${props.bookmark?.profileDp})` }} className='subUserPhoto' > </div>
              <Link href={'/posts/' + props.bookmark?.postId} >
                <p>Show this thread </p>
              </Link>
            </div>
        </div>
            </div>
            </BookmarkStyle>
  )
}

export default Bookmark
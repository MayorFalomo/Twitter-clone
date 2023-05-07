import Bookmark from '@/components/bookmark/Bookmark'
import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import Whotofollow from '@/components/whotofollow/Whotofollow'
import { AppContext } from '@/helpers/Helpers'
import { BookmarkStyle } from '@/styles/Bookmarks.styled'
import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AiOutlineRetweet } from 'react-icons/ai'
import { BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'
import { FaRegComment, FaRegHeart } from 'react-icons/fa'

type Props = {}

const bookmarks = (props: Props) => {
  const { bookmarks, currentUser } = useContext(AppContext)

  //   const [postId, setPostId] = useState(props.tweet?._id)
  // const [retweet, setRetweet] = useState<boolean>(false)
  // const [likeTweet, SetLikeTweet] = useState<boolean>(false)
  // const [likesArray, setLikesArray] = useState<any>(props.tweet.likes)
  // const [noOfLikesArray, setNoOfLikesArray] = useState<number>(likesArray?.length)
  // const [commentModal, setCommentModal] = useState<boolean>(false)
  // const [modalLink, setModalLink] = useState<string>("")
  // const [urlParams, setUrlParams] = useState<string>(" ")
  // const [getUsername, setGetUsername] = useState<string>("")
  const [removedBookmark, setRemovedBookmark] = useState<boolean>(false)
  //  const handleLikeEvent = () => {

  //   if (likesArray.includes(likesArray.username)) {
  //     console.log("You cannot like this tweet");
  //   }
  //   else {
  //     // const handleAddLike = async () => {
  //       const likeData = {
  //         username: currentUser.username,
  //         profileDp: currentUser?.profilePic,
  //         usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
  //         postId: props.tweet._id,
  //       }
  //       axios.put(`http://localhost:7000/api/tweets/liketweet`, likeData).catch((err) => console.log(err))
  //       setLikesArray([...likesArray, likeData])
  //       setNoOfLikesArray(likesArray?.length + 1);
  //     }
  // }

  //  const removeLike = async () => {
  //   SetLikeTweet(false)
  //   const likeData = {
  //     username: currentUser.username,
  //     profileDp: currentUser?.profilePic,
  //     usersAt: currentUser.usersAt, 	//usersAt is a list of usernames, so it can be filtered out.
  //     postId,
  //   }
  //   await axios.put(`http://localhost:7000/api/tweets/unlike-tweet`, likeData).catch((err) => console.log(err))
  //   let filtered = likesArray.filter((item: any) => item.username !== likeData.username)
  //   setLikesArray(filtered)
  //   setNoOfLikesArray(likesArray?.length - 1)	//filtered is a array with all the items that are not the likeData.username, this is the
  // }
  // const handleClick = (e: any) => {
  //    e.preventDefault()
  //    setUrlParams(props.tweet?._id)
  //    setCommentModal(true)
  // };

  console.log(bookmarks);
  
  return (
    <BookmarkStyle>
    <div className="bookmarksContainer">
        <Navbar />
        <div className="centerGrid" >
          <div className="bookmarkHeader" >
            <div>
            <h2>Bookmarks </h2>
              <p>{currentUser?.usersAt} </p>
            </div>
            <span>{<BiDotsHorizontalRounded fontSize='40px' cursor='pointer' />}</span>
          </div>
          <div>
            {bookmarks?.map((bookmark: any) => (
              <div key={bookmark?.postId} >
                <Bookmark bookmark={bookmark} removedBookmark={removedBookmark} setRemovedBookmark={setRemovedBookmark} />
              </div>
            ))}
                  {removedBookmark ? <p className="bookmarkAdded" >Tweet removed from bookmarks</p> : ""}
          </div>
         
        </div>
      <div className='leftGrid' >
        <Search />
        <Trends />
        {/* <Whotofollow/> */}
      </div>
      </div>
      </BookmarkStyle>
  )
}

export default bookmarks
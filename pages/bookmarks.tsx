/* eslint-disable react-hooks/rules-of-hooks */
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

const bookmarks = (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { bookmarks, currentUser } = useContext(AppContext)

  
  const [removedBookmark, setRemovedBookmark] = useState<boolean>(false)
  
  
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
          {bookmarks?.length == 0 &&  <div className='numberOfBookmarks' >You have no bookmarks  </div>}
          <div className='bookmark' >
            {bookmarks?.map((bookmark: any) => (
              <div key={bookmark?.postId} >
                <Bookmark bookmark={bookmark} removedBookmark={removedBookmark} setRemovedBookmark={setRemovedBookmark} />
              </div>
            ))}
                  {removedBookmark ? <p className="bookmarkRemoved" >Removed from bookmarks</p> : ""}
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
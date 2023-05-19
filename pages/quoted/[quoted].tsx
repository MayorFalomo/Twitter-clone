/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from '@/components/navbar/Navbar'
import QuotedReply from '@/components/quotedreplies/QuotedReplies'
import QuotedReplies from '@/components/quotedreplies/QuotedReplies'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import { AppContext } from '@/helpers/Helpers'
import { QuotedStyle } from '@/styles/Quoted.styled'
import Link from 'next/link'
import React, {useContext, useState} from 'react'
import { BiArrowFromLeft, BiArrowToRight, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {}

export const getStaticPaths = async () => {
  const res = await fetch('https://twitter-clone-server-nu.vercel.app/api/tweets')
  const data = await res.json()

  const paths = data.map((path: any) => {
    return {
          params: { quoted: path._id }
    }
  })
  return { 
    paths, 
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params?.quoted;
  const res = await fetch('https://twitter-clone-server-nu.vercel.app/api/tweets/' + id)
  const data = await res.json()

  return {
    props: {
      quoted: data
    }    
  }
}

const quoted = ({ quoted }: any) => {

    const {currentUser, suggestedUsers, bookmarks, setBookmarks } = useContext(AppContext)

  const [quotedProps, setQuotedProps] = useState<any>(quoted)
  
  // console.log(quotedProps, "quoted Props");
  // console.log(quotedProps.quoted, "quoted Props id");

  // console.log(quotedProps, "quoted Object");
  
  

  return (
    <QuotedStyle>
       <div className="QuotedContainer">
        <Navbar />
        <div className="centerGrid" >
          <div className="quotedHeader" >
            <Link href={'/posts/' + quotedProps._id} ><p>{<BsArrowLeft cursor='pointer' />}</p></Link>
            <h2>Quoted Tweets </h2>
            </div>
          <div>
            {quotedProps.quoted?.length == 0 ? <h1 className='noQuotesText' > No quoted tweets  </h1> : quotedProps.quoted?.map((quoted: any) => (
              <div key={quoted?.newId} >
                <QuotedReply quoted={quoted} quotedProps={quotedProps} />
                {/* <Bookmark bookmark={bookmark} removedBookmark={removedBookmark} setRemovedBookmark={setRemovedBookmark} /> */}
              </div>
            ))}
                  {/* {removedBookmark ? <p className="bookmarkAdded" >Tweet removed from bookmarks</p> : ""} */}
          </div>
         
        </div>
      <div className='leftGrid' >
        <Search />
        <Trends />
        {/* <Whotofollow/> */}
      </div>
      </div>
      </QuotedStyle>
  )
}

export default quoted
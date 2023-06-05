/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from '@/components/navbar/Navbar'
import QuotedReply from '@/components/quotedreplies/QuotedReplies'
import QuotedReplies from '@/components/quotedreplies/QuotedReplies'
import Search from '@/components/search/Search'
import Trends from '@/components/trends/Trends'
import { AppContext } from '@/helpers/Helpers'
import { QuotedStyle } from '@/styles/Quoted.styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useContext, useState} from 'react'
import { BiArrowFromLeft, BiArrowToRight, BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {}

export const getStaticPaths = async () => {
  try {
    const res = await fetch('https://twitter-clone-server-nu.vercel.app/api/tweets');
    const data = await res.json();
    console.log(data?.posts, "this is data");
    
    const paths = data.posts?.map((tweet:any) => ({
      params: {
        quoted: tweet?._id.toString()
      }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: false
    };
  }
};

export const getStaticProps = async (context:any) => {
  try {
    const id = context.params.quoted;
    const res = await fetch(`https://twitter-clone-server-nu.vercel.app/api/tweets/${id}`);
    const data = await res.json();

    // console.log(data, 'getStatic Data');

    return {
      props: {
        quotedData: data
      }
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        quotedData: null
      }
    };
  }
};
const quoted = ({quotedData}: any) => {

  // console.log(quoteds);
  
    const {tweets, currentUser, suggestedUsers, bookmarks, setBookmarks } = useContext(AppContext)
const router = useRouter()
  console.log(router.query, "router query");
  
  const { quoted }  = router.query
  // console.log(quoted, "This is id");

  // const quotedProps = tweets.find((post: any) => post?._id === id)

  const [quotedProps, setQuotedProps] = useState<any>(quotedData)
  
  // console.log(quotedProps, "quoted Props");
  // console.log(quotedProps.quoted, "quoted Props id");

  // console.log(quotedProps, "quoted Object");
  
  // console.log(quotedProps, "this is quotedProps");
  

  return (
    <QuotedStyle>
       <div className="QuotedContainer">
        <Navbar />
        <div className="centerGrid" >
          <div className="quotedHeader" >
            <Link href={'/posts/' + quotedProps?._id } ><p>{<BsArrowLeft cursor='pointer' />}</p></Link>
            <h2>Quoted Tweets </h2>
            </div>
          <div>
            {quotedProps.quoted?.length == 0 ? <h2 className='noQuotesText' > Nothing to see here yet  </h2> : quotedProps.quoted?.map((quoted: any) => (
              <div key={quoted?.newId} >
                <QuotedReply quoted={quoted} quotedProps={quotedProps} />
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
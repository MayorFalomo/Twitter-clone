import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { Tweetstyled } from './Tweet.styled'

type Props = {}

const Tweet = (props: any) => {
  return (
      <Tweetstyled>
           <div className='postsContainer' >
                          <div className="profilePicture" style={{ backgroundImage: `url()` }} ></div>
          <div className='subPostsContainer' >
              <div className='flexTweetProfileDetails' >
                  <div className='tweetProfileDetails' >
                      <h2>username </h2>
                      <p>@profileName </p>
                      <span>time </span>
                  </div>
                  <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
                    </div>
                    <p className='tweet-caption' >Tweet would be here or caption </p>
                    {<div style={{backgroundImage: `url()`}} className='tweet-image' >Helloo</div>}
              </div>
              <a>Show this thread </a>
            </div>
    </Tweetstyled>
  )
}

export default Tweet
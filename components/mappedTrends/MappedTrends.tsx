import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

type Props = {}

const MappedTrends = (props: any) => {
  return (
     <div className='trendContainer' >
          <div className='subTrendContainer' >
              <p> Trending in <span className='location' >{props.trendingNews?.subsection }</span> </p>
              {/* <h4>{props.trendingNews?.title.slice(0, 18)}... </h4> */}
          </div>
            <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
            </div>
  )
}

export default MappedTrends
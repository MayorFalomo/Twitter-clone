import { TrendingStyled } from '@/styles/Trending.styled';
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

type Props = {}

const MappedTrends = (props: any) => {
  
  return (
    <TrendingStyled>
     <div className='trendContainer' >
          <div className='subTrendContainer' >
              <p style={{color: 'rgb(74,78,81)'}} > Trending in <span className='location' style={{color: 'rgb(74,78,81)'}} >{props.trendingNews?.subsection }us</span> </p>
              <h4>{props.trendingNews?.title}... </h4>
          </div>
            <div>{<BiDotsHorizontalRounded fontSize='20px' cursor='pointer' />} </div>
      </div>
      </TrendingStyled>
  )
}

export default MappedTrends
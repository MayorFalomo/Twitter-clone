import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { TrendStyle } from './Trend.style';

type Props = {}

const Trend = (props: any) => {
    // console.log(props.trends);
    
    return (
      <TrendStyle>
      <div className='trendContainer' >
          <div className='subTrendContainer' >
              <p> Trending in <span className='location' >{props.trends?.subsection }</span> </p>
              <h4>{props.trends?.title.slice(0, 18)}... </h4>
          </div>
            <div>{<BiDotsHorizontalRounded fontSize='30px' cursor='pointer' />} </div>
            </div>
            </TrendStyle>
  )
}

export default Trend
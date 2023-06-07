/* eslint-disable react-hooks/rules-of-hooks */
import MappedTrends from '@/components/mappedTrends/MappedTrends'
import MobileNav from '@/components/mobilenav/MobileNav'
import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/search/Search'
import Whotofollow from '@/components/whotofollow/Whotofollow'
import { TrendingStyled } from '@/styles/Trending.styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { RiSettings5Line } from 'react-icons/ri'

type Props = {}

const trending = (props: any) => {

    const [trendingObject, setTrendingObject] = useState<any>([])

    
   useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=25e9b037490044f88305b1f5b40c99ae`);
        const objects = res.data.articles.map((news:any) => {
            return {
                ids: Math.floor(Date.now() * Math.random()),
                ...news,
            };
        });
        setTrendingObject(objects);
    };

    fetchData();
}, []);
    
    return (
      <TrendingStyled>
      <div className='trendingContainer' >
          <Navbar />
                <div className='centerGrid'>
                    <div className='center-Header' >
                    <ul>
                        <li>{<BsArrowLeft  cursor='pointer' />} </li>
                        <li>Trends </li>
                    </ul>
                        <h1>{<RiSettings5Line cursor='pointer'/>} </h1>
                    </div>
                    <div>
                        {trendingObject?.map((trendingNews:any ) => {
                            return (
                                <div key={trendingNews?.ids }>
                                    <MappedTrends trendingNews={trendingNews} />
                                </div>
                            )
                        })}
                </div>
          </div>
          <div className='rightGrid' >
          <Search />
              <Whotofollow />
                </div>
                          <div className="mobileNav" > <MobileNav/></div>
            </div>
            </TrendingStyled>
  )
}

export default trending
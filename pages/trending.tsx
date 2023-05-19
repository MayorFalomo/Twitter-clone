/* eslint-disable react-hooks/rules-of-hooks */
import MappedTrends from '@/components/mappedTrends/MappedTrends'
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
    const [guardianObject, setGuardianObject] = useState<any>([])

    // useEffect(() => {
    //     axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GmA3xB7sjQZPAcxANOlKsTVftiyidoBC`)
    //         .then((res) => setTrendingObject(res.data.results))
    //         .catch((err) => console.log(err)
    //     )
    // },[])
    // useEffect(() => {
    //     axios.get(`https://content.guardianapis.com/search?page=2&q=debate&api-key=test`)
    //         .then((res) => setGuardianObject(res.data))
    //         .catch((err) => console.log(err)
    //     )
    // }, [])
    
    // const uniqueId = parseInt(Date.now() * Math.random());

    // console.log(trendingObject);
    

    return (
      <TrendingStyled>
      <div className='trendingContainer' >
          <Navbar />
                <div className='centerGrid'>
                    <div className='center-Header' >
                    <ul>
                        <li>{<BsArrowLeft fontSize='40px' cursor='pointer' />} </li>
                        <li>Trends </li>
                    </ul>
                        <h1>{<RiSettings5Line fontSize='40px' cursor='pointer'/>} </h1>
                    </div>
                    <div>
                        {/* {trendingObject.map((index: any, trendingNews:any) => {
                            return (
                                <div key={index}>
                                    <MappedTrends trendingNews={trendingNews} />
                                </div>
                            )
                        })} */}
                </div>
          </div>
          <div className='rightGrid' >
          <Search />
              <Whotofollow />
              </div>
            </div>
            </TrendingStyled>
  )
}

export default trending
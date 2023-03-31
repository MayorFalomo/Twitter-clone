import Navbar from '@/components/navbar/Navbar'
import Search from '@/components/search/Search'
import Whotofollow from '@/components/whotofollow/Whotofollow'
import { TrendingStyled } from '@/styles/trending.styled'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { RiSettings5Line } from 'react-icons/ri'

type Props = {}

const trending = (props: any) => {
    const [trendingObject, setTrendingObject] = useState<any>([])

    useEffect(() => {
        axios.get(``)
    })

    return (
      <TrendingStyled>
      <div className='trendingContainer' >
          <Navbar />
                <div className='centerGrid'>
                    <ul>
                        <li>{<BsArrowLeft/>} </li>
                        <li>Trends </li>
                    </ul>
              <h1>{<RiSettings5Line/>} </h1>
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
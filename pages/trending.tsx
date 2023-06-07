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
    const [guardianObject, setGuardianObject] = useState<any>([])

    
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
    
//    useEffect(() => {
//          axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GmA3xB7sjQZPAcxANOlKsTVftiyidoBC`)
//             .then((res) => setTrendingObject(res.data.results))
//             .catch((err) => console.log(err)25e9b037490044f88305b1f5b40c99ae
//         )
//     },[])
    
    // useEffect(() => {
    //     axios.get(`https://content.guardianapis.com/search?page=2&q=debate&api-key=test`)
    //         .then((res) => setGuardianObject(res.data.articles))
    //         .catch((err) => console.log(err)
    //     )
    // }, [])
    
    // const uniqueId = Math.floor(Date.now() * Math.random())
    // console.log(uniqueId, "This is uniqueId");
    

    // console.log(trendingObject, "This is newscatcher Obj");
    

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
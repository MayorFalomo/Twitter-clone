import axios from "axios";
import React, {useEffect, useState} from "react";
import Suggestedpeople from "../suggested/Suggestedpeople";
import Trend from "./Trend";
import { TrendStyle } from "./Trends.styled";
import Whotofollow from "./Whotofollow";

type Props = {};

const Trends = (props: any) => {

  const [trending, setTrending] = useState<any>([])
  const [seeMore, setSeeMore] = useState<number>(10)
  const [seeMoreUsers, setSeeMoreUsers] = useState<number>(3)
  const [suggestedUsers, setSuggestedUsers] = useState<any>([])


  useEffect(() => {
    axios.get(`http://api.mediastack.com/v1/news?access_key=ba0cdaef5f2c69f8e3a7d991247a6dca&countries%20=%20ng,-us`)
      .then((res: any) => setTrending(res.data.data)).catch((err: any) => console.log(err))
  }, [])


  useEffect(() => {
    axios.get(`http://localhost:7000/api/users`)
      .then((res: any) => setSuggestedUsers(res.data)).catch((err: any) => console.log(err))
  }, [])

  // console.log(Math.random());
  

 
  return <TrendStyle>
    <div className="trends" >
    <div className="subTrendsContainer" >
      <h1>Trends For you </h1>
      <div className="mappedContainer" >
        {trending.slice(0, seeMore).map((trends:any,index: number) => (
          <div key={index} className="trends">
            <Trend  trends={trends} />
          </div>
        ))}
        </div>
        <p className="showMore" >Show more </p>
      </div>
      <div className="suggestFollows" >
        <h1>Who to follow </h1>
         <div className="mapContainer" >
          {suggestedUsers.slice(0, seeMoreUsers).map((suggestedUser: any, index: string) => (
            <div key={index} className='whoToFollow' >
              <Suggestedpeople suggestedUser={suggestedUser} />
            </div>
          ))}
          <p className="showUsers" >Show more </p>
        </div>
      </div>
      </div>
  </TrendStyle>;
};

export default Trends;

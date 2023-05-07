import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";
// import Suggestedpeople from "../suggested/Suggestedpeople";
import Trend from "./Trend";
import { TrendStyle } from "./Trends.styled";
import Whotofollow from "../whotofollow/Whotofollow";

type Props = {};

const Trends = (props: any) => {

  const [trending, setTrending] = useState<any>([])
  const [seeMore, setSeeMore] = useState<number>(10)
 

  useEffect(() => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=GmA3xB7sjQZPAcxANOlKsTVftiyidoBC`)
      .then((res: any) => setTrending(res.data.results)).catch((err: any) => console.log(err))
  }, [])  

  // console.log(trending);
  

 
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
        <Link href='/trending' ><p className="showMore" >Show more </p></Link>
      </div>
     <Whotofollow/>
      </div>
  </TrendStyle>;
};

export default Trends;

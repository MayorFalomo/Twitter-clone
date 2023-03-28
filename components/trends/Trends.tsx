import axios from "axios";
import React, {useEffect, useState} from "react";
import Trend from "./Trend";
import { TrendStyle } from "./Trends.styled";

type Props = {};

const Trends = (props: any) => {

  const [trending, setTrending] = useState<any>([])

  useEffect(() => {
    axios.get(`http://api.mediastack.com/v1/news?access_key=ba0cdaef5f2c69f8e3a7d991247a6dca&countries%20=%20ng,-us`)
      .then((res: any) => setTrending(res.data.data)).catch((err: any) => console.log(err))
  }, [])

 
  return <TrendStyle>
    <div className="trendsContainer" >
      <h1>Trends For you </h1>
      <div>
        {trending.map((index: number) => {
          <div key={index} className="">
            <Trend  trending={trending} />
          </div>
        })}
        </div>
      </div>
  </TrendStyle>;
};

export default Trends;

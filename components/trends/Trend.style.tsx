import styled from "styled-components";

export const TrendStyle = styled.div`
   .trendContainer{
    margin: auto 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .subTrendContainer{
        padding: 10px 0;
        /* border: 2px green solid; */
        p{
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: rgb(113,118,123);
            span{
                display: list-item;
                list-style: disc outside none;
                margin-left: 25px;
                font-size: 20px;
                color: rgb(113,118,123);
            }
        }
        h4{
            /* font-size: 20px; */
            font-size: calc(16px + 0.25vw);
            margin-top: 5px;
        }
    }
   }
`
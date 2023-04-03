import styled from "styled-components";

export const TrendingStyled = styled.div`
.trendingContainer{
    display: grid;
    grid-template-columns: 400px auto 650px;
    margin: 0 10%;
    overflow: hidden;
    /* height: 100vh; */
    /* border: 2px solid blue; */
 .centerGrid{
        border: 1px rgb(47, 51, 54) solid;
        /* display: flex;
        align-items: center;
        justify-content:space-between;
        gap: 20px; */
        .center-Header{
            display: flex;
            justify-content:space-between;
            align-items:center;
            /* border: 2px red solid; */
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.6px);
            -webkit-backdrop-filter: blur(7.6px);
            position: sticky;
            top: 0;
            left: 0;
            padding: 40px;
            ul{
            display: flex;
            align-items:center;
            gap: 30px;
            /* border: 3px solid blue; */
            li{
                font-size: 32px;
                list-style: none;
            }
        }
        }
    }
    }
`
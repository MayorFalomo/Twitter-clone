import styled from "styled-components";

export const TrendingStyled = styled.div`
.trendingContainer{
    display: grid;
    grid-template-columns: 400px auto 650px;
    margin: 0 10%;
    overflow: hidden;
    height: 100vh;
    /* border: 2px solid red; */
   
}
 .centerGrid{
        border: 2px green solid;
        display: flex;
        align-items: center;
        justify-content:space-between;
        gap: 20px;
        ul{
            display: flex;
            align-items:center;
            gap: 20px;
            border: 2px solid red;
        }
    }
`
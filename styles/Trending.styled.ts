import styled from "styled-components";

export const TrendingStyled = styled.div`
.trendingContainer{
    display: grid;
    grid-template-columns: 400px auto 650px;
    margin: 0 10%;
    overflow: hidden;
 .centerGrid{
        border: 1px rgb(47, 51, 54) solid;
        .center-Header{
            display: flex;
            justify-content:space-between;
            align-items:center;
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
            li{
                font-size: 32px;
                list-style: none;
            }
        }
        }
    }
        .mobileNav{
    display: none;
  }
  @media (max-width: 600px ) {
    .mobileNav{
      display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: black;
  }
  }
}
`
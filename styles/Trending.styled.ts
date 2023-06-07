import styled from "styled-components";

export const TrendingStyled = styled.div`
.trendingContainer{
    display: grid;
    grid-template-columns: 400px auto 600px;
    margin: 0 10%;
    overflow: hidden;
     height: 100vh;
       @media (max-width: 2070px ) {
      display: grid;
      grid-template-columns: 400px auto 500px ; 
    }
    @media (max-width: 1830px ) {
      display: grid;
      grid-template-columns: 400px auto 400px ; 
    }
    @media (max-width: 1700px ) {
      display: grid;
      grid-template-columns: 400px auto 400px ; 
      margin: 0 5%;
    }
    @media (max-width: 1500px ) {
      display: grid;
      grid-template-columns: 100px auto 400px ; 
      margin: 0 5%;
    }
    @media (max-width: 1300px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 10%;
    } 
    @media (max-width: 900px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 5%;
    }
    @media (max-width: 620px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 auto;
    }
    @media (max-width: 600px ) {
      display: grid;
      grid-template-columns:0 auto 0; 
      margin: 0 auto;
    }
 .centerGrid{
  overflow: auto;
        border-left: 1px rgb(47, 51, 54) solid;
        border-right: 1px rgb(47, 51, 54) solid;
        .center-Header{
            display: flex;
            justify-content:space-between;
            align-items:center;
            background: rgba(255, 255, 255, 0);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.6px);
            -webkit-backdrop-filter: blur(7.6px);
            position: sticky;
            top: 0;
            left: 0;
            padding: 20px;
            ul{
            display: flex;
            align-items:center;
            gap: 30px;
            li{
                font-size: calc(24px + 0.25vw);
                list-style: none;
            }
        }
        }
    }
    .centerGrid::-webkit-scrollbar{
      width: 0px;
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
  .trendContainer {
    margin: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    h4{
      font-size: calc(12px + 0.25vw );
      font-weight: 800;
      line-height: 30px;
    }
  }
}
`
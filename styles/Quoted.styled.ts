import styled from "styled-components";

export const QuotedStyle = styled.div`
.QuotedContainer{
     display: grid;
    grid-template-columns: 400px auto 600px;
    overflow: hidden;
    height: 100vh;
    margin: 0 10%;
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
    .centerGrid::-webkit-scrollbar {
          width: 0;
    }
    .centerGrid{
        overflow: auto;
        height: 100vh;
        border-right: 1px solid rgb(47, 51, 54);
        border-left: 1px solid rgb(47, 51, 54);
        .noQuotesText{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .quotedHeader{
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.6px);
            -webkit-backdrop-filter: blur(7.6px);
            position: sticky;
            top: 0;
            left: 0;
            /* padding: 15px; */
            z-index: 999;
            width: 100%;
        }
        p{
            font-size: calc(22px + 0.25vw);
        }
    }
     .leftGrid{
    overflow: auto;
    position: relative;
  }
   .leftGrid::-webkit-scrollbar {
          width: 0;
    }
     .bookmarkAdded {
    background-color: #1d9aef;
    color: #fff;
    padding: 15px 20px;
     margin: auto;
    position: fixed;
    left: 40%;
    bottom: 70px;
    z-index: 999;
    font-size: 24px;
    z-index: 9999;
    border-radius: 15px;
    /* left: 50%;
    right: 50%; */
    /* width: ; */
    }
    
}
`
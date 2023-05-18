import styled from "styled-components";

export const HomeContainer = styled.div`
  border: 1px rgb(47, 51, 54) solid;
    .mainHomePage {
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
      grid-template-columns:auto; 
      margin: 0 auto;
    }
    .trendsContainer {
    /* border: 2px red solid; */
    overflow: auto;
    position: relative;
    @media (max-width: 1300px ) {
      display: none;
    }
  }
   main::-webkit-scrollbar {
          width: 0;
        }
  }
  .trendsContainer::-webkit-scrollbar {
    width: 0;
  }
  main{
      border: 1px rgb(47, 51, 54) solid;
      overflow: auto;
       height: 100vh;
        width: 100%;
        /* border: 6px green solid; */
       position: relative;

  .homeHeader {
     background-color: rgba(0, 0, 0, 0.5); 
     backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    padding: 20px 0;
    .homeHeading {
    }
    h1 {
      font-size: 35px;
      /* font-size: calc(18px + 0.25vw); */
      padding: 20px;
      /* margin: 10px 10px; */
    }
  }
  .centerGrid {
    /* border: 1px solid green; */
  }
  .postGroup {
    display: flex;
    justify-content: space-around;
    /* border: 2px red solid; */
    a {
      /* font-size: 20px; */
      /* border: 1px yellow solid; */
      width: 60%;
      padding-top: 10px;
      text-align: center;
      cursor: pointer;
      /* @media (max-width: 420px ) {
        a{
          width: 40%;
        }
      } */
    }
    a:hover {
      background-color: rgb(47, 51, 54);
    }
    li {
      /* border: 1px red solid; */
      width: 50%;
      margin: 0 auto;
      padding: 10px 20px;
      list-style: none;
      /* font-size: 24px; */
      font-size: calc(18px + 0.25vw);
       @media (max-width: 440px ) {
        width: 100%;
        padding: 10px 0;
      }
    }
    .linkActive li {
      border-bottom: 6px #1d9aef solid;
    }
    .link {
      color: #575b5f;
    }
  }
  
}
`;

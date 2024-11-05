import styled from "styled-components";

export const HomeContainer = styled.div`
  /* border: 1px red solid; */
  /* border: 1px rgb(47, 51, 54) solid; */
    .mainHomePage {
    display: grid;
    grid-template-columns: 400px auto 500px;
      overflow: hidden;
    height: 100vh;
    margin: 0 5%;
    position: relative;
    @media (max-width: 2070px ) {
      display: grid;
      grid-template-columns: 400px auto 480px ; 
    }
    @media (max-width: 1830px ) {
      display: grid;
      grid-template-columns: 400px auto 450px ; 
            /* border: 2px yellow solid; */
    }
    @media (max-width: 1700px ) {
      display: grid;
      grid-template-columns: 350px auto 450px ; 
      margin: 0 5%;
      /* border: 2px red solid; */
    }
    @media (max-width: 1500px ) {
      display: grid;
      grid-template-columns: 100px auto 400px ; 
      margin: 0 5%;
            /* border: 2px blue solid; */

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
  .trendsContainer::-webkit-scrollbar {
    width: 0;
  }
  main{
      border: 1px rgb(47, 51, 54) solid;
      overflow: auto;
       height: 100vh;
        width: 100%;
       position: relative;


  .homeHeader {
     background-color: rgba(0, 0, 0, 0.5); 
     backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99999999;
    padding: 15px 0;
    border-bottom: rgb(47, 51, 54) 1px solid;
    .homeHeading {
    }
    h1 {
      font-size: calc(22px + 0.25vw);
      padding: 20px;
      @media 	(max-width: 600px ){
        display: none;
      }
    }
    .hiddenloginLogo{
      font-size: calc(26px + 0.25vw);
      margin-left: 10px;
      visibility: hidden;
    }
    .loginLogo{
      font-size: calc(26px + 0.25vw);
      margin-left: 10px;
    }
    .mobileHeader{
      display: none;
      @media (max-width: 600px ) {
      display:flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      width: 100%;
      margin: auto;
      top: 0;
      z-index: 999999;
      transition-timing-function: ease-in;
      transition: 0.4s;
      .profilePicHeader{
        width: 40px;
        height: 40px;
        background-color: #000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        border: 1px solid rgb(47, 51, 54);
        border-radius: 50%;
        position: absolute;
        left: 10px;
        top: -10px;
        z-index: 9;
      }
      .loginLogo{
        z-index: 9999;
      }
    }
    .closedNavigation{
      position: fixed;
      left: -200vw;
      top: 0;
      width: 50vw;
      height: 100vh;
      background-color: #000;
      transition:all 0.4s ease;
    }
    .openNavigation{
      position: fixed;
      left: 0;
      top: 0;
      width: 80vw;
      height: 100vh;
      background-color: #000;
      z-index: 99999999999999;
      transition: all 0.4s ease;
    }
    }
  }
  .centerGrid {
    /* border: 1px solid green; */
  }
  .postGroup {
    display: flex;
    justify-content: space-around;
    @media (max-width: 460px ) {
     display: none;
    }
    a {
      width: 60%;
      padding-top: 10px;
      text-align: center;
      cursor: pointer;
      @media (max-width: 600px ) {
          padding-top: 0px;
          margin-top: 20px;
      }
      /* @media (max-width: 460px ) {
     display: none;
     visibility: hidden;
    } */
    }
    a:hover {
      background-color: #181818;
    }
    li {
      width: 50%;
      margin: 0 auto;
      padding: 10px 20px;
      list-style: none;
      font-size: calc(18px + 0.25vw);
       @media (max-width: 440px ) {
        width: 100%;
        margin-top: 10px;
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

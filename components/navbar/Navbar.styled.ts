import styled from "styled-components";

export const NavContainer = styled.div`
  /* border: 2px green solid; */

  .navContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 50px;
    height: 100vh;
    /* border-right: 1px rgb(47, 51, 54) solid; */
    .subNavContainer {
      /* border: 2px blue solid; */
      /* padding: 20px; */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      width: 100%;
      .logoContainer {
        display: flex;
        justify-content: flex-start;
        width: 70%;
        .twitterLogo {
          padding: 10px 10px;
          border-radius: 50%;
          margin-top: 20px;
          font-size: 35px;
        }
        .twitterLogo:hover {
          background-color: rgb(47, 51, 54);
        }
      }
   
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      /* border: 2px blue solid; */
      width: 100%;
      li{
        /* border: 2px yellow solid; */
        width: 100%;
        a{
        display: flex;
        align-items: center;
        gap: 20px;
        width: 60%;
         border-radius: 25px;
          /* border: 2px red solid; */
          padding: 10px;
          cursor: pointer;
       span{
        font-size: 25px;
       }
        
      }
       .navIcon{
          font-size:35px;
          /* border: 2px blue solid; */
        }
         a:hover {
            background-color: rgb(47, 51, 54);
          }
          
      }
      .tweetBtn{
        width: 80%;
         padding-top: 15px;
         padding-bottom: 15px;
        padding-left: 5px;
        border-radius: 35px;
        text-align: center;
        background-color: #1d9aef;
        border: none;
        outline: none;
        font-size: 25px;
        cursor: pointer;
        color: white;
      }
      }
      .writeTweet {
        /* border: 2px red solid; */
        padding: 15px;
        border-radius: 50%;
        background-color: #1d9aef;
        display: none;
      }
    }
   

    .bgImg {
      border: 2px rgb(47, 51, 54) solid;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .navProfile {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 20px;
      .navSubProfile {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
  }
`;

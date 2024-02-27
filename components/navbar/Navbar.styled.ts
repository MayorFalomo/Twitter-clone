import styled from "styled-components";

export const NavContainer = styled.div`
  /* border: 4px green solid; */
  nav{
    @media(max-width: 600px) {
      display: none;
    }
    .navContainer::-webkit-scrollbar{
      width: 0;
    }
    
  .navContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    gap: 50px;
    height: 100vh;
    overflow: auto;
    /* border-right: 1px rgb(47, 51, 54) solid; */
    .subNavContainer {
      /* border: 2px blue solid; */
      /* padding: 20px; */
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      width: 100%;
      .logoContainer {
        display: flex;
        justify-content: flex-start;
        width: 70%;
        /* border: 2px red solid; */
         @media (max-width: 1500px ) {
          display: flex;
          justify-content: flex-end;
         width: 90%;
        }
        .twitterLogo {
          padding: 10px 10px;
          border-radius: 50%;
          margin-top: 20px;
          font-size: calc(28px + 0.25vw);
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
        list-style: none;
        width: 100%;
        .navLinkItems{
        display: flex;
        align-items: center;
        gap: 20px;
        width: 60%;
         border-radius: 25px;
          /* border: 2px red solid; */
          padding: 10px;
          cursor: pointer;
          @media (max-width: 1500px) {
            display: flex;
            justify-content: flex-end;
            width: 90%;
          }
       .links{
        /* border: 2px blue solid; */
          font-size: calc(22px + 0.25vw);
        @media (max-width: 1500px ) {
          display: none;
        }
       }
        
      }
       .navIcon{
          font-size: calc(28px + 0.25vw);
          /* border: 2px blue solid; */
        }
        .navLinkItems{
          position: relative;
          /* border: #1d9aef 2px solid; */
          .noOfNotifications {
            position: absolute;
            left: 5px;
            top: 5px;
           width: 20px;
           height: 20px;
           display: flex;
           justify-content: center;
           align-items: center;
           padding: 5px 10px;
           transform: translate(40%, -15%);
            background-color: #1d9aef;
            color: #fff;
            border-radius: 50%;
            font-size: calc(10px + 0.25vw );
            @media (max-width: 1500px) {
              position: absolute;
              left: 55px;
            }
            @media (max-width: 1300px) {
              position: absolute;
              left: 28px;
            }
          }
        }
         .navLinkItems:hover {
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
        @media (max-width: 1500px ) {
          display: none;
        }
      }
       /* .tweetIconBtn{
       display: none;
        @media (max-width: 1500px ) {
           display: flex;
           justify-content: flex-end;
        border-radius: 40px;
        text-align: center;
        background-color: #1d9aef;
        border: none;
        outline: none;
        font-size: 35px;
        cursor: pointer;
        color: white;
        }
      } */
      .quill{
        /* border: 2px red solid; */
        display: none;
        .tweetIconBtn{
          /* border: 2px green solid; */
          display: flex;
          justify-content: flex-end;
          width: 90%;
          font-size: 35px;
          /* border-radius: 50%; */
          /* padding: 20px; */
        }
        @media (max-width: 1500px) {
          display: flex;
        }
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
    .navProfileFlex{
      /* border: 2px solid blue; */
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 20px;
      position: relative;
      /* border: 2px green solid; */
       /* @media (max-width: 1500px) {
          display: flex;
          justify-content: flex-end;
        } */
    .bgImg {
      border: 2px rgb(47, 51, 54) solid;
      height: 70px;
      width: 70px;
      min-width: 70px !important;
      min-height: 70px !important;
      border-radius: 50%;
      margin-right: 10px;
      background-color: black;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      object-fit: cover;
       @media (max-width: 1400px) {
         position: absolute;
         right: 0px;
         z-index: 9999;
          height: 40px;
      width: 40px;
          min-width: 40px;
      min-height: 40px;
        }
    }
    .navProfile {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      cursor: pointer;
      /* border: 2px red solid; */
        @media (max-width: 1500px) {
          display: flex;
          justify-content: flex-end;
        }
      .navSubProfile {
        display: flex;
        flex-direction: column;
        gap: 5px;
        /* border: 2px solid red; */
        @media (max-width: 1500px) {
          display: none;
        }
      }
     
    }
   
     .logOutIcon{
        /* border: 2px solid red; */
        @media (max-width: 1500px) {
          display: none;
        }
      }
      .logOutCon{
        position: absolute;
        top: -60px;
        left: 10px;
        z-index: 99999999999999999;
       border-radius: 50px;
       background: #000;
       border-radius: 10px;
       padding: 20px 10px;
       background: #000;
       box-shadow:  20px 10px 60px rgb(47, 51, 54),
             -20px -20px 60px #000;
      font-size: calc(16px + 0.25vw);
        cursor: pointer;
        width: 80%;
         @media (max-width: 1500px) {
        display: none;
        }
      }
  }
   .navProfileFlex:hover{
      background-color: rgb(47, 51, 54, 0.3);
      border-radius: 20px;
    }
}
.overlay{
  /* width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #242D34;
  z-index: 1; */
}
  }
`;

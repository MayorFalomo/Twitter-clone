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
        /* border: 2px red solid; */
        display: flex;
        justify-content: flex-start;
        width: 70%;
        .twitterLogo {
          padding: 10px 10px;
          border-radius: 50%;
          margin-top: 20px;
        }
        .twitterLogo:hover {
          background-color: rgb(47, 51, 54);
        }
      }
    }
    span {
      font-size: 35px;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin-right: 20px;
      /* border: 2px red solid; */
      width: 100%;
      a {
        font-size: 25px;
        cursor: pointer;
      }

      li {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 25px;
        width: 60%;
        padding: 5px;
        padding-left: 5px;
        border-radius: 35px;
        /* border: 2px yellow solid; */
        .tweetBtn {
          background-color: #1d9aef;
          width: 90%;
          text-align: center;
          padding: 15px 25px;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          font-weight: 700;
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
    li:hover {
      background-color: rgb(47, 51, 54);

      /* transition: 0.5s ease all; */
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

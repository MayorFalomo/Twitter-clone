import styled from "styled-components";

export const TweetModalStyled = styled.div`
  .tweetPostContainer {
    height: 100vh;
    width: 100vw;
    .heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      .tweetButton button {
        padding: 10px 25px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 18px;
        background-color: #1d9aef;
        color: #fff;
        border-radius: 25px;
      }
      .btn-primary {
        opacity: 0.4;
      }
    }
    form {
      width: 100%;
      position: relative;
      /* border: 2px red solid; */
      .textAreaContainer {
        position: relative;
        width: 100%;
      }

      textArea {
        width: 100%;
        height: 170px;
        background-color: transparent;
        border: none;
        font-size: calc(15px + 0.25vw);
        outline: 0;
        color: white;
        white-space: wrap;
        resize: none;
        margin-top: 30px;
        padding-top: 8px;
        padding-left: 5px;
        font-family: "Open sans";
        overflow: auto;
        line-height: 30px;
      }
      textArea::placeholder {
        font-size: calc(16px + 0.25vw);
        padding: 15px;
      }
      select {
        outline: none;
        padding: 7px 15px;
        border-radius: 20px;
        background-color: transparent;
        color: #1d9aef;
        font-size: calc(7px + 0.25vw);
      }
      .flexIcons {
        display: flex;
        align-items: center;
        gap: 20px;
        color: #1d9aef;
        width: 100%;
        position: absolute;
        bottom: -55px;
        left: 10px;
        .tweetIcons {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 30px;
          .locationIcon {
            opacity: 0.5;
            cursor: default;
          }
          label {
            font-size: calc(20px + 0.25vw);
            cursor: not-allowed;
          }
          span {
            font-size: calc(20px + 0.25vw);
            cursor: not-allowed;
          }
        }
        .pickerEmoji {
          position: absolute;
          left: 0px;
          bottom: -450px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
    .subTweetPostContainer {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      border-bottom: 2px rgb(47, 51, 54) solid;
      position: relative;
      .formArea {
        /* border: 2px solid green; */
        width: 100%;
      }
      .userProfilePicture {
        min-height: 50px;
        min-width: 50px;
        border-radius: 50%;
        border: 1px white solid;
        background-color: #000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
      }
    }
  }
`;

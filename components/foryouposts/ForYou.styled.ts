import styled from "styled-components";

export const ForYouContainer = styled.div`
  /* border: 2px blue solid; */
  margin-top: 10px;
  .forYouPostContainer {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    .userProfilePicture {
      min-height: 70px;
      min-width: 70px;
      border-radius: 50%;
      border: 1px white solid;
    }
    form {
      width: 100%;
      .textAreaContainer {
        position: relative;
        width: 100%;
      }

      textarea {
        width: 100%;
        height: 170px;
        background-color: transparent;
        border-left: none;
        border-right: none;
        border-top: none;
        font-size: 25px;
        outline: 0;
        color: white;
      }
      textarea::placeholder {
        font-size: 28px;
        padding-top: 60px;
      }
      select {
        /* border: none; */
        outline: none;
        padding: 7px 15px;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
        position: absolute;
        left: 20px;
        top: 10px;
        background-color: transparent;
        color: #1d9aef;
        font-size: 20px;
      }
      .flexIcons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        color: #1d9aef;
        .tweetIcons {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 30px;
          /* border: 2px red solid; */
          .locationIcon {
            opacity: 0.5;
            cursor: default;
          }
        }
        .tweetButton button {
          padding: 7px 25px;
          cursor: pointer;
          font-size: 18px;
          background-color: #1d9aef;
          color: #fff;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
        }
      }
    }
    /* option {
      border: none;
      outline: 0;
    } */
  }
`;

import styled from "styled-components";

export const ForYouContainer = styled.div`
  margin-top: 20px;
  .forYouPostContainer {
    display: flex;
    align-items: flex-start;
    gap: 10px;
      border-bottom: 2px rgb(47, 51, 54) solid;

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

      textArea {
        width: 100%;
        height: 170px;
        background-color: transparent;
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom: none;
        font-size: 25px;
        outline: 0;
        color: white;
        white-space: wrap;
        resize: none;
      }
      textArea::placeholder {
        font-size: 28px;
        padding: 60px;
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
        position: absolute;
        bottom: 15px;
        width: 100%;

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
        .pickerEmoji{
          position: absolute;
          bottom: -450px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .tweetButton button {
          padding: 10px 25px;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 18px;
          background-color: #1d9aef;
          color: #fff;
          border-radius: 25px;
          /* border-bottom-left-radius: 25px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px; */
        }
        .btn-primary{
          opacity: 0.4;
        }
      }
    }
    /* option {
      border: none;
      outline: 0;
    } */
  }
`;

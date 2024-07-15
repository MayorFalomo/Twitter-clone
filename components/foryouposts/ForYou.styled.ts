import styled from "styled-components";

export const ForYouContainer = styled.div`
  /* margin-top: 20px; */
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
      background-color: #000;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      object-fit: cover;
      margin-top: 5px;
       @media (max-width: 500px ) {
        display: none;
      }
    }
    form {
      width: 100%;
      margin-top: 5px;
      /* border: 2px red solid; */
      @media (max-width: 500px ) {
        display: none;
      }
      .textAreaContainer {
        position: relative;
        width: 100%;

      }

      textArea {
         /* border: 2px yellow solid; */
        width: 100%;
        height: 170px;
        background-color: transparent;
        border: none;
        font-size: calc(15px + 0.25vw);
        outline: 0;
        color: white;
        white-space: wrap;
        resize: none;
        padding-top: 8px;
        padding-left: 5px;
      }
      textArea::placeholder {
        font-size: calc(18px + 0.25vw);
        padding: 50px;
      }
      select {
        outline: none;
        padding: 7px 15px;
        border-radius: 20px;
        /* position: absolute;
        left: 20px;
        top: 10px; */
        background-color: transparent;
        color: #1d9aef;
        font-size: calc(6px + 0.25vw);
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
          .locationIcon {
            opacity: 0.5;
            cursor: not-allowed;
          }
          label{
              font-size: calc(20px + 0.25vw);
              cursor: not-allowed;
          }
          span{
            font-size: calc(20px + 0.25vw);
            cursor: not-allowed;
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
          font-size: 17px;
          background-color: #1d9aef;
          color: #fff;
          border-radius: 25px;
        }
        .btn-primary{
          opacity: 0.4;
        }
      }
    }
  }
`;

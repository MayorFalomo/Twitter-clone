import styled from "styled-components";

export const TweetOptionStyled = styled.div`
  .tweetOptions {
    position: absolute;
    top: 8px;
    left: -300px;
    width: 350px;
    height: fit-content;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background-color: #000;
    color: white;
    z-index: 99;
    background-color: #000;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 20px;
      li {
        list-style: none;
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        gap: 10px;
        padding: 10px 0px;
        cursor: pointer;
        span {
          font-size: calc(15px + 0.25vw) !important;
        }
        .optionsIcon {
          font-size: calc(14px + 0.25vw) !important;
        }
        .loader {
          width: 18px;
          height: 18px;
          border: 3px solid #1d9aef;
          margin-left: 20px;
          /* border: 5px solid #FFF; */
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          box-sizing: border-box;
          animation: rotation 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
  }
`;

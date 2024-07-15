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
        gap: 10px;
        padding: 10px 0px;
        cursor: pointer;
        span {
          font-size: calc(15px + 0.25vw) !important;
        }
        .optionsIcon {
          font-size: calc(14px + 0.25vw) !important;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const TagModalStyle = styled.div`
  .modalContainer {
    position: absolute;
    left: 30px;
    top: 70px;
    z-index: 99999999999;
    width: 200px;
    background-color: black;
    color: white;
    padding: 10px;
    height: auto;
    max-height: 300px;
    overflow: auto;
    /* display: flex;
    align-items: flex-start; */
    .taggedPerson {
      padding-top: 7px;
      padding-bottom: 7px;
      /* display: flex;
      align-items: flex-start;
      gap: 5px; */
      .tagView {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        /* border: 1px white solid; */
        .imgData {
          min-height: 30px;
          min-width: 30px;
          border-radius: 50%;
          border: 1px white solid;
          background-color: #000;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          object-fit: cover;

          place-content: center;
          display: grid;
          border: 1px white solid;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .loader {
      width: 24px;
      height: 24px;
      border: 5px solid #1d9aef;
      /* border: 5px solid #FFF; */
      border-bottom-color: transparent;
      border-radius: 50%;
      display: flex;
      justify-content: center;
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
  .modalContainer::-webkit-scrollbar {
    width: 7px;
  }

  .modalContainer::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .modalContainer::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 5px;
    cursor: pointer;
  }
`;

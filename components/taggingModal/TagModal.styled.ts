import styled from "styled-components";

export const TagModalStyle = styled.div`
  .modalContainer {
    position: absolute;
    left: 30px;
    top: 50px;
    width: 200px;
    background-color: black;
    color: white;
    padding: 10px;
    height: 300px;
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
          width: 30px;
          height: 30px;
          border-radius: 50%;
          place-content: center;
          display: grid;
          border: 1px white solid;
        }
        p {
          font-size: 14px;
        }
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

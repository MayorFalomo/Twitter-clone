import styled from "styled-components";

export const UsernamePageStyle = styled.div`
  .userPageContainer {
    display: grid;
    grid-template-columns: 400px auto 600px;
    overflow: hidden;
    height: 100vh;
    margin: 0 5%;
    @media (max-width: 2070px) {
      display: grid;
      grid-template-columns: 400px auto 500px;
    }
    @media (max-width: 1830px) {
      display: grid;
      grid-template-columns: 400px auto 450px;
    }
    @media (max-width: 1700px) {
      display: grid;
      grid-template-columns: 400px auto 450px;
      margin: 0 5%;
    }
    @media (max-width: 1500px) {
      display: grid;
      grid-template-columns: 100px auto 400px;
      margin: 0 5%;
    }
    @media (max-width: 1300px) {
      display: grid;
      grid-template-columns: 70px auto;
      margin: 0 10%;
    }
    @media (max-width: 900px) {
      display: grid;
      grid-template-columns: 70px auto;
      margin: 0 5%;
    }
    @media (max-width: 620px) {
      display: grid;
      grid-template-columns: 70px auto;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: 0 auto 0;
      margin: 0 auto;
    }
    .subUserContainer {
      overflow: auto;
      border-right: 1px solid rgb(47, 51, 54);
      border-left: 1px solid rgb(47, 51, 54);
    }
    .subUserContainer::-webkit-scrollbar {
      width: 0;
    }
    .rightGrid {
      overflow: auto;
    }
    .rightGrid::-webkit-scrollbar {
      width: 0;
    }
  }
`;

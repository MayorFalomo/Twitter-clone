import styled from "styled-components";

export const LayOutContainer = styled.div`
/* border: 2px red solid black; */
  .layOutContainer {
    display: grid;
    grid-template-columns: 400px 800px 500px;
    /* grid-template-columns: 200px auto 500px; */
    height: 100vh;
    /* width: 90%; */
    margin: 0 15%;
  }
  .trendsContainer {
    /* border: 2px red solid; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

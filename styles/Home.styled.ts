import styled from "styled-components";

export const HomeContainer = styled.div`
  border: 1px rgb(47, 51, 54) solid;
  border: 2px yellow solid;
  .homeHeader {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    /* height: 150px; */
    .homeHeading {
    }
    h1 {
      font-size: 35px;
      padding: 20px;
      /* margin: 10px 10px; */
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    a {
      font-size: 20px;
      /* border: 2px yellow solid; */
      width: 100%;
      padding-top: 10px;
      text-align: center;
      cursor: pointer;
    }
    a:hover {
      background-color: rgb(47, 51, 54);
    }
    li {
      /* border: 2px red solid; */
      width: 50%;
      margin: 0 auto;
      padding: 10px 20px;
    }
    .linkActive li {
      border-bottom: 6px #1d9aef solid;
    }
    .link {
      color: #575b5f;
    }
  }
`;

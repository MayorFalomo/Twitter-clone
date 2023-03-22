import styled from "styled-components";

export const HomeContainer = styled.div`
  border: 1px rgb(47, 51, 54) solid;
  overflow-x: hidden;
    .mainHomePage {
    display: grid;
    grid-template-columns: 400px 800px 500px;
    /* grid-template-columns: 200px auto 500px; */
    height: 100vh;
    /* width: 80%; */
    /* margin: 0 auto; */
    margin: 0 15%;
    /* overflow-x: hidden; */
    .trendsContainer {
    /* border: 2px red solid; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  }
  main{
      border: 1px rgb(47, 51, 54) solid;

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
  .postGroup {
    display: flex;
    justify-content: space-around;
    /* border: 2px red solid; */
    a {
      font-size: 20px;
      /* border: 2px yellow solid; */
      width: 60%;
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
      list-style: none;
    }
    .linkActive li {
      border-bottom: 6px #1d9aef solid;
    }
    .link {
      color: #575b5f;
    }
  }
}
`;

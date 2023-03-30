import styled from "styled-components";

export const HomeContainer = styled.div`
  border: 1px rgb(47, 51, 54) solid;
    .mainHomePage {
    display: grid;
    grid-template-columns: 400px auto 600px;
      overflow: hidden;
    height: 100vh;
    margin: 0 10%;
    .trendsContainer {
    /* border: 2px red solid; */
    overflow: auto;
    position: relative;
  }
   main::-webkit-scrollbar {
          width: 0;
        }
  }
  .trendsContainer::-webkit-scrollbar {
    width: 0;
  }
  main{
      border: 1px rgb(47, 51, 54) solid;
      overflow: auto;
       height: 100vh;
        width: 100%;
        /* border: 6px green solid; */
       position: relative;

  .homeHeader {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    position: sticky;
    top: 0;
    left: 0;
    padding: 20px 0;
    /* border: 2px red solid; */
    /* width: 100%; */

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
      /* font-size: 20px; */
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
      font-size: 24px;
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

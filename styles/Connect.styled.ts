import styled from "styled-components";

export const ConnectStyled = styled.div`
/* overflow-x: hidden; */
.connectStyleContainer{
    display: grid;
    grid-template-columns: 400px auto 600px;
    margin: 0 10%;
    overflow: hidden;
    /* border: 2px red solid; */
    height: 100vh;
     @media (max-width: 2070px ) {
      display: grid;
      grid-template-columns: 400px auto 500px ; 
    }
    @media (max-width: 1830px ) {
      display: grid;
      grid-template-columns: 400px auto 400px ; 
    }
    @media (max-width: 1700px ) {
      display: grid;
      grid-template-columns: 400px auto 400px ; 
      margin: 0 5%;
    }
    @media (max-width: 1500px ) {
      display: grid;
      grid-template-columns: 100px auto 400px ; 
      margin: 0 5%;
    }
    @media (max-width: 1300px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 10%;
    } 
    @media (max-width: 900px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 5%;
    }
    @media (max-width: 620px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 auto;
    }
    @media (max-width: 600px ) {
      display: grid;
      grid-template-columns:0 auto 0; 
      margin: 0 auto;
    }
        .mobileNav{
    display: none;
  }
  @media (max-width: 600px ) {
    .mobileNav{
      display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: black;
  }
  }
    .centerGridContainer{
    overflow: auto;
    border: 1px rgb(47, 51, 54) solid;
    .connectDetails{
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 20px;
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        position: sticky;
        top: 0;
        left: 0;
        z-index: 9;
    }
    .mappedContainer{
        display: flex;
        flex-direction: column;
        gap: 10px;
        .subMapped{
            /* border: 1px rgb(47, 51, 52) solid; */
            padding: 20px;
        }
    }
    }
    .centerGridContainer::-webkit-scrollbar {
          width: 0px;
          /* border-top-right-radius: 10px; */
        }
    .rightGridContainer{
        overflow: auto;
    }
     .rightGridContainer::-webkit-scrollbar {
          width: 0px;
        }
    .mobileNav{
    display: none;
  }
  @media (max-width: 600px ) {
    .mobileNav{
      display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: black;
    }
  }
}
`
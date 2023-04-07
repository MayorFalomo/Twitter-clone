import styled from "styled-components";

export const ProfileStyled = styled.div`
/* overflow-x: hidden; */
.profileStyleContainer{
    display: grid;
    grid-template-columns: 400px auto 600px;
    margin: 0 10%;
    overflow: hidden;
    /* border: 2px red solid; */
    height: 100vh;
    .centerGridContainer{
    overflow: auto;
    border: 1px rgb(47, 51, 54) solid;
           /* border: 2px red solid;  */
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

}
`
import styled from "styled-components";

export const UsernamePageStyle = styled.div`

.userPageContainer{
     display: grid;
    grid-template-columns: 400px auto 600px;
    overflow: hidden;
    height: 100vh;
    margin: 0 10%;
    .subUserContainer{
       overflow:auto ;
    }
    .subUserContainer::-webkit-scrollbar{
        width: 0;
    }
    .rightGrid{
        overflow:auto;
    }
    .rightGrid::-webkit-scrollbar{
        width: 0;
    }
}`
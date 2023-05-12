import styled from "styled-components";

export const MessagesStyle = styled.div`
.messagesContainer{    
    display: grid;
    grid-template-columns: 400px auto 600px;
    overflow: hidden;
    height: 100vh;
    margin: 0 10%;
    .leftGridSection {
    /* border: 2px red solid; */
    overflow: auto;
    position: relative;
    /* border-right: 1px solid rgb(47, 51, 54);
    border-left: 1px solid rgb(47, 51, 54); */
  }
   .leftGridSection::-webkit-scrollbar {
          width: 0;
    }
    .centerGridContainer::-webkit-scrollbar {
          width: 0;
    }
    .centerGridContainer{
        overflow: auto;
        height: 100vh;
        border-right: 1px solid rgb(47, 51, 54);
        border-left: 1px solid rgb(47, 51, 54);
        .centerGridHeader{
            display: flex;
            align-items: center;
            gap: 25px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.6px);
            -webkit-backdrop-filter: blur(7.6px);
            position: sticky;
            top: 0;
            left: 0;
            padding: 15px;
            z-index: 999;
            width: 100%;
        }
    }
}
`;
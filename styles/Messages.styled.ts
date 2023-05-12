import styled from "styled-components";

export const MessagesStyle = styled.div`
.messagesContainer{    
    display: grid;
    grid-template-columns: 400px auto 800px;
    overflow: hidden;
    height: 100vh;
    margin: 0 10%;
    .leftGrid {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin:0 auto;
    /* border: #1d9aef 2px solid; */
    h1{
        font-size: 40px;
        /* border: 2px red solid; */
    }
    p{
        color: rgb(113,118,123);
        font-size: 24px;
        font-weight: 600;
    }
    .newMessageBtn{
        font-size: 30px;
        background-color: rgb(29,155,240);
        padding: 15px 40px;
        border-radius: 50px;
        margin-top: 20px;
        color: #fff;
        border: none;
        outline: none;
    }
    .subLeftGrid{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        /* border: 2px red solid; */
    }
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
        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 25px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.6px);
            -webkit-backdrop-filter: blur(7.6px);
            position: sticky;
            top: 0;
            left: 0;
            padding: 15px;
            z-index: 99;
            width: 95%;
            p{
                font-size: 35px;
            }
            .messageIcon{
                display: flex;
                align-items: center;
                gap: 20px;
            }
        }
    }
}
`;
import styled from "styled-components";

export const MessagesStyle = styled.div`
.messagesContainer{    
    display: grid;
    grid-template-columns: 400px auto 600px;
    overflow: hidden;
    height: 100vh;
    margin: 0 10%;
    .leftGrid {
    overflow: auto;
    height: 100vh;
    border-right: rgb(47, 51, 54) 1px solid;
    position: relative;
    h1{
        font-size: 40px;
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
        cursor: pointer;
    }
    .subLeftGrid{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        /* height: 100vh; */
        /* border: 2px red solid; */
        .subLeft{
            /* border: 2px red solid; */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    }
    
  } 
  .leftGrid::-webkit-scrollbar {
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
        .inputContainer{
            /* border: 2px red solid; */
            display: flex;
            justify-content: center;
        }
        .searchInput{
            padding: 10px 20px;
            border: 1px rgb(113,118,123) solid;
            outline: none;
            margin-top: 20px;
            font-size: 28px;
            background-color: transparent;
            width: 90%;
            border-radius: 30px;
            /* display: flex;
            justify-content: center; */
        }
        .searchInput::placeholder{
            color: rgb(113,118,123);
            font-size: 18px;
            text-align: center;
        }
        .userChat{
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 20px 5px;
            margin-top:30px;
            border: 1px rgb(113,118,123) solid ;
            .profilePic{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: black;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                object-fit: cover;
                object-position: center;
                border: 2px white solid;
            }
            span{
              font-size: 20px; 
            }
        }
    }
}
`;
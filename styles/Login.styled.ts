import styled from "styled-components";

export const LoginContainer = styled.div`
background: #999999;
.LoginPageContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    .subLoginPage{
    width: 600px;
    height: 600px;
    /* min-height: 80%; */
   box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
   background-color: #FFFFFF;
   border-radius: 25px;
   padding: 10px;
   position: relative;
   /* border: 2px red solid; */
   margin: 0 20px;
   .letterX{
    position:absolute;
    left: 20px;
    top: 20px;
    color: black;
    font-size: 30px;
    /* cursor: pointer; */
    z-index: 9;
   }
    .loginLogo{
        display: flex;
        justify-content: center;
        margin: 10px auto;
    }
    h1{
        display: flex;
        justify-content: center;
        margin: 20px auto;
        font-size: calc(25px + 0.25vw);
        color: black;
    }
    .googleBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin:0 auto;
        padding: 10px 20px;
        border: 1px black solid;
        outline: none;
        width: 50%;
        font-size: calc(16px + 0.25vw);
        border-radius: 25px;
        cursor: pointer;
        background-color: #fff;
        @media (max-width: 570px ) {
            width: 70%;
        }
        @media (max-width: 430px ) {
            width: 90%;
        }
    }
    .googleBtn:hover{
        background-color: #F0F0F0;
        transition: 0.4s ease;
    }
    .orBars{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 20px auto;
        color: #000;
        font-size: 20px;
         span{
        border-bottom: 2px black solid;
        width: 130px;
    }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .Input{
            width:60%;
            margin:auto;
            padding:10px 20px;
            border-radius: 5px;
            font-size: 25px;
            border: 1px black solid;
            outline: none;
              @media (max-width: 500px ) {
                width: 90%;
                }
        }
        .Input::placeholder{
            font-size: calc(16px + 0.25vw);
        }
        .loginFlexBtn{
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 20px;
            .LoginSignInBtn{
            width:50%;
            padding:10px 20px;
            border-radius: 20px;
            font-size: 20px;
            margin:auto;
            border: 1px grey solid;
            cursor:pointer;
            background-color: #fff;
            }
            #backgroundHover:hover{
                background-color: #E7E7E8;
                transition: 0.3s ease;
            }
            #nextBtn:hover{
                opacity: 0.85;
                transition: 0.2s ease;
            }
        }
        p{
            text-align:center;
            margin-top: 50px;
            font-size: 20px;
            color: black;
              @media (max-width: 500px ) {
                margin-top: 20px;
                }
        }
    }
   
    }
}
`
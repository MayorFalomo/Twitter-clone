import styled from "styled-components";

export const RegisterContainer = styled.div`
background: #999999;
.signUpPageContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
    .subLoginPage{
    width: 600px;
    height: 700px;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
   background-color: #FFFFFF;
   border-radius: 25px;
   padding: 10px;
   position: relative;
   margin: 0 20px;
    @media (max-width: 380px ) {
        height: 650px;
    }
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
        /* border: 2px red solid; */
        margin: 10px auto;
    }
    h1{
        display: flex;
        justify-content: center;
        margin: 20px auto;
        font-size: calc(22px + 0.25vw);
        color: black;
    }
    .googleBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        margin:0 auto;
        padding: 10px 20px;
        border: 1px  rgb(47, 51, 54, 0.5) solid;
        outline: none;
        width: 50%;
        font-size: calc(16px + 0.25vw);
        border-radius: 25px;
        cursor: pointer;
        background-color: #fff;
         @media (max-width: 600px ) {
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
        border-bottom: 2px  rgb(47, 51, 54, 0.5) solid;
        width: 130px;
    }
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .flex-Center{
            /* display: flex;
            justify-content: center; */
            margin: 0 auto;
            width: 80%;
            position:relative;
              @media (max-width: 470px ) {
                width: 95%;
            }
            .generateBtn{
                position: absolute;
                right: 0;
                top: 0;
                z-index: 1;
                padding: 7px 10px;
                background-color: #000;
                color: #fff;
                border-radius: 7px;
                cursor: pointer;
            }
        }
        .Input{
            width:100%;
            margin:auto;
            padding:15px 20px;
            border-radius: 5px;
            font-size: calc(16px + 0.25vw);
            border: 1px rgb(47, 51, 54, 0.5) solid ;
            outline: none;
            font-size: 20px;
           
        }
        .Input::placeholder{
            font-size: calc(12px + 0.25vw);
        }
        .loginFlexBtn{
            display: flex;
            flex-direction: column;
            gap: 10px;
            /* margin-top: 20px; */
            .LoginSignInBtn{
            width:50%;
            padding:10px 20px;
            border-radius: 20px;
            font-size: 20px;
            margin:auto;
            border: 1px rgb(47, 51, 54, 0.5) solid;
            cursor:pointer;
            background-color: #fff;
              @media (max-width: 420px ) {
                width: 70%;
                }
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
            margin-top: 20px;
            font-size: calc(14px + 0.25vw);
            color:  rgb(47, 51, 54, 0.8);
             @media (max-width: 420px ) {
               margin-top: 10px;
            }
        }
    }
   
    }
    .errorText{
        color: red;
        text-align: center;
        font-size: calc(14px + 0.25vw);
    }
}
`
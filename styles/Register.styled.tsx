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
    width: 700px;
    height: 700px;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
   background-color: #FFFFFF;
   border-radius: 25px;
   padding: 10px;
   position: relative;
   margin: 0 20px;
   .letterX{
    position:absolute;
    left: 20px;
    top: 20px;
    color: black;
    font-size: 30px;
    cursor: pointer;
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
        font-size: 35px;
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
        font-size: 20px;
        border-radius: 25px;
        cursor: pointer;
        background-color: #fff;
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
            font-size: 25px;
            border: 1px rgb(47, 51, 54, 0.5) solid ;
            outline: none;
            font-size: 20px;
        }
        .Input::placeholder{
            font-size: 18px;
        }
        .loginFlexBtn{
            display: flex;
            flex-direction: column;
            gap: 30px;
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
            color:  rgb(47, 51, 54, 0.8);
        }
    }
   
    }
}
`
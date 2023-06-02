import styled from "styled-components";

export const ChatStyled = styled.div`
.chatCon{
    /* border: 2px blue solid; */
            /* padding: 20px auto; */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100vh;
            .subChatCon{
                /* border: 2px red solid; */
                .userObject{
                    border-bottom: 1px rgb(113,118,123) solid;
                    padding: 70px;
                    margin-bottom: 40px;
                    @media(max-width: 430px) {
                            /* width: 100%; */
                            padding: 30px;
                        }
                    .profilePic{
                        border: 1px rgb(113,118,123) solid;
                        width: 70px;
                        height: 70px;
                        /* border: 1px white solid; */
                        border-radius: 50%;
                        background-color: #000;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        object-fit: cover;
                        object-position: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin:0 auto;
                    }
                    h2{
                        text-align: center;
                    }
                    h2:hover{
                        text-decoration: underline;
                    }
                    p{
                        text-align: center;
                    }
                    .bio{
                        margin: 20px auto;
                    }
                    .createdAt{
                        text-align: center;
                        font-size: 16px;
                        font-weight: 500;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                        margin: 5px auto;
                        /* border: 2px red solid; */
                         @media(max-width: 430px) {
                            width: 100%;
                        }
                        span{
                            display: list-item;
                            list-style: disc inside none;
                        }
                    }
                }
            }
    .heading{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 30px;
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
        .headingDetails{
            display: flex;
            align-items: center;
            gap: 20px;
            .profileDp{
            width: 50px;
            height: 50px;
            border: 1px white solid;
            border-radius: 50%;
            background-color: #000;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            object-fit: cover;
            object-position: center;
        }
        .username{
            font-size: 24px;
            cursor: pointer;
        }
        .username:hover{
            text-decoration: underline;
        }
    }
}
    .inputCon{
        position: sticky;
        bottom: -10px;
        left: 0;
        width: 100%;
        border: 2px rgb(113,118,123) solid;
        @media (max-width:600px ) {
            bottom: 50px;
        }
        .inputSpan{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto;
            gap: 20px;
            background-color: rgb(32,35,39);
            border-radius: 30px;
            width: 95%;
            @media (max-width: 600px) {
                width: 100%;
            }
            .sendIcon{
                margin-right: 20px;
                font-size: calc(24px + 0.25vw);
            }
            button{
                border: none;
                background: none;
                cursor: pointer;
            }
            .pickerEmoji{
          position: absolute;
          bottom: 100px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        span{
            font-size: calc(20px + 0.25vw);
        }
        label{
            font-size: calc(20px + 0.25vw);
        }
        }
        .inputTextArea{
            padding:20px auto;
            border-radius: 30px;
            width: 100%;
            height: 70px;
            background-color: rgb(32,35,39);
            color: #fff;
            font-size: calc(14px + 0.25vw);
            border: none;
            outline: none;
            resize: none;
            display: flex;
            justify-content: center;
            margin: 0 auto;
            white-space: pre-wrap;
        }
        .inputTextArea::placeholder{
            font-weight: 500;
            padding-top: 20px;
            padding-left: 20px;
            color: rgb(113,118,123);
            font-size: calc(14px + 0.25vw) !important;
        }
    }
}
`
import styled from "styled-components"

export const AllUserTweets = styled.div`
.AllUserTweetContainer{
/* border: 3px yellow solid; */
.overlay{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;
        background: rgba(255, 255, 255, 0);
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2.1px);
        -webkit-backdrop-filter: blur(2.1px);
    }
     .removeOverlay{
        display: none;
    }
.AllUserTweet{
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 5px; 	
    width: 100%;
    /* border: 3px green solid; */
    .userTweetPic{
        background-color: black ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        border: 1px white solid;
       min-height: 50px;
      min-width: 50px;
        border-radius: 50%;
        @media (max-width: 400px ) {
            min-width: 40px;
            min-height: 40px;
        }
    }
    .flexUserInfoContainer{
        /* border: 2px blue solid; */
        width: 100%;
        p{
            font-size: calc(16px + 0.25vw);
            font-weight: 400;
            margin: 10px auto;
            /* border: 2px solid red; */
        }
        .flexUserInfo{
            display: flex;
            align-items: center;
            gap: 10px;
            .usersUsername{
                /* color: #575B5F; */
                font-size: calc(15px + 0.25vw);
            }
            .createdAt{
                 display: list-item;
                list-style: disc outside none;
                margin-left: 15px;
                font-size: calc(12px + 0.25vw);
            }
            .usersUsername:hover{
                text-decoration: underline;
                cursor:pointer;
            }
        }
        .tweetText{
            font-size: calc(15px + 0.25vw);
            line-height: 30px;
            white-space: pre-wrap;
        }
        .tweet-image{
             background-color: black ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        border: 1px rgb(47, 51, 54) solid;
        height: 400px;
        width: 100%;
        border-radius: 15px;
        }
        .video{
            border:1px solid #575B5F;
            border-radius: 30px;
        }
        .tweetOptions{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            width: 80%;
            /* border: 2px red solid; */
            .flexIconsAndValues{
                display: flex;
                align-items: center;
                gap: 10px;
                span{
                    font-size: calc(14px + 0.25vw);
                    font-weight: 400;
                    color: rgb(47, 51, 54)
                }
                .activeModal{
                    position: fixed;
                    top: 35%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40vw;
                    height: 50vh;
                    border-radius: 30px;
                    z-index: 9999;
                    background: black;
                    @media (max-width: 1100px ) {
                        width: 70vw;
                    }
                    @media (max-width: 600px ) {
                        width: 100%;
                        height: 100%;
                        transform: translate(-50%, -35%);
                        border-radius: 0;
                    }
        }
            }
           
        }
        .showThread{
            color:  #1d9aef;
            font-size: calc(16px + 0.25vw);
        }
    }
}
}
`
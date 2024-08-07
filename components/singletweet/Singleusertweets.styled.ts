import styled from "styled-components";

export const SingleUserTweetsStyle = styled.div`
.AllUserTweetContainer{
.AllUserTweet{
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 20px; 	
    width: 100%;
    .userTweetPic{
        background-color: black ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        border-top: 1px white solid;
        /* min-height: 70px;
        width: 70px; */
        min-width: 60px;
        min-height: 60px;
         display: grid;
            border-radius: 50%;
        border-radius: 50%;
        @media (max-width: 500px) {
            min-width: 40px;
            min-height: 40px;
           
        }
    }
    .flexUserInfoContainer{
        width: 100%;
        p{
            font-size: calc(15px + 0.25vw);
            line-height: 30px;
            font-weight: 400;
            margin: 5px auto;
        }
        .flexUserInfo{
            display: flex;
            align-items: center;
            gap: 10px;
            /* border: #1d9aef solid 2px; */
            span{
                color: #575B5F;
                font-size: calc(12px + 0.25vw);
                font-weight: 500;
                /* border: #1d9aef 2px solid; */
            }
            .createdAt{
                 display: list-item;
                list-style: disc outside none;
                margin-left: 20px;
            }
            h1{
                font-size: calc(18px + 0.25vw);
            }
            h1:hover{
                text-decoration: underline;
                cursor:pointer;
            }
            }
        }
        .tweetOptions{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            width: 80%;
            .flexIconsAndValues{
                display: flex;
                align-items: center;
                gap: 10px;
                .likeIcon{
                font-size: calc(20px + 0.25vw);
                @media (max-width: 600px) {
                 font-size: calc(17px + 0.25vw) ;
                }
                }
                p{
                font-size: calc(20px + 0.25vw);
                }
                span{
                    font-size: calc(16px + 0.25vw);
                    font-weight: 700;
                    color: rgb(47, 51, 54);
                    /* border: 2px red solid; */
                }
                .activeModal{
                    position: fixed;
                    top: 30%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40vw;
                    height: 50vh;
                    border-radius: 30px;
                    z-index: 9999;
                    background: black;
                    /* border: 2px red solid; */
        }
            }  
        }
        .thread{
            font-size: calc(16px + 0.25vw);
            color: #1d9aef;
        }
        .video{
            border: 2px solid rgb(47, 51, 54);
            width: 100%;
            height: 500px;
            border-radius: 20px;
            margin-top: 5px;
             @media (max-width: 450px ) {
            height: 300px;
        }
        }
         .singleTweetImage{
                width: 100%;
                height: 400px;
                border-radius: 20px;
                background-color: #000;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                object-fit: cover;
                object-position: center;
                border: 1px rgb(47, 51, 54) solid;
                @media (max-width: 450px ) {
                    width: 100%;
                    height: 250px;
        }
    }
}
}
`
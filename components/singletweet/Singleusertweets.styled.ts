import styled from "styled-components";

export const SingleUserTweetsStyle = styled.div`
.AllUserTweetContainer{
/* border: 3px yellow solid; */
.AllUserTweet{
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 20px; 	
    width: 100%;
    /* border: 3px green solid; */
    .userTweetPic{
        background-color: black ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        border: 1px white solid;
        height: 90px;
        width: 90px;
        border-radius: 50%;
    }
    .flexUserInfoContainer{
        /* border: 2px blue solid; */
        width: 100%;
        p{
            font-size: 25px;
            font-weight: 400;
            margin: 20px auto;
        }
        .flexUserInfo{
            display: flex;
            align-items: center;
            gap: 30px;
            span{
                color: #575B5F;
                font-size: 20px;
                font-weight: 500;
            }
            .createdAt{
                 display: list-item;
                list-style: disc outside none;
            }
            h1:hover{
                text-decoration: underline;
                cursor:pointer;
            }
            .singleTweetImage{
                width: 400px;
                height: 400px;
                border-radius: 20px;
                background-color: #000;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                object-fit: cover;
                object-position: center;
                border: 3px red solid;
            }
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
                    font-size: 22px;
                    font-weight: 700;
                    color: rgb(47, 51, 54)
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
            font-size: 22px;
            color: #1d9aef;
        }
    }
}
}
`
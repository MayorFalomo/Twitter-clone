import styled from "styled-components"

export const AllUserTweets = styled.div`
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
               
            }
           
        }
    }
}
}
`
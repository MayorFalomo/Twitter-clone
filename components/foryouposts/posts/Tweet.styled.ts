import styled from 'styled-components'

export const Tweetstyled = styled.div`
.postsContainer{
display: flex;
align-items: flex-start;
gap: 10px;
/* margin: 25px auto; */
border-top: 2px rgb(47, 51, 54) solid;
/* border-bottom: 2px rgb(47, 51, 54) solid; */
padding: 10px;
.profilePicture{
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px white solid;
    width: 70px;
    height: 70px;
    border-radius:50%;
    @media (max-width: 500px ) {
        width: 50px;
        height: 50px;
    }
}
.subPostsContainer{
    width: 100%;
.flexTweetProfileDetails{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .tweetProfileDetails{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 5px;
            .userName{
            font-size: calc(18px + 0.25vw);
            @media (max-width: 445px ) {
                font-size: calc(14px + 0.25vw);
            }
            @media (max-width: 420px ) {
                    font-size: calc(14px + 0.25vw);
                }
            }
            .userName:hover{
                text-decoration: underline;
            }
            .userAt{
                font-size: calc(12px + 0.25vw);
                color: rgb(113,118,123);
                 @media (max-width: 380px ) {
                    font-size: calc(10px + 0.25vw);
                }
            }
            .createdAt{
                font-size: calc(12px + 0.25vw);
                display: list-item;
                list-style: disc outside none;
                color: rgb(113,118,123);
                 @media (max-width: 380px ) {
                font-size: calc(10px + 0.25vw);
                list-style: none outside none;
                }
            }
            .tweetProfileFlex{
                display: flex;
                align-items: center;
                gap: 25px;
                width: 100%;
                ul{
                display: flex;
                align-items: center;
                gap: 15px;
                width: 100%;
            }
            p{
                    width: 100%;
                }
              
            }
        }
          .biDots{
                font-size: calc(20px + 0.25vw);
                @media (max-width: 455px ) {
                    display: none;
                }
                }
    }
    .tweet-caption{
        font-size: calc(16px + 0.25vw);
        margin: 10px auto;
        line-height: 30px;
    }
    .tweet-image{
        border: 1px rgb(113,118,123) solid ;
        width: 100%;
        height: 700px;
        background-repeat: no-repeat;
        background-size: cover;
       object-fit: cover;
       object-position: center;
        border-radius: 10px;
         @media (max-width: 500px ) {
        width: 100%;
        height: 400px;
    }
    }
    .tweetVideo{
        width: 100%;
        height: 500px;
        border: 1px rgb(113, 118, 123) solid;
        border-radius: 15px;
    }
    .tweetOptions{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        /* justify-content: space-around; */
        margin: 20px auto;
        color: #E2E4E4;
        /* border: 2px red solid; */
    }
    .flexIconsAndValues{
        display: flex;
        align-items:center;
        gap: 10px;
        /* color: #1d9aef; */
        span{
            font-size: 20px;
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
        p{
            .likeIcon{
            font-size: calc(20px + 0.25vw);
            /* border: 2px solid red; */

        }
        }
        
    }
    .showThread{
        display: flex;
        align-items: center;
        gap: 20px;
        /* border: #1d9aef 2px solid; */
        .subUserPhoto{
            width: 50px;
            height: 50px;
            background-color: #000;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            object-fit: cover;
            border-radius: 50%;
            border: 2px white solid;
        }
        p{
            /* font-size: 22px; */
            font-size: calc(14px + 0.25vw);
            color:#1d9aef ;
            /* border: 2px red solid; */
        }
    }
}

}
`
import styled from 'styled-components'

export const Tweetstyled = styled.div`
.postsContainer{
display: flex;
align-items: flex-start;
gap: 10px;
.profilePicture{
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px white solid;
    width: 70px;
    height: 70px;
    border-radius:50%;
}
.subPostsContainer{
    /* display: flex;
    align-items: flex-start;
    gap: 20px; */
    border: 2px red solid;
    width: 100%;
    margin: 5px 10px;

.flexTweetProfileDetails{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border: 2px yellow solid;
        padding: 10px;
        .tweetProfileDetails{
            display: flex;
            align-items: center;
            gap: 5px;
            border: 2px green solid;
            width: 50%;
            .tweetProfileFlex{
                display: flex;
                align-items: center;
                gap: 25px;
                ul{
                display: flex;
                align-items: center;
                gap: 15px;
                width: 100%;
                li{
                    /* display: flex; */
                    width: 100%;
                    /* list-style: ; */
                    gap: 10px;
                }
            }
           
            }
        }
    }
    .tweet-caption{
        font-size: 22px;
    }
    .tweet-image{
        /* height: 500px;
        width: 500px; */
        border: 3px blue solid;
        width: 100%;
        height: 700px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }
    .tweet-image{
        border: 3px blue solid;
        width: 100%;
        height: 700px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
       object-fit: cover;
       object-position: center;
        border-radius: 10px;
    }
    .tweetOptions{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        margin: 20px;
        color: #E2E4E4;
    }
    .flexIconsAndValues{
        display: flex;
        align-items:center;
        gap: 10px;
        /* color: #1d9aef; */
        span{
            font-size: 20px;
        }
    }
    .showThread{
        display: flex;
        align-items: center;
        gap: 20px;
        .subUserPhoto{
            width: 50px;
            height: 50px;
            background-color: #000;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            object-fit: cover;
            border-radius: 50%;
        }
        p{
            font-size: 22px;
            color:#1d9aef ;
        }
    }
}
}
`
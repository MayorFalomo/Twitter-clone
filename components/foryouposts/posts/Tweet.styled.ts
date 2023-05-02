import styled from 'styled-components'

export const Tweetstyled = styled.div`
.postsContainer{
display: flex;
align-items: flex-start;
gap: 10px;
/* margin: 25px auto; */
border-top: 2px rgb(47, 51, 54) solid;
border-bottom: 2px rgb(47, 51, 54) solid;
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
}
.subPostsContainer{
    /* display: flex;
    align-items: flex-start;
    gap: 20px; */
    /* border: 2px rgb(47, 51, 54) solid; */
    width: 100%;
    /* margin: 5px 5px; */
    /* padding: 10px; */

.flexTweetProfileDetails{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        /* border: 2px yellow solid; */
        /* padding: 5px 0; */
        .tweetProfileDetails{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 5px;
            /* border: 2px green solid; */
            .userName{
                font-size: 28px;
            }
            .userAt{
                font-size: 20px;
                color: rgb(113,118,123);
            }
            .createdAt{
                font-size: 20px;
                display: list-item;
                list-style: disc outside none;
                margin-left: 25px;
                color: rgb(113,118,123);
            }
            .tweetProfileFlex{
                display: flex;
                align-items: center;
                gap: 25px;
                /* border: 2px blue solid; */
                width: 100%;
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
            p{
                    /* border: #1d9aef 2px solid; */
                    width: 100%;
                }
            }
        }
    }
    .tweet-caption{
        font-size: 22px;
        margin: 20px auto;
        line-height: 35px;
    }
    .tweet-image{
        /* height: 500px;
        width: 500px; */
        /* border: 3px blue solid; */
        width: 100%;
        height: 700px;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }
    .tweet-image{
        border: 3px rgb(113,118,123);
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
            font-size: 22px;
            color:#1d9aef ;
        }
    }
}

}
`
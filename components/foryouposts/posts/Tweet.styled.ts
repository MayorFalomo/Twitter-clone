import styled from 'styled-components'

export const Tweetstyled = styled.div`
.postsContainer{
display: flex;
align-items: flex-start;
gap: 10px;
border-bottom: 2px rgb(47, 51, 54) solid;
padding: 10px;
width: 100%;
/* border: 2px yellow solid; */
.overlay{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        background: rgba(255, 255, 255, 0);
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2.1px);
        -webkit-backdrop-filter: blur(2.1px);
    }
     .removeOverlay{
        display: none;
    }
.profilePicture{
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // border: 1px white solid;
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    display: grid;
   place-content: center;
    border-radius:50%;
    @media (max-width: 500px ) {
        width: 35px;
        height: 35px;
        min-width: 35px;
        min-height: 35px;
    }
}
.subPostsContainer{
    max-width: 100%;
    width: 100%;
    /* border: 2px red solid; */
.flexTweetProfileDetails{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        /* border: 2px blue solid; */
        .tweetProfileDetails{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 5px;
                /* border: 2px green solid; */
            .userName{
            font-size: calc(18px + 0.25vw);
            @media (max-width: 445px ) {
                font-size: 1em;
            }
            @media (max-width: 420px ) {
                    font-size: 1em;
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
                margin-left: 25px;
                 @media (max-width: 400px ) {
                font-size: calc(10px + 0.25vw);
                list-style: none outside none;
                margin-left: 3px;
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
               
                }
                .popUpModal {
                    position: relative;                    
                }
    }
    .tweet-caption{
        font-size: calc(16px + 0.25vw);
        margin: 10px auto;
        line-height: 35px;
        white-space: pre-wrap !important;
        overflow-wrap: break-word !important;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        margin-left: 0;
        word-wrap: break-word;
        span{
            margin-left: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
              white-space: pre-wrap !important;
              overflow-wrap: break-word !important;
          word-wrap: break-word;
        }
    }
    .tweet-image{
        margin-top: 10px;
        border: 1px rgb(113,118,123) solid;
        width: 100%;
        height: 700px;
        background-color: #000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
       object-fit: cover;
       object-position: center;
        border-radius: 10px;
         @media (max-width: 500px ) {
        width: 100%;
        height: 400px;
    }
    
    }
    .tweetVideo{
        margin-top: 10px;
        width: 100%;
        height: 500px;
        border: 1px rgb(113, 118, 123) solid;
        border-radius: 15px;
        position: relative;
        /* z-index: -1; */
    }
    .tweetOptions{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 20px auto;
        color: #E2E4E4;
        width: 100%;
    }
    .flexIconsAndValues{
        display: flex;
        align-items:center;
        gap: 10px;
        width: 100%;
        span{
            font-size: calc(16px + 0.25vw);
            color: rgb(113,118,123);
        }
        .activeModal{
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 700px;
            height: 50vh;
            border-radius: 30px;
            z-index: 9999999999;
            background: black;
           @media (max-width: 1300px ) {
            width: 70%;
           }
           @media (max-width: 750px ) {
            width: 100%;
            height: 100vh;
            bottom: 0;
            transform: translate(-50%, -40%);
            transition: all 0.4s ease;
           }
        }
        p{
            .likeIcon{
            font-size: calc(18px + 0.25vw);

        }
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
            border: 2px rgb(113, 118, 123) solid;
        }
        p{
            font-size: calc(14px + 0.25vw);
            color:#1d9aef ;
        }
    }
}

.pictureModal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99999;
   border-radius: 10px;
    width: 95%;
    height: 95%;
    z-index: 99999999999999999999;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    object-fit: cover;
    @media (max-width: 1100px) {
        width: 100%;
        max-height: 100%;
    }
    @media (max-width: 600px) {
      
    }
    .picsModal{
  width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .closeModalBtn{
        position: absolute;
        top: 20px;
        right: 20px;
        z-index: 99999999;
        font-size: 19px;
        color: #1d9aef;
        background-color: #E2E4E4;
        cursor: pointer;
        padding: 6px 10px;
        border-radius: 6px;
          @media (max-width: 450px) {
            position: absolute;
            top: 180px;
            right: 10px;
    }
    }
}

.bgFilter{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.6);
}
}
`
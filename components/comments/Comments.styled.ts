import styled from "styled-components";

export const CommentStyled = styled.div`
.postsContainer{
    border-bottom: 2px rgb(47, 51, 54) solid;
.profilePicture{
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px white solid;
    width: 70px;
    height: 70px;
    border-radius:50%;
    /* border: 2px red solid; */
    @media (max-width: 450px ) {
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
            /* border: 2px green solid; */
            .userName{
              font-size: calc(16px + 0.25vw);
            }
            .userAt{
                font-size: calc(12px + 0.25vw);
                color: rgb(113,118,123);
            }
            .createdAt{
                font-size: calc(12px + 0.25vw);
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
        font-size: calc(16px + 0.25vw);
        margin: 20px auto;
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
    .tweetOption{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        /* justify-content: space-around; */
        margin: 20px auto;
        color: #E2E4E4;
        border: 2px red solid;
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
 form {
      width: 100%;
      display: flex;
      align-items: start;
      gap: 10px;
      margin-top: 20px;
      padding: 10px;
      border-top: 1px solid #575B5F;
      .userProfileDp{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: #000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: 1px solid #fff;
        @media (max-width: 400px ) {
          width: 50px;
          height: 50px;
        }
      }
      .textAreaContainer {
        position: relative;
        width: 100%;
        /* border: 3px red solid; */
      }

      .textArea {
        width: 100%;
        height: 180px;
        background-color: transparent;
       border: none;
        outline: 0;
        color: white;
        white-space: wrap;
        resize: none;
        font-size: calc(16px + 0.25vw);
      }
      .textArea::placeholder {
          font-size: calc(20px + 0.25vw);
        padding-top: 60px;
      }
      p {
        background-color: transparent;
        color: #1d9aef;
        font-size: 22px;
      }
      .flexIcons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        color: #1d9aef;
        position: absolute;
        /* left: 0; */
        bottom: 15px;
        width: 90%;
        padding: 1px 10px;
        /* border: 2px red solid; */

        .tweetIcons {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 30px;
          /* border: 2px red solid; */
          .locationIcon {
            opacity: 0.5;
            cursor: default;
          }
          label{
            font-size: calc(24px + 0.25vw);
             @media (max-width: 400px ) {
                font-size: calc(18px + 0.25vw);        
        }
          }
          span{
            font-size: calc(24px + 0.25vw);
              @media (max-width: 400px ) {
                font-size: calc(18px + 0.25vw);        
        }
          }
        }
        .pickerEmoji{
          position: absolute;
          bottom: -450px;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .tweetButton button {
          padding: 10px 25px;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 18px;
          background-color: #1d9aef;
          color: #fff;
          border-radius: 25px;
        }
        .btn-primary{
          opacity: 0.4;
        }
      }
    }
    .seeCommentMap{
        .mappedContainer{
        border-top: 2px #575B5F solid;
        /* border-bottom: 2px #575B5F solid; */
        margin: 5px auto;
        padding: 10px;
        }
    }
}
`
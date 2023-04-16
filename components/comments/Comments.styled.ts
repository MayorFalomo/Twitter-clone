import styled from "styled-components";

export const CommentStyled = styled.div`
.postsContainer{
/* display: flex;
align-items: flex-start;
gap: 10px;
margin: 25px auto;
border-top: 2px rgb(47, 51, 54) solid;
border-bottom: 2px rgb(47, 51, 54) solid;
padding: 10px; */

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
    /* display: flex;-
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
        width: 90px;
        height: 90px;
        border-radius: 50%;
        background-color: #000;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border: 1px solid #fff;
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
        border-left: none;
        border-right: none;
        border-top: none;
        border-bottom: none;
        font-size: 25px;
        outline: 0;
        color: white;
        white-space: wrap;
        resize: none;
      }
      .textArea::placeholder {
        font-size: 30px;
        padding-top: 60px;
      }
      p {
        /* border: none; */
        /* outline: none;
        padding: 7px 15px; */
        position: absolute;
        left: 0px;
        top: 10px;
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
          /* border-bottom-left-radius: 25px;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px; */
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
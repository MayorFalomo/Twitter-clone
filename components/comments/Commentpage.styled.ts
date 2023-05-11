import styled from "styled-components";

export const CommentPageStyle = styled.div`

.commentPageContainer{
    /* display: flex;
    align-items: flex-start;
    gap: 10px; */
    /* border: 2px red solid; */
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
    /* .repliesComponent{
      border: 1px solid blue;
    } */
    /* .showRepliesContainer{
      border: 3px solid green;
    } */
        /* .replyCon{
      border: 3px solid red;
    } */
    .subPostsContainer{
      display: flex;
      align-items: flex-start;
      gap: 10px;
    .tweetDetailsCon{
      /* border: 2px blue solid; */
      width: 100%;
         .tweetOption{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            /* border: #1d9aef 2px solid; */
            .flexIconsAndValues{
                /* border: 2px red solid; */
               
            }
              .replyModal{
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60%;
            max-width: 40vw;
            /* height: 50vh; */
            border-radius: 30px;
            z-index: 9999;
            background: black;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            /* .commentIcon {
                border:2px red solid;
            } */
            .commentModalContainer{
                background-color: black;
                padding: 20px;
                .commentModalClose{
                    padding: 10px;
                    /* border-bottom: 1px solid white; */
                    width: 100%;
                    margin-bottom: 20px;
                }
                .subCommentModal{
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    /* border: 2px red solid; */
        .border{
            border-left: 1px solid #575B5F;
            height: 70px;
            writing-mode: vertical;
        }
        .profileImages{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
        .ProfilePic{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            border: 1px white solid;
            background: black;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            object-position: center;
        }
    }
    .replyDetails{
        /* border: 2px green solid; */
        width: 90%;
        h1{
          span{
            font-size: 28px;
            color: #575B5F ;
          }
        }
        p{
            font-size: 26px;
        }
        .tweet{
            font-size: 26px;
            margin-top: 20px;
            color:  #575B5F;
            span{
                color: #1d9aef;
                font-size: 28px;
            }
        }
        form{
            /* border: 1px solid blue; */
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            textarea {
                width: 100%;
                height: 200px;
                background: #000;
                border: none;
                outline: none;
                margin-top: 20px;
                font-size: 24px;
                color: #fff;
                resize: none;
                white-space: wrap;
                line-height: 35px;
            }
            textarea::placeholder {
                font-size: 28px;
                font-weight: 500;
                color: #575B5F;
            }
            .flexIcon{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                /* border: 3px green solid; */
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
        .tweetButton{
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
          padding: 10px 25px;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 18px;
          background-color: #1d9aef;
          color: #fff;
          border-radius: 25px;
          opacity: 0.4;
        }
      }
    }
    /* option {
      border: none;
      outline: 0;
    } */
  }
            }
            .successMessage{
              /* border: 2px red solid; */
              margin-top: 10px;
              color: green;
              font-size: 26px;
              text-align: center;
            }
        }
                }
        }
         .repliesContainer{
            margin-top: 20px;
        }
        .showReplies{
            color: #1d9aef;
            cursor: pointer;
            font-size: 20px;
            font-weight: 400;
            margin-top: 35px auto;
        }
       
    }
     .subPostContainer{
      border: solid 2px red;
      /* display: flex;
      align-items: center; */
     }
       
    }
    .subReplyCon{
        margin: 30px auto;
    }

}
`
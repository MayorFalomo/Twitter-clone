import styled from "styled-components";

export const CommentPageStyle = styled.div`

.commentPageContainer{
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
    .subPostsContainer{
      display: flex;
      align-items: flex-start;
      gap: 10px;
      /* border: 2px yellow solid !important; */
       .profilePicture{
         border: 1px white solid;
                min-width: 50px;
                min-height: 50px;
                display: grid;
                place-content: center;
                border-radius: 50%;
                background-color: black;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                object-fit: cover;
                object-position: center;
            @media (max-width:600px) {
            min-width: 40px;
            min-height: 40px;
          } 
        }
    .tweetDetailsCon{
        width: 100%;
      .tweetProfileDetails{
        .userName{
          font-size: calc(14px + 0.25vw) !important;
        }
        .usersAt{
          font-size: calc(10px + 0.25vw) !important;
          /* color: "#575B5F"; */
        }
        .createdAt{
          font-size: calc(10px + 0.25vw) !important;
        }
      }
      .dottedIcon{
          @media (max-width:670px) {
            display: none;
          }
      }
      .tweet-caption{
          font-size: calc(14px + 0.25vw) !important;
          /* border: #1d9aef 2px solid !important; */
      }
      .tweet-image{
         @media (max-width:450px) {
            /* height: 300px; */
          } 
      }
      .tweetVideo{
        width: 100%;
        height: 400px;
         @media (max-width:450px) {
            height: 300px;
          } 
      }
         .tweetOption{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 20px;
            border: none !important;
            .flexIconsAndValues{  
              .likeIcon{
                @media (max-width: 450px ) {
                  font-size: calc(18px + 0.25vw) !important;             
                }
              }            
            }
              .replyModal{
            position: fixed;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            /* max-width: 40vw; */
            border-radius: 30px;
            z-index: 9999;
            background: black;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
            @media (max-width: 700px ) {
              width: 100%;
              height: 100vh;
              bottom: 0;
              transform: translate(-50%, -40%);
            }
            .commentModalContainer{
                background-color: black;
                padding: 20px;
                .commentModalClose{
                    padding: 10px;
                    width: 100%;
                    margin-bottom: 20px;
                }
                .subCommentModal{
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
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
            width: 50px;
            height: 50px;
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
       
    }
    .subReplyCon{
        margin: 30px auto;
    }

}
`
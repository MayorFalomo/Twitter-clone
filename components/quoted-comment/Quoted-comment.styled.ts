import styled from "styled-components"

export const QuotedCommentStyle = styled.div`
.commentModalContainer{
    background-color: black;
    padding: 20px;
    width: 100%;
   border-radius: 30px;
    .commentModalClose{
        padding: 5px;
        width: 100%;
        margin-bottom: 10px;
    }
    .subCommentModal{
        display: flex;
        align-items: flex-start;
        gap: 10px;
        width: 100%;
        /* border: 1px solid blue; */
        .border{
            /* border-left: 1px solid #575B5F; */
            /* height: 70px;
            writing-mode: vertical; */
        }
        .ProfilePic{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 1px rgb(113, 118, 123) solid;
            background: black;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            object-position: center;
            @media (max-width: 520px ) {
              width: 50px;
              height: 50px;
            }
            @media (max-width: 440px ) {
              width: 30px;
              height: 30px;
            }
        }
    }
    form{
        /* border: 2px yellow solid; */
        width: 100%;
        .commentForm{
            position: relative;
        .textArea{
            width: 100%;
            height: 100px;
            background-color:black;
            color: white;
           font-size: calc(20px + 0.25vw);
            resize: none;
            border: none;
            outline: none;
            white-space: pre-wrap;
            line-height: 35px;
        }
        .textArea::-webkit-scrollbar{
            width: 0;
        }
        .textArea::placeholder{
            padding: 45px;
            font-size: calc(16px + 0.25vw);
        }
        .select{
            padding: 5px 7px;
            cursor: pointer;
            background-color: black;
            color: #1d9aef;
            border: 1px solid #575b5f;
            border-radius: 40px;
        }
    }
    .tweetDetailsContainer{
        border: 1px solid #575b5f;
        border-radius: 30px;
    .tweetDetails{
        display: flex; 
        align-items: center;
        gap: 10px;
        .tweetProfilePic{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px rgb(113, 118, 123) solid;
            background: black;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            object-position: center;
             @media (max-width: 520px ) {
              width: 30px;
              height: 30px;
            }
        }
        .createdAt{
            display: list-item;
            list-style: disc outside none;
            margin-left: 15px;
            font-size: calc(12px + 0.25vw);
            @media (max-width: 400px ) {
              display: none;
            }
            
        }
        .usersAt{
            font-size: calc(12px + 0.25vw);
        }
    }
    .pictures{
            width: 100%;
            height: 400px;
            background-color: black;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            object-position: center;
              @media (max-width: 440px ) {
              height: 150px;
            }
        }
    .videos{
            width: 100%;
            height: 200px;
            object-fit: cover;
            object-position: center;
              @media (max-width: 440px ) {
              height: 150px;
            }
        }
}
     .flexIcons{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;
                position: relative;
                  .tweetIcons {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 30px;
          .locationIcon {
            opacity: 0.5;
            cursor: default;
             @media (max-width: 520px ) {
             display: none;
            }
          }
          .calendar{
             @media (max-width: 520px ) {
           display: none;
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
            .flexIcons{
                display: flex;
                align-items: center;
                justify-content: space-between;
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
            .successMessage{
              /* border: 2px red solid; */
              margin-top: 10px;
              color: green;
              font-size: 26px;
              text-align: center;
            }
`
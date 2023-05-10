import styled from "styled-components";

export const ReplyPageStyle = styled.div`

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
            /* border: 1px solid red; */
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
                color: #fff;
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
            }
            .successMessage{
              /* border: 2px red solid; */
              margin-top: 10px;
              color: green;
              font-size: 26px;
              text-align: center;
            }
        }
`
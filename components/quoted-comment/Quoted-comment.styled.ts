import styled from "styled-components"

export const QuotedCommentStyle = styled.div`
.commentModalContainer{
    background-color: black;
    padding: 20px;
    width: 100%;
    /* height: 500px; */
    /* max-width: 700px; */
   border-radius: 30px;
   /* border: 2px green solid; */
/* background: linear-gradient(145deg, #f0f0f0, #cacaca);
box-shadow:  5px 5px 24px #afafaf,
             -5px -5px 24px #ffffff; */
    .commentModalClose{
        padding: 5px;
        /* border: 1px solid white; */
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
            width: 80px;
            height: 80px;
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
            font-size: 20px;
            /* border: 1px solid #575b5f; */
            resize: none;
            border: none;
            outline: none;
            white-space: wrap;
            line-height: 35px;
        }
        .textArea::-webkit-scrollbar{
            width: 0;
        }
        .textArea::placeholder{
            font-size: 25px;
            padding: 45px;
        }
        .select{
            /* position: absolute;
            top: 10px;
            left: 20px; */
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
        /* padding: 10px; */
        border-radius: 30px;
    .tweetDetails{
        display: flex; 
        align-items: center;
        gap: 30px;
        .tweetProfilePic{
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
        .createdAt{
            display: list-item;
            list-style: disc outside none;
        }
    }
    .pictures{
            width: 100%;
            /* max-width: 600px; */
            height: 400px;
            /* max-height: 400px; */
            background-color: black;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            object-position: center;
        }
}
     .flexIcons{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;
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
          bottom: 85px;
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
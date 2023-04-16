import styled from "styled-components";

export const SingleTweetStyle = styled.div`
/* background-color: red; */
.singleTweetContainer{    
    display: grid;
    grid-template-columns: 400px auto 600px;
    overflow: hidden;
    height: 100vh;
    margin: 0 10%;
    .leftGridSection {
    /* border: 2px red solid; */
    overflow: auto;
    position: relative;
  }
   .leftGridSection::-webkit-scrollbar {
          width: 0;
    }
    .centerGridContainer::-webkit-scrollbar {
          width: 0;
    }
    .centerGridContainer{
        overflow: auto;
        height: 100vh;
        .centerGridHeader{
            display: flex;
            align-items: center;
            gap: 25px;
            background: rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(7.6px);
            -webkit-backdrop-filter: blur(7.6px);
            position: sticky;
            top: 0;
            left: 0;
            padding: 15px;
            z-index: 999;
            width: 100%;
        }
        .userDetailsContainer{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
        .subUserDetailsContainer{
            display: flex;
            align-items: center;
            gap: 30px;
            .profilePic{
                border: 1px white solid;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: black;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                object-fit: cover;
                object-position: center;
            }
        }
    }
    .picture {
        width: 95%;
        height: 60%;
        margin: 5px 10px;
        border-radius: 30px;
        background-color: #000;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        object-position: center;
        object-fit: cover;
    }
    .tweetText{
        font-size: 40px;
        font-weight: 500;
        margin: 20px auto;
    }
    .postDetailsContainer{
        .timeAndViews{
            display: flex;
            align-items: center;
            gap: 35px;
            margin: 30px auto;
            .listStyle{
                display: list-item;
                list-style: disc outside none;
            }
        }
        .tweetCount{
            border-top: 2px solid #575B5F ;
            border-bottom: 2px solid #575B5F;
            padding-top: 25px;
            padding-bottom: 25px;
            .subTweetCount{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 70%;
            }
            p{
                font-size: 24px;
                /* border-top: 2px solid #fff  ;
                border-bottom: 2px solid #fff;
                padding: 20px auto; */
            }
        }
    } .tweetOptions{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        margin: 20px auto;
        color: #E2E4E4;
        border-bottom: 2px #575B5F solid;
        padding: 15px;
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
}
  }
`
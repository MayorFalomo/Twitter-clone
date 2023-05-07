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
    /* border-right: 1px solid rgb(47, 51, 54);
    border-left: 1px solid rgb(47, 51, 54); */
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
        border-right: 1px solid rgb(47, 51, 54);
        border-left: 1px solid rgb(47, 51, 54);
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
        /* border-bottom: 2px #575B5F solid; */
        /* padding: 15px; */
    }
    .flexIconsAndValues{
        display: flex;
        align-items:center;
        gap: 10px;
        /* color: #1d9aef; */
        .retweetIcon{
            position: relative;
            .retweetModal{
                position: absolute;
                top: 20px;
                left: 0;
                z-index: 1;
                background-color: #000;
                border-radius:20px ;
                width: 200px;
                padding: 20px;
                font-size: 20px;
                line-height: 35px;
                cursor: pointer;
                .activeModal{
                    /* border: 2px red solid; */
                    width: 40%;
                    max-height: 60vh;
                    position: fixed;
                    top: 40%;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    z-index:999;
                    border-radius: 30px;
                    background-color: #000;
                    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
                }
            }
            .removeModal{
                display: none;
            }
        }
        span{
            font-size: 20px;
        }
    }
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
}
  }
`
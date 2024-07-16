import styled from "styled-components";

export const SingleTweetStyle = styled.div`
/* background-color: red; */
.singleTweetContainer{    
    display: grid;
    grid-template-columns: 400px auto 600px;
    overflow: hidden;
    height: 100vh;
    margin: 0 5%;
    position: relative;
     @media (max-width: 2070px ) {
      display: grid;
      grid-template-columns: 400px auto 500px ; 
    }
    @media (max-width: 1830px ) {
      display: grid;
      grid-template-columns: 400px auto 450px ; 
    }
    @media (max-width: 1700px ) {
      display: grid;
      grid-template-columns: 350px auto 500px ; 
      margin: 0 5%;
    }
    @media (max-width: 1500px ) {
      display: grid;
      grid-template-columns: 100px auto 400px ; 
      margin: 0 5%;
    }
    @media (max-width: 1300px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 10%;
    } 
    @media (max-width: 900px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 5%;
    }
    @media (max-width: 620px ) {
      display: grid;
      grid-template-columns: 70px auto; 
      margin: 0 auto;
    }
    @media (max-width: 600px ) {
      display: grid;
      grid-template-columns:0 auto 0; 
      margin: 0 auto;
    }
    .leftGridSection {
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
        border-right: 1px solid rgb(47, 51, 54);
        border-left: 1px solid rgb(47, 51, 54);
        @media (max-width: 600px) {
            border: none;
        }
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
            z-index: 1;
            width: 100%;
            /* border: #1d9aef 2px solid; */
            h1{
            font-size: calc(20px + 0.25vw);
            }
            span{
                font-size: calc(22px + 0.25vw);
            }
        }
        .userDetailsContainer{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-top: 30px;
            margin-left: 10px;
            /* position: relative; */
            /* border: 2px red solid; */
        .subUserDetailsContainer{
            display: flex;
            align-items: flex-start;
            gap: 20px;
            /* border: 2px red solid; */
            .profilePic{
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

            }
            .username {
                /* border: 2px red solid; */
                h1{
                    font-size: calc(20px + 0.25vw);
                    color: #fff;
                     @media (max-width: 500px) {
                font-size: calc(18px + 0.25vw);
                }
                p{
                    font-size: calc(16px + 0.25vw);
                    color: #575B5F !important;
                    /* border: 2px red solid !important; */
                      @media (max-width: 500px) {
                font-size: calc(16px + 0.25vw);
                }
                }
                /* .popUp{
                    position: relative;
                    width: 100%;
                    border: 2px red solid;
                } */
                }
            }
        }
        span{
            font-size: calc(22px + 0.25vw);
        }
    }
    .picture {
        width: 95%;
        height: 60%;
        margin: 5px 10px;
        border-radius: 30px;
        object-position: center;
        object-fit: cover;
    }
    video{
        border: #575B5F 1px solid;
        border-radius: 30px;
    }
    .tweetText{
        /* font-size: 30px; */
        font-size: calc(15px + 0.25vw);
        font-weight: 400;
        margin: 20px 20px;
        line-height: 35px;
        white-space: pre-wrap;
    }
    .postDetailsContainer{
        .timeAndViews{
            display: flex;
            align-items: center;
            gap: 25px;
            margin: 30px 5px;
            .listStyle{
                display: list-item;
                list-style: disc outside none;
                @media (max-width: 350px){
                font-size: calc(12px + 0.25vw);
                }
            }
        }
        .tweetCount{
            border-top: 2px solid #575B5F ;
            border-bottom: 2px solid #575B5F;
            padding-top: 25px;
            padding-bottom: 25px;
            .subTweetCount{
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
            }
            p{
                font-size: calc(16px + 0.25vw);
               @media (max-width: 400px ){
                font-size: calc(14px + 0.25vw);
               }
            }
            p:hover{
                text-decoration: underline;
            }
            /* .disabled{
                opacity: 0.4;
            } */
        }
    } .tweetOptions{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        margin: 20px auto;
        color: #E2E4E4;
        .bookmarkAdded {
            background-color: #1d9aef;
            color: #fff;
            padding: 15px 20px;
            margin: auto;
            position: fixed;
            left: 40%;
            bottom: 70px;
            z-index: 999;
            font-size: calc(18px + 0.25vw);
            z-index: 9999;
            border-radius: 15px;
            @media (max-width: 600px) {
                left: 20%;
            }
            @media (max-width: 400px) {
                left: 10%;
            }
        }
    }
    .flexIconsAndValues{
        display: flex;
        align-items:center;
        gap: 10px;
        .retweetIcon{
            position: relative;
            .retweetModal{
                position: absolute;
                top: 25px;
                left: 0;
                z-index: 1;
                background-color: #000;
                border-radius:20px ;
                width: 200px;
                padding: 20px;
                font-size: 20px;
                line-height: 35px;
                cursor: pointer;
               
            }
        }
       .noOfInteractions{
        font-size: calc(18px + 0.25vw);
        @media (max-width: 500px ) {
         font-size: calc(16px + 0.25vw) ;
        }
       }
        .likeIcon{
        font-size: calc(18px + 0.25vw);
        margin-top: 5px;
       }
        .activeModal{
                    width: 40vw;
                    height: 60vh;
                    position: fixed;
                    top: 40%;
                    left: 50%;
                    -ms-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    z-index:999999999;
                    border-radius: 30px;
                    background-color: #000;
                    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
                    @media (max-width: 1400px ) {
                        width: 70%;
                    }
                    @media (max-width: 750px ) {
                        width: 100%;
                        height: 100vh;
                        bottom: 0;
                        transform: translate(-50%, -40%);
                        position: fixed;
                        border-radius: 0;
                        z-index: 9999999999;
                    }
                }
                span{
                    font-size: calc(15px + 0.25vw);
                }
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
        /* border: 2px red solid; */
    }
    .removeOverlay{
        display: none;
    }
  }
`
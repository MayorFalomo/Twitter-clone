import styled from "styled-components";

export const ShowReplyStyle = styled.div`
.showReplyContainer {
    /* border: solid 1px yellow; */
    display: flex;
    align-items: flex-start;
    gap: 15px;
    .ProfilePicture{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            /* border: 1px rgb(113,118,123) solid; */
            background: black;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            object-position: center;
        }
    .subPostContainer{
                    /* border: 2px green solid; */
                    width: 100%;
              .flexTweetProfileDetails{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
            /* border: 2px red solid; */
            .tweetProfileDetails{
                display: flex;
                align-items: center;
                gap: 5px;
                .userName{
                font-size: calc(18px + 0.25vw) !important;             

            }
            .userAt{
                font-size: calc(12px + 0.25vw);             
                color: rgb(113,118,123);
            }
            .createdAt{
                font-size: calc(12px + 0.25vw) !important;             
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
            }
            
            }
           
        }
         .repliedText{
                font-size: calc(14px + 0.25vw);
                margin-top: 15px;
            }
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
            border-radius: 30px;
            z-index: 9999;
            background: black;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
         
}
    }
`
import styled from "styled-components";

export const MessageStyle = styled.div`
.messageContainer {
    .userTextContainer{
         width: 100%;
         display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
     .usersText {
        color: #fff;
        background-color: rgb(47,51,54);
        font-size: calc(16px + 0.25vw) !important;
        font-weight: 400;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
        border-top-right-radius: 40px;
        padding: 20px;
        margin: 5px 10px;
        line-height: 30px;
        width: 70%;
        max-width: max-content;
         @media(max-width: 390px) {
            width: 80%;
        }
    }
    .currentUserTextContainer {
        width: 100%;
         display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-top: 5px;
    .currentUsersText {
        color: #fff;
        background-color: #1D9AEF;
        font-size: calc(16px + 0.25vw);
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        border-top-right-radius: 40px;
        padding: 20px;
        margin: 5px 10px;
        line-height: 30px;
        width: 70%;
        max-width: max-content;
        @media(max-width: 390px) {
            width: 80%;
            margin:0px 10px;
        }
    }
}
.picturesContainer{
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: flex-end;
      margin: 15px 0;
    .picture{
        width: 50%;
        height: 400px;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        object-position: bottom;
        border-radius: 10px;
        margin-right: 10px;
         @media(max-width: 430px) {
            width: 70%;
            height: 300px;
        }
    }
}
.userPictureContainer{
    display: flex;
    justify-content: flex-start;
    margin: 10px 2px;
    .userPictureImg{
        width: 50%;
        height: 400px;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        object-position: bottom;
        border-radius: 10px;   
        margin-left: 10px;
         @media(max-width: 430px) {
            width: 70%;
            height: 300px;
        }
    }
}
.currentVideoContainer {
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: flex-end;
    margin: 10px 2px;
    .currentVideo{
        width: 100%;
        height: 400px;
         @media(max-width: 430px) {
           height: 300px;
        }
    }
    .dates{
        @media(max-width: 450px) {
            font-size: calc(12px + 0.25vw) !important;
            margin: 10px auto;
        }
    }
}
.userVideoContainer{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 3px;
    .userBgVideo{
        width: 70%;
        height: 400px;
        margin-top: 15px;
        @media(max-width: 430px) {
           height: 300px;
           /* margin-top: 15px; */
        }
    }
     @media(max-width: 450px) {
        font-size: calc(12px + 0.25vw) !important;
    }
}
}
`
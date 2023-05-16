import styled from "styled-components";

export const MessageStyle = styled.div`
.messageContainer {
    /* border: 2px red solid; */
    .userTextContainer{
         width: 100%;
         display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
     .usersText {
        color: #fff;
        background-color: rgb(47,51,54);
        font-size: 24px;
        font-weight: 600;
        border-top-left-radius: 40px;
        border-bottom-right-radius: 40px;
        border-top-right-radius: 40px;
        /* border-radius: 40px; */
        padding: 20px;
        margin: 15px 10px;
       line-height: 35px;
        width: 70%;
        max-width: max-content;
    }
    .currentUserTextContainer {
        /* border: #1D9AEF 2px solid; */
        width: 100%;
         display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        /* margin-right: 15px; */
    .currentUsersText {
        color: #fff;
        background-color: #1D9AEF;
        font-size: 24px;
         border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        border-top-right-radius: 40px;
        /* border-radius: 40px; */
        padding: 20px;
        margin: 10px 10px;
       line-height: 35px;
        width: 70%;
        max-width: max-content;
        /* border: 2px red solid; */
    }
   
    .picture{
        /* width: 60;
        height: 60%; */
        /* border-radius: 20px; */
    }
}
.picturesContainer{
    /* border: 2px solid red; */
      display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: flex-end;
        /* justify-content: flex-end; */
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
      
        /* max-width: 400px; */
    }
}
.userpictureContainer{
    /* border: 2px solid red; */
      display: flex;
        justify-content: flex-start;
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
        /* max-width: 400px; */
    }
     .span{
            /* color: rgb(47,51,54);
            border: 2px red solid; */
        }
}
.currentVideoContainer {
    /* border: 2px solid red; */
     display: flex;
      flex-direction: column;
      gap: 3px;
      align-items: flex-end;
    .currentVideo{
        width: 70%;
        height: 300px;
    }
    .hide{
        display: none;
        width: 0;
        height: 0;
        /* border: 2px red solid; */
    }
}
.userVideoContainer{
     display: flex;
    justify-content: flex-start;
     flex-direction: column;
      gap: 3px;
    /* border: yellow 2px solid; */
    .userBgVideo{
          width: 70%;
        height: 400px;
        border: green solid 2px;
    }
}
}
`
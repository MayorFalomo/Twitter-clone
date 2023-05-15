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
        font-size: 24px;
        font-weight: 600;
        border-radius: 40px;
        padding: 20px;
        margin: 20px 0;
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
        border-radius: 40px;
        padding: 20px;
        margin: 20px 0;
       line-height: 35px;
        width: 70%;
        max-width: max-content;
        /* border: 2px red solid; */
    }
   
    .picture{
        width: 60%;
        height: 60%;
        border-radius: 20px;
    }
}
}
`
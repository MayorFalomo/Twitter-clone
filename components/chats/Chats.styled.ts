import styled from "styled-components";

export const Chatstyled = styled.div`
.chatsContainer{
/* border: 3px solid blue; */
/* display: flex;
align-items: center;
width: 100%; */
.allUsersChat{
    /* border: 1px rgb(47, 51, 54) green; */
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin: 20px 5px;
    .profilePic{
        border-radius: 50%;
        border: 3px solid white;
        width: 60px;
        height: 60px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        object-position: center;
    }
    .chatHeadingCon{
        /* border: rgb(47, 51, 54) 1px solid; */
        width: 100%;
        p{
            margin-top: 5px;
        }
    }
}
}

`
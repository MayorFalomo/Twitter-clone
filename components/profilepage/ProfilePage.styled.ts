import styled from "styled-components";


export const ProfileStyled = styled.div`
.profilePageStyled{
.subProfileStyle{
    /* border: 1px rgb(47, 51, 54) solid; */
    position: relative;
    color: white;
    .subProfileFlex{
        display: flex;
        align-items: center;
        gap: 30px;
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        position: absolute;
        top: 0;
        left: 0;
        padding: 40px;
        z-index: 999;
        width: 100%;
        /* .profileUsersDetails{
        margin-top: 100px;
        border: 2px red solid;
    } */
    }
    .profilePhotoContainers{
        position: relative;
.backDropPhoto{
        background-color: black;
        background-position: center;
        background-repeat:no-repeat;
        background-size: cover;
        object-fit: cover;
        height: 450px;
        width: 100%;
        border: 2px white solid;
    }
    .profileDp{
        height:300px;
        width: 300px;
        border-radius: 50%;
        background-color: black;
        background-position: center;
        background-repeat:no-repeat;
        background-size: cover;
        object-fit: cover;
        border: 2px white solid;
        position: absolute;
        bottom: -150px;
        left: 20px;
    }
    
    }
    .editProfileBtn{
        display: flex;
        justify-content:flex-end;
        align-items: flex-end;
        button{
        background-color: transparent;
        font-size: 26px;
        padding: 15px 30px;
        margin: 20px 5px;
        color: white;
        border: 3px rgb(47, 51, 54) solid;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        }
    }
    .userDetailsContainer{
        margin-top: 100px;
        .usersExtraInfo{
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 24px;
        }
    }
    .tweetsDetails{
        display: flex;
        justify-content: space-around;
        align-items: center;
        .no-border{
            /* border: 2px red solid; */
            padding: 25px 15px;
        }
        .border-bottom{
            border-bottom: 2px solid rgb(22,24,8);
        }
    }
    }
}
`
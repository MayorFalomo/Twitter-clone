import styled from "styled-components";

export const SingleUserStyle = styled.div`
.profilePageStyled {
.subProfileStyle{
    /* border: 1px rgb(47, 51, 54) solid; */
    position: relative;
    color: white;
    .subProfileFlex{
        display: flex;
        align-items: center;
        gap: 20px;
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
        /* border: 2px red solid; */
        .profileUsersDetails{
            p{
                font-size: 22px;
                margin-top: 10px;
            }
    }
    }
    .profilePhotoContainers{
        position: relative;
.backDropPhoto{
        background-color: black;
        background-position: center;
        background-repeat:no-repeat;
        background-size: cover;
        object-fit: cover;
        object-position: center;
        height: 350px;
        width: 100%;
        border-bottom: 2px rgb(47, 51, 54) solid;
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
        object-position: center;
        border: 2px black solid;
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
        margin-top: 60px;
        padding: 20px;
        .usersExtraInfo{
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 24px;
            .usersLink:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
    }
    .tweetsDetails{
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 2px rgb(47, 51, 54) solid;
        li{
            list-style: none;
            padding: 25px 15px;
            /* border: 2px red solid; */
        }
        .border-bottom{
            border-bottom: 4px #1d9aef solid;
            /* background-color: red; */
        }
    }
    .editProfileModal{
        position: fixed;
        top: 50%;
        left: 0%;
        /* z-index: 9999; */
        transform: translate(-50%, -50%);
        width: 600px;
        height: 80vh;
        border-radius: 30px;
        /* border: 2px red solid; */
    }
    .followContainer{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .profilePageIcons{
        /* border: 2px red solid; */
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 25px;
        margin-top: 20px;
        span{
            border: 1px rgb(47, 51, 54) solid;
            border-radius: 50% ;
            padding: 20px;
        };
        a{
            font-size: 24px;
            padding: 20px;
            border: 1px rgb(47, 51, 54) solid;
            border-radius: 50px ;
            cursor: pointer;
        }
    }
    .singleTweet{
        border-top: 1px solid rgb(47, 51, 54);
        border-bottom: 1px solid rgb(47, 51, 54);
    }
}
}
`;
import styled from "styled-components";

export const SingleUserStyle = styled.div`
.profilePageStyled {
    /* border: 2px red solid; */
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
        .arrowLeft{
            /* border: #1d9aef 2px solid; */
            font-size: calc(20px + 0.25vw);
        }
        .profileUsersDetails{
            h1{
                font-size: calc(18px + 0.25vw);         
            }
            p{
                margin-top:5px;
                font-size: calc(14px + 0.25vw);
            }
            a{
                border: 2px solid red;
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
          @media (max-width: 450px ) {
            height: 200px;
        }
    }
    .profileDp{
        height:150px;
        width: 150px;
        border-radius: 50%;
        background-color: black;
        background-position: center;
        background-repeat:no-repeat;
        background-size: cover;
        object-fit: cover;
        object-position: center;
        border: 2px black solid;
        position: absolute;
        bottom: -100px;
        left: 20px;
        @media (max-width: 450px ) {
            width: 150px;
            height: 150px;
            position: absolute;
            bottom: -70px;
        }
    }
    
    }
    .editProfileBtn{
        display: flex;
        justify-content:flex-end;
        align-items: flex-end;
        button{
        background-color: transparent;
        /* font-size: 26px; */
        font-size: calc(18px + 0.25vw);
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
        margin-top: 40px;
        padding: 20px;
        h1{
            font-size: calc(22px + 0.25vw);
        }
        .usersAt{
            font-size: calc(16px + 0.25vw);
        }
        .usersBio{
            font-size: calc(18px + 0.25vw);
        }
        .usersExtraInfo{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            font-size: calc(16px + 0.25vw);     
            .usersLink:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
        .createdAt{
            font-size: calc(16px + 0.25vw);
            margin-top: 5px;
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
            font-size: calc(16px + 0.25vw);
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
        p{
            font-size: calc(16px + 0.25vw);
        }
        p:hover{
            text-decoration: underline;
        }
        /* font-size: calc(18px + 0.25vw); */
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
            padding: 10px 15px;
            font-size: calc(20px + 0.25vw);
        };
        .singleUserFollow{
           .btn-follow{
        border-radius: 30px;
        padding:10px 20px;
        width: 120px;
        font-size: 18px;
        cursor: pointer;
    }
    .btn-following{
        border-radius: 30px;
        padding:10px 20px;
        width: 140px;
        font-size: 18px;
        cursor: pointer;
        background-color: transparent;
        color: white;
        border: 2px white solid;
        transition: 0.3s ease;
    }
    .btn-following:hover{
        color: red;
        transition: 0.3s ease;
    }
        }
    }
    .singleTweet{
        border-top: 1px solid rgb(47, 51, 54);
        border-bottom: 1px solid rgb(47, 51, 54);
    }
    .noTweetMessage{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    font-size: calc( 14px + 0.25vw);
}
}
.singleUserReplies{
    /* border: 1px solid rgb(47, 51, 54); */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    font-size: calc(18px + 0.25vw);

}
}
`;
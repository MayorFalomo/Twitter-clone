import styled from "styled-components";


export const ProfileStyled = styled.div`
.profilePageStyled {
.subProfileStyle{
    /* border: 1px rgb(47, 51, 54) solid; */
    position: relative;
    color: white;
    .subProfileFlex{
        display: flex;
        align-items: center;
        gap: 20px;
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.6px);
        -webkit-backdrop-filter: blur(7.6px);
        position: sticky;
        top: 0;
        left: 0;
        padding: 15px;
        z-index: 9;
        width: 100%;
        .profileUsersDetails{
            h1{
                font-size: calc(20px + 0.25vw);
            }
            p{
                font-size: calc(14px + 0.25vw);
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
        @media (max-width: 400px ) {
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
        bottom: -80px;
        left: 20px;
        @media (max-width: 600px ) {
            width: 100px;
            height: 100px;
            position: absolute;
            bottom: -90px;
        }
        @media (max-width: 400px ) {
            width: 100px;
            height: 100px;
            position: absolute;
            left: 5px;
            bottom: -50px;
        }
    }
    
    }
    .editProfileBtn{
        display: flex;
        justify-content:flex-end;
        align-items: flex-end;
        button{
        background-color: transparent;
        font-size: calc(16px + 0.25vw);
        padding: 10px 20px;
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
        padding: 10px;
        @media (max-width: 600px ) {
          margin-top: 0px;
        }
        .flexName{
            display: flex;
            align-items: center;
            gap: 10px;
            span{
                font-size: calc(18px + 0.25vw);
                padding-top: 5px;
            }
        }
        h1{
        font-size: calc(20px + 0.25vw);
        }
        p{
        font-size: calc(16px + 0.25vw);
        }
        .verifiedIcon{
             font-size: calc(26px + 0.25vw);
        }
        .usersBio{
            p{
                font-size: calc(18px + 0.25vw);
                @media (max-width: 400px ) {
                font-size: calc(14px + 0.25vw);
                }
            }
        }
        .usersExtraInfoContainer{
            
            .usersExtraInfo{
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            font-size: calc(14px + 0.25vw);
            .usersLink:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
        p{
            /* border: 2px red solid; */
            font-size: calc(14px + 0.25vw);
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
       
    }
    .followContainer{
        display: flex;
        align-items: center;
        gap: 20px;
        span{
            font-size: calc(18px + 0.25vw);
        }
    }
    }
}
.opaque{
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
            font-size: calc(18px + 0.25vw);
            margin-top: 10px;
            }
    }
    .arraowBack{
        font-size: calc(24px + 0.25vw);
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
        height: 350px;
        width: 100%;
        border-bottom: 2px rgb(47, 51, 54) solid;
    }
    .profileDp{
        height:350px;
        width: 250px;
        border-radius: 50%;
        background-color: black;
        background-position: center;
        background-repeat:no-repeat;
        background-size: cover;
        object-fit: cover;
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
        top: 40%;
        left: 50%;
        z-index: 9999;
        transform: translate(-50%, -50%);
        width: 700px;
        height: 60vh;
        border-radius: 30px;
        overflow: auto;
       @media (max-width:1300px) {
        width: 70% ;
       }
       @media (max-width:700px) {
        width: 100% ;
        height: 100vh;
        bottom: 0;
        transform: translate(-50%, -40%);
        border-radius: 0;
       }
    }
    .removeModal{
        display: none;
    }
        .overlay{
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9;
        background: rgba(255, 255, 255, 0);
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2.1px);
        -webkit-backdrop-filter: blur(2.1px);
    }
    .hideModal{
        display: none;
    }
    }
}
`
import styled from "styled-components";

export const SingleUserStyle = styled.div`
.profilePageStyled {

.subProfileStyle{
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
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: calc(18px + 0.25vw);         
            }
            p{
                margin-top:5px;
                font-size: calc(14px + 0.25vw);
            }
          
    }
    .userReplies{
    /* border: 1px solid rgb(47, 51, 54); */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh !important;
    width: 100% !important;
    font-size: calc(18px + 0.25vw);
    /* border: 2px red solid !important; */
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
        left: 10px;
        @media (max-width: 450px ) {
            width: 100px;
            height: 100px;
            position: absolute;

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
        /* font-size: 26px; */
        font-size: calc(18px + 0.25vw);
        padding: 15px 30px;
        margin: 20px 5px;
        color: white;
        border: 3px rgb(47, 51, 54) solid;
        outline: none;
        border-radius: 40px;
        cursor: pointer;
        @media screen {
         padding   :10px 20px ;
        }
        }
    }
    .userDetailsContainer{
        margin-top: 20px;
        padding: 20px;
        h1{
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: calc(22px + 0.25vw);
            @media (max-width: 500px) {
                font-size: calc(20px + 0.25vw);
            }
        }
        .usersAt{
            font-size: calc(16px + 0.25vw);
              @media (max-width: 500px) {
                font-size: calc(14px + 0.25vw);
            }
        }
        .usersBio{
            font-size: calc(18px + 0.25vw);
              @media (max-width: 500px) {
                font-size: calc(16px + 0.25vw);
            }
        }
        .usersExtraInfo{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            font-size: calc(16px + 0.25vw);  
              @media (max-width: 500px) {
                font-size: calc(14px + 0.25vw);
            }   
            .usersLink:hover{
                text-decoration: underline;
                cursor: pointer;
            }
        }
        .createdAt{
            font-size: calc(16px + 0.25vw);
            margin-top: 5px;
              @media (max-width: 500px) {
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
    }
    .profilePageIcons{
        /* border: 2px red solid; */
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 25px;
        margin-top: 20px;
        @media (max-width: 600px) {
            gap: 10px;
        }
        .pageIcons{
            position: relative;
            .optionsModal{
                position: absolute;
                min-width: 250px;
                 width: auto;
                left: -50px;
                bottom: -40px;
                z-index: 2;
                padding: 8px 5px;
                background-color: black;
                color: white;
                /* border: #1d9aef 2px solid; */
                /* border-radius: 15px; */
                box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                p{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    /* border: 2px red solid; */
                    font-size: calc(14px + 0.25vw);
                    cursor: pointer;
                }
            }
        }
        .dots{
            min-height: 30px;
            min-width: 30px;
            display: grid;
            place-content: center;
            border: 1px rgb(47, 51, 54) solid;
            border-radius: 50% ;
            padding: 10px 10px;
            font-size: calc(18px + 0.25vw);
            cursor: pointer;
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
        .blockedBtnContainer {
            margin-right: 10px;
            /* border: #1d9aef 2px solid; */
            .blockBtn, .unBlockBtn{
                border-radius: 20px;
                padding: 7px 20px;
                background-color: red;
                color: white;
                cursor: pointer;
                font-size: 16px;
                border: none;
                outline: none;
                
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
.blockedContainer{
    /* border: 2px green solid; */
    /* border: 2px red solid; */
    height: 40vh;
    .subCon{
        height: 100%;
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        @media (max-width: 610px ) {
            width: 90% ;
        }
        h1{
            font-size: calc(26px + 0.25vw);
        }
        p{
            font-size: calc(14px + 0.25vw);
            color: #575B5F;
            font-weight: 600;
            margin-top: 10px;
        }
        button{
            margin-top: 30px;
            width: fit-content;
            padding: 10px 20px;
            border-radius: 20px;
            background-color: #1d9aef;
            color: white;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: calc(18px + 0.25vw);
             @media (max-width: 610px ) {
           padding: 7px 20px;
           margin-top: 20px;
           font-size: calc(16px +0.25vw);
        }
        }
    }
}
}

}
`;
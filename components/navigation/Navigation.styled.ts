import styled from "styled-components";

export const NavigationStyle = styled.div`

.navigationContainer {
    background-color: black;
    height: 100vh;
    overflow: scroll;
    .flexHeading{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        font-size: calc(16px + 0.25vw);
        font-weight: 600;
        color: white;
        .closeNav{
            font-size: calc(24px + 0.25vw);
            font-weight: 600;
        }
    }
    .userDetailsCon{
    .userDetailsInfo{
        padding: 10px;
        .detailsInfo{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .profilePic{
                min-width: 50px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: black;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                object-fit: cover;
                object-position: center;
            }
            span{
                font-size: calc(20px + 0.25vw);
                border: 1px solid rgb(47, 51, 54) ;
                border-radius: 50%;
                padding: 3px 7px;
            }
        }
       
    }
     .followersCon{
            /* margin-top: 5px; */
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 10px;
        }
        ul{
            /* border: 2px red solid; */
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            padding: 10px;
            li{
               .flexLinks{
                 display: flex;
                align-items: flex-start;
                gap: 30px;
                .navIcons{
                    font-size: calc(20px + 0.25vw)
                }
                .navTexts{
                    font-size: calc(16px + 0.25vw)
                }
               }
            }
            span{
                font-size: calc(20px + 0.25vw);
            }
        }
        .others{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 40px;
            .subOthers{
                /* border: 2px solid green; */
                width: 100%;
                padding: 10px;
            .faqFlex{
                display: flex;
                align-items: center;
                justify-content: space-between;
                /* border: 1px red solid; */
            }
            .tools{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                margin: 20px auto;
                span{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: calc(16px + 0.25vw);
                    /* border: 2px red solid; */
                }
            }
        }
        }
    }
}
`
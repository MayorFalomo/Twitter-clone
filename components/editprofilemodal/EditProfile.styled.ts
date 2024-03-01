import styled from 'styled-components'

export const EditProfileStyle = styled.div`
.modalContainer{
    background-color: black;
    height: 100%;
    padding-bottom: 80px ;
    position: relative;
    /* overflow: scroll; */
    /* border: 2px green solid; */
form{
    position: relative;
    .formNavHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        /* border: 2px red solid; */
        .flexNavHeader{
            display: flex;
            align-items: center;
            gap: 30px;
        }
        span{
        font-size: calc(24px + 0.25vw);
        }
        h1{
        font-size: calc(20px + 0.25vw);
        }
        p{
            color: #1d9aef;
        }
        .submitBtn{
            padding: 10px 25px;
            font-size: calc(20px + 0.25vw);
            /* font-size: 24px; */
            font-weight: 400 ;
            border-radius: 20px;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
    .editProfileImg{
    position: relative;
        .coverBg{
        height: 300px;
        width: 100%;
        border-bottom: 1px solid white;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        object-position: center;
        }
        .profilePicBg{
            height: 120px;
            width: 120px;
            border-radius: 50%;
            border: 1px white solid;
            position: absolute;
            bottom: -80px;
            left: 20px;
        }
        .uploadCoverPhoto{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            height: 100%;
            .camera{
           background: rgba(255, 255, 255, 0.13);
           border-radius: 16px;
           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
           backdrop-filter: blur(4.9px);
            }
        }
        .profilePicBg{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            .camera{
                background: rgba(255, 255, 255, 0.13);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(4.9px);
            }
        }
    }
    .labelContainer{
        margin-top: 100px;
        margin-left:20px ;
        margin-right:20px ;
        .labelBorder{
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 40px auto;
            padding: 10px;
            border: 2px rgb(47, 51, 54) solid;
            .flexLabelBorder{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            label{
                font-size: calc(18px + 0.25vw);
                /* font-size: 24px; */
                font-weight: 500;
                color: #575B5F;
            }
            input{
                background-color: transparent;
                outline: none;
                border: none;
                border-radius: 8px;
                padding: 10px 5px;
                color: white;
                font-weight:600;
            }
            input::placeholder{
                color:  #575B5F;
                font-size: calc(18px + 0.25vw);
                font-weight:400
            }
        }
          .activeInput{
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin: 40px auto;
            padding: 10px;
            border: 4px #1d9aef solid;
            .flexLabelBorder{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            label{
                /* font-size: 24px; */
                font-size: calc(18px + 0.25vw);
                font-weight: 500;
                color: #575B5F;
            }
            span{
                font-size: calc(18px + 0.25vw);
                /* font-size: 24px; */
                color: #575B5F;
            }
            input{
                background-color: transparent;
                outline: none;
                border: none;
                padding: 10px 5px;
                color: white;
                font-size: 24px;
                font-weight:600;
            }
            input::placeholder{
                color:  #575B5F;
                font-size: calc(18px + 0.25vw);
                font-weight:400;
            }
            }
    }
    .dateOfBirthCon{
        p{
            display: flex;
            align-items: center;
            gap: 35px;
            font-size: calc(16px + 0.25vw);
            font-weight: 500;
            color: rgb(113,118,123);
            margin-left: 20px;
                span{
                    display: list-item;
                    list-style: disc outside none;
                    color:  #1d9aef;
                    font-size: calc(18px + 0.25vw);
                    cursor: pointer;
                }
        }h1{
        font-size: calc(22px + 0.25vw);
         padding: 5px 20px;
        }
    .editBirth{
        margin: 5px 20px;
        display: flex;
        align-items: center;
        gap: 20px;
        .editMonth{
            border: 1px rgb(113,118,123) solid;
            width: 250px;
            border-radius: 10px;
            p{
               padding: 5px;
               margin-left: 6px;
            }
             .month{
            padding: 10px 1px ;
            background-color: #000;
            color: #fff;
            font-size: calc(18px + 0.25vw);
            border: none;
            outline: none;
            width: 90%;
        }
        }
        .editDay{
            border: 1px rgb(113,118,123) solid;
            width: 150px;
            border-radius: 8px;
            /* padding: 2px 10px; */
            p{
               padding: 5px;
               margin-left: 6px;
            }
             .day{
            padding: 10px 1px ;
            background-color: #000;
            color: #fff;
            font-size: calc(20px + 0.25vw);
            border: none;
            outline: none;
            width: 90%;
        }
        }
        .editYear{
            border: 1px rgb(113,118,123) solid;
            width: 200px;
            border-radius: 8px;
            /* padding: 2px 10px; */
            p{
               padding: 5px;
               margin-left: 6px;
            }
             .year{
            padding: 10px 1px ;
            background-color: #000;
            color: #fff;
            font-size: 22px;
            border: none;
            outline: none;
            width: 90%;
        }
        }  
    }
}
    ul{
        margin: 20px 10px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        h2{
            font-size: calc(17px + 0.25vw);    
        }
       
    }
    ul:hover{
        background-color: rgb(47, 51, 54);
        cursor: pointer;
    }
}
}

`
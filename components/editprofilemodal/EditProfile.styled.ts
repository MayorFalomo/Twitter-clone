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
        .submitBtn{
            padding: 10px 25px;
            font-size: 24px;
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
            height: 180px;
            width: 180px;
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
                font-size: 24px;
                font-weight: 500;
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
                font-size: 24px;
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
                font-size: 24px;
                font-weight: 500;
                color: #575B5F;
            }
            span{
                font-size: 24px;
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
                font-size: 24px;
                font-weight:400;
            }
            }
    }
    .editBirth{
        margin: 5px 20px;
        p{
            display: flex;
            align-items: center;
            gap: 35px;
            font-size: 20px;
            color:  #575B5F;
        }
        span{
        display: list-item;
        list-style: disc outside none;
        color:  #1d9aef;
        font-size: 24px;
        cursor: pointer;
        }
    }
    ul{
        margin: 20px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1{
            padding: 20px 5px;
        }
    }
    ul:hover{
        background-color: rgb(47, 51, 54);
        cursor: pointer;
    }
}
}

`
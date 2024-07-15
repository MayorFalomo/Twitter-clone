import styled from "styled-components";

export const MeetStyled = styled.div`
.meetContainer{
    .bgImg{
        background-color: #000;
        min-width: 60px;
        min-height: 60px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        display: grid;
        place-content: center;
        @media (max-width: 420px ) {
            min-width: 40px;
            min-height: 40px;
        }
    }
    .subConnectFlex{
        display: flex;
        align-items: flex-start;
        gap: 10px;
        .followFlex{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            h3{
                display: flex;
                align-items: center;
                gap: 15px;
                font-size: calc(18px + 0.25vw);
            }
            .usersAt{
                margin: 5px auto;
                /* border: 2px red solid; */
            }
             .singleUserFollow{
           .btn-follow{
        border-radius: 30px;
        padding:7px 10px;
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
    }
}
`
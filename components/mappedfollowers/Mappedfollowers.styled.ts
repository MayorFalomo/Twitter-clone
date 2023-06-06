import styled from "styled-components";

export const MappedFollowerStyled = styled.div`
    .subConnectFlex{
        display: flex;
        align-items: flex-start;
        gap: 10px;
         .bgImg{
        background-color: #000;
        width: 50px;
        height: 50px;
        min-width: 40px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        border: 1px #575b5f solid;
        @media (max-width: 420px ) {
            width: 40px;
            height: 40px;
        }
    }
        .followFlex{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .usersAt{
                margin: 5px auto;
                /* border: 2px red solid; */
            }
             .singleUserFollow{
                display: flex;
                align-items: center;
                gap: 10px;
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
`
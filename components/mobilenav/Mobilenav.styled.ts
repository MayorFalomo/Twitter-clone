import styled from "styled-components";

export const MobileNavStyle = styled.div`
.mobileNavCon {
    color: white;
    font-size: 30px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    border-top: 1px rgb(113, 118, 123) solid;
    width: 100vw;
    .navIcon{
        font-size: calc(26px + 0.25vw );
        color: rgb(113, 118, 123);
        /* border: 2px red solid; */
    }
    .activeRoute{
        color: #1d9aef;
        font-size: calc(26px + 0.25vw );
    }
    .notificationsCon{
        position: relative;
        .noOfNotifications{
            position: absolute;
            left: 5px;
            top: 2px;
            background-color: #1d9aef;
            width: 20px;
           height: 20px;
           display: flex;
           justify-content: center;
           transform: translate(-10%, -45%);
            font-size: calc(10px + 0.25vw);
            border-radius: 50%;
        }
    }
}
`
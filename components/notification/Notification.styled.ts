import styled from "styled-components";

export const NotifyStyle = styled.div`
.notifyCon{
    .notifyHeader{
    /* border-bottom: 2px red solid; */
    .notificationsFlex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
                    /* font-size: calc(16px + 0.25vw); */
        span{
            font-size: calc(24px + 0.25vw);
            opacity: 0.4;
        }
    }
    .switchNotifications{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 7px;
        list-style: none;
        font-size: calc(16px + 0.25vw);
        border-bottom: rgb(47, 51, 54)  1px solid;
        li{
            padding: 10px 20px;
        }
          .border-bottom{
            border-bottom: 7px #1d9aef solid;
            /* font-size: calc(16px + 0.25vw); */
            /* background-color: red; */
        }
    }
    }
    
}
.notificationsContainer{
    .profileDp{
        width: 70px;
        height: 70px;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
}
`
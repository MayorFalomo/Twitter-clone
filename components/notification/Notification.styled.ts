import styled from "styled-components";

export const NotifyStyle = styled.div`
.notifyCon{
    position: relative;
    .notifyHeader{
    /* border-bottom: 2px red solid; */
    .notificationsFlex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
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
     .mobileNav{
    /* display: none; */
  @media (max-width: 600px ) {
    .mobileNav{
      display: flex;
    position: fixed;
    bottom: 100px;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: black;
    border: solid 2px yellow;
  }
  }
}
}
.mainNotifyContainer{
      border-top: 1px solid rgb(47, 51, 54);
    border-bottom: 1px solid rgb(47, 51, 54);
.subNotificationsContainer{
    display: flex;
    align-items: start;
    gap: 10px;
    margin: 30px;
    .loveIcon {
        font-size: calc(28px + 0.25vw)
    }
    .profileDp{
        width: 40px;
        height: 40px;
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
    }
    .notificationContent{
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 10px;
        margin-bottom: 20px;
        p{
            font-weight: 500;
            font-size: calc(14px + 0.25vw);
           
        }
    }
}
}
`
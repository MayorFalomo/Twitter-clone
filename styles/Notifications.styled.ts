import styled from "styled-components"

export const NotificationsStyle = styled.div`
.notificationsCon{
    .mobileNav{
    display: none;
  }
  @media (max-width: 600px ) {
    .mobileNav{
      display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    background-color: black;
  }
  }
}
`
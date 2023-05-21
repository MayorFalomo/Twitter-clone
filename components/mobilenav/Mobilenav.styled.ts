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
}
`
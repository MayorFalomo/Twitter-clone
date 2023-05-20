import styled from "styled-components";

export const MobileNavStyle = styled.div`
.mobileNavCon {
    color: white;
    font-size: 30px;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    /* border: 2px green solid; */
    width: 100vw;
    span{
        font-size: calc(26px + 0.25vw );
        /* border: 2px red solid; */
    }
}
`
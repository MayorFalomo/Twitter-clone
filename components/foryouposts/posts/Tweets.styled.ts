import styled from "styled-components";

export const TweetsContainer = styled.div`
.tweetsContainer {
    .bookmarkAdded {
    background-color: #1d9aef;
    color: #fff;
    padding: 15px 20px;
     margin: auto;
    position: fixed;
    left: 40%;
    bottom: 70px;
    z-index: 999;
    font-size: calc(18px + 0.25vw);
    z-index: 9999;
    border-radius: 15px;
    @media (max-width: 600px ) {
        position: fixed;
        left: 25%;
    }
    @media (max-width: 400px ) {
        position: fixed;
        left: 18%;
    }
    }
}
`
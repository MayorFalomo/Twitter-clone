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
    .quill{
        position: fixed;
        bottom: 70px;
        right: 20px;
        z-index: 99;
        display: none;
        @media (max-width: 500px ) {
            display: flex;
             position: fixed;
        bottom: 70px;
        right: 20px;
        z-index: 99;
        }
    }
    .inactive{
        position: fixed;
        bottom: -200vh;
        left: 0;
        transition: all 0.4s ease;
    }
    .active{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999999999;
        transition: all 0.4s ease;
        background-color: black;
    }
   
    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70vh;
    }
}
`
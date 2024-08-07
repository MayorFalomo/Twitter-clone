import styled from "styled-components"

export const SuggestedStyle = styled.div`
/* border: 3px green solid; */
.suggestedContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px auto;
     .subSuggestedContainer{
        display: flex;
        align-items: center;
        gap: 30px;
        /* border: 2px red solid; */
        /* padding: 10px auto; */
        .profileImage{
      
        min-width:40px;
        min-height: 40px;
        background-color: black;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        border-radius: 50%;
        @media (max-width: 1830px) {
            width: 50px;
            height: 50px;
        }
    }
    h3{
        font-size: calc(14px + 0.25vw);
    }
    h3:hover{
        text-decoration: underline;
    }
    p{
        color: rgb(113,118,123);
         font-size: calc(1em + 1px)
        /* font-size: 20px; */
    }
    }
    .btn-follow{
        border-radius: 30px;
        padding:8px 15px;
        width: auto;
        font-size: calc(15px + 0.25vw);
        cursor: pointer;

    }
    .btn-following{
        border-radius: 30px;
        padding: 8px 15px;
       width: auto;
        font-size: calc(15px + 0.25vw);
        cursor: pointer;
        background-color: transparent;
        color: white;
        border: 2px white solid;
        transition: 0.3s ease;
    }
    .btn-following:hover{
        color: red;
        border: 2px red solid;
        transition: 0.3s ease;
    }
}
`
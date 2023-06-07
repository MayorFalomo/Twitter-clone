import styled from "styled-components";

export const WhoToFollowStyled = styled.div`
.whoToFollowContainer{
.suggestFollows{
    background-color: rgb(22,24,28);
    margin: 30px 10px;
    padding: 20px;
    border-radius: 20px;
    .showUsers{
        color:#1d9aef ;
        font-size: 22px;
        cursor: pointer;
    }
}
.policies{
        color: rgb(113,118,123);
        font-size: calc(12px + 0.25vw);
        cursor: pointer;
        margin: 10px 20px;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .policies span:hover{
        text-decoration: underline;
    }
}
`
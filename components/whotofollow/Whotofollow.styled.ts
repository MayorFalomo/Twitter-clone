import styled from "styled-components";

export const WhoToFollowStyled = styled.div`
.whoToFollowContainer{
.suggestFollows{
    /* border: 2px red solid; */
    background-color: rgb(22,24,28);
    margin: 30px 10px;
    padding: 20px;
    border-radius: 20px;
    .whoToFollow{
        /* border: 2px solid yellow; */
        /* padding: 20px auto; */
    }
    .showUsers{
        color:#1d9aef ;
        font-size: 22px;
        cursor: pointer;
    }
}
.policies{
        color: rgb(113,118,123);
        font-size: 18px;
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
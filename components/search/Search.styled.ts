import styled from 'styled-components'

export const SearchStyled = styled.div`
.subSearchContainer{
    /* display:flex; */
    /* border: 2px red solid; */
    /* justify-content: center; */
    position:relative;
    margin: auto;
    .search{
        padding:15px 30px;
        background-color: #202327;
        width: 100%;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        border: none;
        outline: none;
        color: #fff;
        font-size: 20px;
}
.search::placeholder{
    padding: 20px;
    font-size: 18px;
}
.searchBtn{
        position:absolute;
        left:8px;
        top: 10px;
        /* border: 2px blue solid; */
    }
}
`
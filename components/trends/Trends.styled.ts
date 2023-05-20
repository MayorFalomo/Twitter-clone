import styled from 'styled-components'


export const TrendStyle = styled.div`
.trends{
overflow: auto;
margin: 20px auto;
transition: all 0.3s ease;
.subTrendsContainer{
    background-color:rgb(22,24,28);
    margin: 30px 20px;
    border-radius: 20px;
 
    h1{
        margin-left:20px;
    }
      .showMore{
        color: #1d9aef;
        font-size: calc(18px + 0.25vw);
        padding: 30px;
    }
    .showMore:hover{
        background-color: rgb(22,24,8);
        cursor: pointer;
    }
}

 .trends:hover{
        background-color: rgb(22,24,8);
        cursor: pointer;
        transition: all 0.3s ease;
    }
}
`
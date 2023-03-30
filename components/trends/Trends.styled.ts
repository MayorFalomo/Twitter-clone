import styled from 'styled-components'


export const TrendStyle = styled.div`
.trends{
overflow: auto;
margin: 20px auto;
transition: all 0.3s ease;
/* border: 3px green solid; */
.subTrendsContainer{
    background-color:rgb(22,24,28);
    /* border: 2PX yellow SOLID; */
    margin: 30px 20px;
    border-radius: 20px;
    /* margin: 0px 10px; */
    /* width: 500px; */
    .mappedContainer{
        /* padding: 10px auto;
        border: 1px solid green; */
       
        .trends{
            /* padding:20px auto; */
            /* border: 1px solid yellow; */
    }
   
   
    }
    h1{
        margin-left:20px;
    }
      .showMore{
        color: #1d9aef;
        font-size: 24px;
        padding: 30px;
    }
    .showMore:hover{
        background-color: rgb(22,24,8);
        cursor: pointer;
    }
}
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
 .trends:hover{
        background-color: rgb(22,24,8);
        cursor: pointer;
        transition: all 0.3s ease;
    }
}
`
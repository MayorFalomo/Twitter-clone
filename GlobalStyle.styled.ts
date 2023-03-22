import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
     color: white;
    background-color: rgb(0,0,0);
    overflow-x: hidden;
    font-family: 'Open sans';
}
img{
    width: 100%;
}
a{
    text-decoration: none;
   
}
li{
    /* list-style: none; */
}
`;

export default GlobalStyle;

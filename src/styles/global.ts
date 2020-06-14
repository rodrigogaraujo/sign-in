import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        --primary: #00662B;
        --dark: #1A321D;
        --light: #64906A;
        --danger: red;
        --info: blue;
        --bg-color: #272c39;
        --border-top: #3b3b3b;
    }
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;;
    }
    h1, h2, h3, h4{
        margin: 0;
        padding: 0;
    }
    button{
        cursor: pointer;
    }
`;

export default Global;

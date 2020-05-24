import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    :root{
        --primary: #00662B;
        --dark: #1A321D;
        --light: #64906A;
    }
    
    *{
        margin: 0;
        padding: 0;
    }
    html{
        font-family: 'Inter', sans-serif;
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

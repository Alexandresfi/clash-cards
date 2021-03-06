import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.75%;
    }
}

body{
    background: #1E1A1B;
    opacity: 0.9;
    color: white;
    position: relative;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    position: relative;

    -webkit-font-smoothing: antialiased;
}

a{
    text-decoration: none;
    color: white;
}

`
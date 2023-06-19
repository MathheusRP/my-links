import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');


    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        background-color: #C8C8C8;
        overflow-x: hidden;
    }

    a, p, button, input, textarea, input, label, h1, h2, h3, h4, b {
        font-family: 'Lato', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    :root {
        --black: #282828;
        --white: #C8C8C8;
        --grey: #282828;
        --blue: #165895;
    }

`
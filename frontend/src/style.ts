import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body {
        height: 100vh;
        font-size: 1.6rem
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    * {
    margin: 0;
    padding: 0;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    *:visited {
    color: inherit;
}
`
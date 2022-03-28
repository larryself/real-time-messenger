import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500');

  html {
    font-size: 10px;
  }
  
  body {
    font-family: 'Monserrat', sans-serif;
    height: 100vh;
    font-size: 1.6rem;
    color: var(--white);
    background-color: var(--default-bg);
  }
  
  :root {
    --header-height: 86px;
    --grey-color: #2f2e2e;
    --dark-blue: #404463;
    --middle-grey: #40444B;
    --ligth-grey: #6B7280;
    --default-bg: #36393F;
    --white: #fff;
    --red-color: #C33364;
    --red : #D03535;
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

  input, button {
    outline: 0;
  }

  button {
    color: inherit;
    cursor: pointer;
  }

  *:visited {
    color: inherit;
  }
`

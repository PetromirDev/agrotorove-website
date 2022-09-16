import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  
  html, body {
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    position: relative;
  }
  
  html {
    font-size: .8em;
    font-family: 'Noto Sans Display', sans-serif;
    scroll-behavior: smooth;
    color: #19352b;
  }

  p {
    line-height: 140%;
  }

  a {
    text-decoration: none;
  }

  input, button, textarea {
    font-family: 'Noto Sans Display', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, a, span, p {
    color: inherit;
  }

  @media (min-width: 768px) {
    html {
      font-size: .9em;
    }
  }

  @media (min-width: 1280px) {
    html {
      font-size: 1em;
    }
  }
`

export default GlobalStyle;
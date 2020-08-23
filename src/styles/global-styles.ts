import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    min-width: 360px;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

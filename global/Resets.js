import { createGlobalStyle } from 'styled-components'

export const Resets = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
  }

  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

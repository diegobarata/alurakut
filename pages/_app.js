import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {AluraKutStyles} from '../src/lib/AlurakurtCommuns'
const GlobalStyle = createGlobalStyle`
  /* reset css */
  *{
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #D9E6F6;
    font-family: sans-serif;
  }

  #__next{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img{
    max-width: 100%;
    height: auto;
    display: block;
  }
  ${AluraKutStyles}
`
const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
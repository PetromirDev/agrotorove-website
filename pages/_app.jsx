import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyle"

const theme = {
  globalTransition: '.3s ease-in-out all',
  navbarHeight: '5.65rem',
  primary: '#42855B',
  background: '#fff',
  backgroundSecondary: '#FAFAFA',// FEF5ED
}

const App = ({ Component, pageProps }) => {
  return <ThemeProvider theme={theme}>
    <GlobalStyle/> 
    <Component {...pageProps} />
  </ThemeProvider>
  
}

export default App

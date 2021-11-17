import './App.css';
import {ThemeProvider, createTheme} from "@mui/material"
import {BrowserRouter, Route, Link} from "react-router-dom"
import Header from './header/Header';
import Body from './body/Body'
import Footer from './footer/Footer';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Body />
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App;

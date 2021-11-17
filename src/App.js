import './App.css';
import {ThemeProvider, createTheme} from "@mui/material"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from './header/Header';
import Body from './body/Body'
import Footer from './footer/Footer';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Body/>} />
          <Route exact  path="/home" element={<Body/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App;

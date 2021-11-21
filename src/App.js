import './App.css';
import {ThemeProvider, createTheme} from "@mui/material"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from './header/Header';
import Body from './body/Body'
import Footer from './footer/Footer';
import EducationH from './header/EducationH';
import ExperienceH from './header/ExperienceH';
import ProfileH from './header/ProfileH';
import ActivityH from './header/ActivityH';

const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Body/>} />
          <Route exact  path="/home" element={<Body/>} />
          <Route exact  path="/education" element={<EducationH/>} />
          <Route exact  path="/experience" element={<ExperienceH/>} />
          <Route exact  path="/profile" element={<ProfileH/>} />
          <Route exact  path="/activity" element={<ActivityH/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App;

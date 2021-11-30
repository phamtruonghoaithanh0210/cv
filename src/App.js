import React,{useState, useEffect, useMemo} from 'react';
import './App.css';
import {ThemeProvider, createTheme, } from "@mui/material"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from './header/Header';
import Body from './body/Body'
import Footer from './footer/Footer';
import EducationH from './header/EducationH';
import ExperienceH from './header/ExperienceH';
import ProfileH from './header/ProfileH';
import ActivityH from './header/ActivityH';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { amber, deepOrange, grey, yellow, blue } from '@mui/material/colors';


const ColorModeContext = React.createContext({ toggeColorMode: () => {} });

function App() {
  const [mode, setMode] = useState("light")
  
  const colorMode = useMemo(()=> ({
    toggleColorMode: () => {
        setMode( (prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }
    }),[],
)  
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? {
              primary : amber,
              divider: amber[100],
              background : {
                default: yellow[50],
                paper: amber[50],
              },
              text: {
                primary: grey[900],
                secondary : grey[900],
              },
              mauIcon: blue[600],
          } : {
            primary: deepOrange,
            divider: deepOrange[100],
            background : {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[900],
            },
            mauIcon: blue[600],
          })
        },
      }),
    [mode],
  );
  console.info(theme)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout( () => {
      setLoading(false)
    },5000)
  }, [])
  return (
    <>
    {loading ? (
      <div className="App">
      <ClimbingBoxLoader 
        size={30}
        color={"#ff8ba7"}
        loading={loading}
      />

      <ClimbingBoxLoader 
        size={30}
        color={"#ff8ba7"}
        loading={loading}
      />
      </div>
    ) : (
    <ColorModeContext.Provider value={colorMode}>  
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header theme={mode} setTheme={setMode} />
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
    </ColorModeContext.Provider>  
    )}
    </>
  )
}

export default App;

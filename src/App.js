import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import BaseHeader from './headers/BaseHeader';
import ButtonPage from './components/buttonPage/ButtonPage';
import CardPage from './components/cardPage/CardPage'
import {yellow, amber, red, deepOrange, lightBlue, blue, orange, deepPurple, green, blueGrey} from '@mui/material/colors'
import { useState } from 'react';
import { BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

let themeArray = [createTheme({}),
  createTheme({
    palette: {
      primary:{
        main: red[500],
        dark:red[900]
      },
      // secondary:{

      // }
    }
  }),
  createTheme({
    palette: {
      primary:{
      main:amber[500],
      dark: amber[700]
      },
      // secondary:{

      // }
    }
  }),
  createTheme({
    palette: {
      primary:{
        main: lightBlue[600],
        dark:blue[800]
      },
      // secondary:{

      // }
    }
  }),
  createTheme({
    palette: {
      primary:{
        main: deepOrange[500],
        dark: deepOrange[600]
      },
      // secondary:{

      // }
    }
  }),
  createTheme({
    palette: {
      primary:{
        main: green[400],
        dark:green[900]
      },
      // secondary:{

      // }
    }
  }),
  createTheme({
    palette: {
      primary:{
        main: deepPurple[400],
        dark: deepPurple[700]
      },
      // secondary:{
      // }
    }
  }),
  createTheme({
    palette: {
      primary:{
        main: blueGrey[200],
        dark: blueGrey[400]
      },
      // secondary:{
      // }
    }
  }),
    createTheme({
    palette: {
      primary:{
        main: blueGrey[800],
        dark: blueGrey[900]
      },
      // secondary:{
      // }
    }
  }),

    
]

function App() {
  const [themeNum, setThemeNum] = useState(0)
  const themeChange =(newThemeNum) =>{
      setThemeNum(newThemeNum)
  }
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Box sx={{height:'100%'}}>
        <CssBaseline />
        <ThemeProvider theme={themeArray[themeNum]}>
                  
        <Box className="App" sx ={{ height: '200%', backgroundColor: "primary.light"}}>
            <BaseHeader></BaseHeader>
            <Routes>
              <Route path="" element={<ButtonPage themeChange={themeChange} />}></Route>
              <Route path="/calculator" element={<CardPage />}></Route>
            </Routes>
        </Box>
        </ThemeProvider>
      </Box>
    </Router>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import AuthProvider from './auth/AuthProvider';
import HomePage from './components/HomePage';
import SigninModal from './components/SigninModal';

import './App.css';

function App() {
  const lightTheme = {
    palette: {
      mode:'light',
    },
  };

  const darkTheme = {
    palette: {
      mode: 'dark',
    },
  };

  const [theme, setTheme] = useState(true);

  const [open, setOpen] = useState(true);

  const icon = !theme ? <Brightness7Icon /> :<Brightness4Icon />
  const appliedTheme = createTheme(theme ? darkTheme : lightTheme);

  
  // localhost:3000/job-abc - protected route
  // nếu user chưa login => redirect đến /login và đồng thời đưa /job-abc vào location.state hoặc location searchParams
  // sau khi signin thành công sẽ redirect về state.currentLocation
  // function redirectToLoginAndKeepCurrentLocation(currentLocation) {
  //   navigate('/login', {
  //     state: {
  //       currentLocation: currentLocation
  //     }
  //   })
  // }

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} />}>
              <Route path="/login" element={<SigninModal />} />
              
            </Route>
          </Routes>
        </ThemeProvider>        
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
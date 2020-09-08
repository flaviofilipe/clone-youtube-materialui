import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import { useSelector } from 'react-redux';

import Home from './pages/Home';

function App() {
  const { dark_mode } = useSelector(state => state.userSettings);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: dark_mode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: dark_mode ? '#232323' : '#FFF',
        dark: dark_mode ? '#181818' : '#f4f6f8',
        paper: dark_mode ? '#232323' : '#FFF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

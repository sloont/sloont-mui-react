import React from 'react';
import './App.css';

// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';

import Navigation from './mainNavigation/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './home/Home';
import Projects from './projects/Projects';
import About from './about/About';
import Snips from './snips/Snips';
import store from './store/store';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#75cff8',
      },
      secondary: {
        main: '#ff905b',
      },
      background: {
        paper: '#232a2e',
        default: '#1a2125'
      },
      shadows: Array(25).fill('none'),
      grey: {
        50:  '#f2fbff',
        100: '#edf6fc',
        200: '#e6eff4',
        300: '#d7e0e6',
        400: '#b4bdc2',
        500: '#959ea3',
        600: '#6d757a',
        700: '#596166',
        800: '#3a4246',
        900: '#1a2125',
      }
      

    },
  
  });

  return (
    
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navigation />
          <main>
  
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/projects"><Projects /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/snips"><Snips /></Route>
              </Switch>
  
          </main>
      </ThemeProvider>
      </Provider>
    </Router>
    
  );
}

export default App;

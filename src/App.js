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
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Snips from './pages/Snips';
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
        paper: 'rgba(255,255,255,0.05)',
        default: '#1a2125'
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

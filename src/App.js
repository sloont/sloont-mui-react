import React from 'react';
import './App.css';

// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';

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

const App = () => {
  
  // const theme = createMuiTheme({
  //   palette: {
  //     type: 'dark',
  //     primary: {
  //       main: '#29b6f6',
  //     },
  //     secondary: {
  //       main: '#ff5301',
  //     }

  //   },
  
  // });

  return (
    
    <Router>
      {/* <ThemeProvider theme={theme}> */}
      <div className="App">
        <CssBaseline />
        <Navigation />
      </div>
      
      <Switch>
        <Route exact path="/">{Home}</Route>
        <Route path="/projects">{Projects}</Route>
        <Route path="/about">{About}</Route>
        <Route path="/snips">{Snips}</Route>
      </Switch>
      {/* </ThemeProvider> */}
    </Router>
    
  );
}

export default App;

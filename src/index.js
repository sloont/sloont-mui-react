import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import store from './store/store';

import { loadPosts } from './store/postsSlice';

store.dispatch(loadPosts());

ReactDOM.render(
  
    <App />
  ,
  document.getElementById('root')
);


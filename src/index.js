import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import App from './components/App';

render(
  <Router>
    <ScrollToTop/>
    <App />
  </Router>,
  document.querySelector('#react-container')
)
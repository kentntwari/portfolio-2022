import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import BlurState from './global/context/BlurState';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BlurState>
        <App />
      </BlurState>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/menu';
import Home from './routes/home';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from './components/menu';
import Home from './routes/home';
import About from './routes/about';
import Works from './routes/works';
import Website from './routes/works/Website';
import Footer from './components/footer';

import CircleTopLeft from './components/background/app/CircleTopLeft';
import CircleBottomRight from './components/background/app/CircleBottomRight';

function App() {
  return (
    <div className="App w-full px-[30px] py-16 relative overflow-x-hidden">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />}>
          <Route path=":website" element={<Website />} />
        </Route>
      </Routes>

      <Footer />

      <Fragment>
        <CircleTopLeft />
        <CircleBottomRight />
      </Fragment>
    </div>
  );
}

export default App;

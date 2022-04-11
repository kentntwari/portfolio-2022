import React, { Fragment, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import BlurredBg from './components/background/app/BlurredBg';
import Menu from './components/menu/index';
import Footer from './components/footer/index';
import { LoadPage } from './components/loaders/page/index';

import CircleTopLeft from './components/background/app/CircleTopLeft';
import CircleBottomRight from './components/background/app/CircleBottomRight';

const Home = lazy(() => import('./routes/home/index'));
const About = lazy(() => import('./routes/about/index'));
const Works = lazy(() => import('./routes/works/index'));
const Website = lazy(() => import('./routes/website/index'));

function App() {
  return (
    <div className="App">
      <Fragment>
        <Menu />

        <BlurredBg>
          <Suspense fallback={<LoadPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />}></Route>
              <Route path="/works/:website" element={<Website />} />
            </Routes>
          </Suspense>
        </BlurredBg>

        <Footer />
      </Fragment>

      <Fragment>
        <CircleTopLeft />
        <CircleBottomRight />
      </Fragment>
    </div>
  );
}

export default App;

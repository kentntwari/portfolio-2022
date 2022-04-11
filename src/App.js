import React, { Fragment } from 'react';

// import BlurredBg from './components/background/app/component.blurredBg';
import Menu from './components/menu';
import Footer from './components/footer';
// import { LoadPage } from './components/loaders/page/loaders.page';

// import CircleTopLeft from './components/background/app/component.circleTopLeft';
// import CircleBottomRight from './components/background/app/component.circleBottomRight';

// const Home = lazy(() => import('./routes/home'));
// const About = lazy(() => import('./routes/about'));
// const Works = lazy(() => import('./routes/works'));
// const Website = lazy(() => import('./routes/website'));

function App() {
  return (
    <div className="App">
      <Fragment>
        <Menu />

        {/* <BlurredBg>
          <Suspense fallback={<LoadPage />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />}></Route>
              <Route path="/works/:website" element={<Website />} />
            </Routes>
          </Suspense>
        </BlurredBg> */}

        <Footer />
      </Fragment>
{/* 
      <Fragment>
        <CircleTopLeft />
        <CircleBottomRight />
      </Fragment> */}
    </div>
  );
}

export default App;

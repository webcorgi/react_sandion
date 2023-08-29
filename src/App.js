// import logo from './logo.svg';
import { useEffect, useState } from 'react';

import 'css/App.css';
import Home from 'pages/Home';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';
import Header from 'include/Header';
import Wrapper from 'include/Wrapper';
import Dimension from 'pages/Dimension';
// import Footer from 'include/Footer';


function App() {
  return (
    //  basename={process.env.PUBLIC_URL}
    //  
    <BrowserRouter basename={'/react_sandion'}>
      <Wrapper>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dimension" element={<Dimension />} />
          {/* <Route path="/test" element={<Test />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
import 'css/App.css';
import Home from 'pages/Home';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import ScrollTop from 'include/ScrollTop';
import Header from 'include/Header';
import Wrapper from 'include/Wrapper';
import Dimension from 'pages/Dimension';
import { useState } from 'react';

function App() {
  const [isPageDemension, setIsPageDemension] = useState(false);

  return (
    <BrowserRouter>
      <Wrapper>
        <ScrollTop />
        <Header isPageDemension={isPageDemension} setIsPageDemension={setIsPageDemension} />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dimension" element={<Dimension />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
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

function App() {
  return (
    <BrowserRouter basename='react_sandion'>
      <Wrapper>
        <ScrollTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/dimension" element={<Dimension />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
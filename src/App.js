import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Home from './Home';
import Page3 from './Page3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/*' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

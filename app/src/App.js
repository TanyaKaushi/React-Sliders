import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Slider2 from './views/Slider2';
import Slider1 from './views/Slider1';
import Slider3 from './views/Slider3';
import Slider4 from './views/Slider4';
import Slider5 from './views/Slider5';

function App() {
  return (
    <div className="App">
      <Main />

      <Router>
        <Routes>
          <Route path='/' element={< Slider1 />} />
          <Route path='/slider2' element={< Slider2 />} />
          <Route path='/slider3' element={< Slider3 />} />
          <Route path='/slider4' element={< Slider4 />} />
          <Route path='/slider5' element={< Slider5 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import OurPortfolio from './Pages/OurPortfolio/OurPortfolio';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/portfolio" element={<OurPortfolio />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/navBar';
import Sliders from './Components/sliders';
import Text from './Components/text';
import Products from './Components/products';
import About from './Components/About';
import Contact from './Components/contacts';
import Home from './Components/Home';
import Display from './Components/display';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/product/:id' element={<Display />} />
      </Routes>
    </Router>
  );
 
}

export default App;

import React from 'react';
import Home from './Components/Home';
import './App.css';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Pricing from './Components/Pricing';
function App() {
  return (
    <div className="App">
        <Home/>   
       <Product/>  
       <Pricing/>
      <Contact/>
    </div>
  );
}
export default App;


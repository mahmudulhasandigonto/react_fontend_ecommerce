import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Shop from './components/Shop';


function App() {

  return (
    <Router>
      <Header />
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />



      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

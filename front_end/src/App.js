import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import NavBar from './Components/Menu/NavBar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import Catalog from './Components/Catalog/Catalog';
import AboutUs from './Components/AboutUs/AboutUs';
import BuyerProfile from './Components/buyerProfile/BuyerProfile';
import SellerProfile from './Components/SellerProfile/sellerProfile';
import ShoppingCart  from './Components/ShoppingCart/shoppingCart';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/sobreNosotros" element={<AboutUs/>} />
        <Route  path="/catalogoProductos" element={<Catalog/>} />
        <Route  path="/catalogoProductos" element={<Catalog/>} />
        <Route  path="/vendedor" element={<SellerProfile/>} />
        <Route  path="/comprador" element={<BuyerProfile/>} />
        <Route  path="/carrito" element={<ShoppingCart/>} />
      </Routes>
    <Footer/>
  </Router>
    );
}

export default App;


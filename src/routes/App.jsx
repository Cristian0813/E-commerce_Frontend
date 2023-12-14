import React, { useState } from 'react';

import './style/app.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import NavBar from '../components/navbar/navbar';
import Home from '../pages/home/home';
import AboutEcommerce from '../pages/about/about';
import Product from '../pages/product/product';
import Contact from '../pages/contact/contact';
import ShowCart from '../pages/cart/showcart';

function App() {
  const [showCart, setshowCart] = useState([]);
  const [products, setProducts] = useState([]); 

  const addToCart = (product) => {
    setshowCart([...showCart, product]);
  };

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar setProducts={setProducts} />}>
              <Route index element={<Home />} />
              <Route path='SobreNosotros' element={<AboutEcommerce />} />
              <Route path='Contacto' element={<Contact />} />
              <Route path='NuestrosProductos' element={<Product addToCart={addToCart} showCart={showCart} />} />
              <Route path='Compra' element={<ShowCart addToCart={addToCart} showCart={showCart} />} />
              <Route path='*' element={<Navigate replace to='/' />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

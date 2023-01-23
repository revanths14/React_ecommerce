import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home ';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Products from './Components/Products';
import Cart from './Components/Cart';



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product/:id" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />


        </Routes>
        
        
      </div>
    )
  }
}


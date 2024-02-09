import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Shop from './shop/Shop'
import Cart from './cart/Cart'
import SingleProduct from './singleProduct/SingleProduct'
export default function index() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product/:id' element={<SingleProduct />} />
    </Routes>
  )
}

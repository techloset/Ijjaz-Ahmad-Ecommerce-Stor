import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
import SingleProduct from './singleProduct'
export default function index() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
      </Routes>
    </>
  )
}

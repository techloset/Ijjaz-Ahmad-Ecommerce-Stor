import React from 'react'
import Hero from './Hero'
import Deal from './Deal'
import FeaturedProduct from './FeaturedProduct'
import Product from './Product'
import Blog from './Blog'
import Client from './Client'

export default function index() {
  return (
    <>
      <Hero />
      <Product />
      <Deal />
      <FeaturedProduct />
      <Client />
      <Blog />
    </>
  )
}

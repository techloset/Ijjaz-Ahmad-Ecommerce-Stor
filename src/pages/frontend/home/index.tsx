import React from 'react'
import Hero from './Hero'
import FeaturedProduct from './FeaturedProduct'
import Product from './Product'
import Blog from './Blog'
import Client from './Client'
import AddSection from '../../../components/addSection/Add'
export default function index() {
  return (
    <>
      <Hero />
      <Product />
      <AddSection />
      <FeaturedProduct />
      <Client />
      <Blog />
    </>
  )
}

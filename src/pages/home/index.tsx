import React from 'react'
import Hero from './hero/Hero'
import FeaturedProduct from './featuredProduct/FeaturedProduct'
import Product from './product/Product'
import Blog from './blog/Blog'
import Client from './client/Client'
import AddSection from '../../components/addSection/Add'

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

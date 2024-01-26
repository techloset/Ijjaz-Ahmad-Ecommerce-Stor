import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import images from '../../assets/icons';

export default function SecBar() {
  return (
    <>

      <div className="bg-gray">
        <header className='container'>
          <nav className="mx-auto text-center py-3 sm:py-0 md:flex items-center justify-between">
            <Link to={'/shop'} className='bg-warning text-white p-3 sm:p-4  mt-sm-6'>Browse categories <i className="fa-solid fa-angle-down ms-4"></i>
            </Link>
            <div className="menu hidden md-2:block">
              <ul className='flex items-center'>
                <li className='mx-3'>
                  <Link to={'/'} className='flex'>
                    Home
                    <img src={images.arrrow} className="w-[1.2rem] ms-4" />
                  </Link>
                </li>
                <li className='mx-3'>
                  <Link to={'/catalog'} className='flex'>
                    Catalog
                    <img src={images.arrrow} className="w-[1.2rem] ms-4" />
                  </Link>
                </li>
                <li className='mx-3'>
                  <Link to={'/'}>
                    Blog
                  </Link>
                </li>
                <li className='mx-3'>
                  <Link to={'/shop'}>
                    Shop
                  </Link>
                </li>
                <li className='mx-3'>
                  <Link to={'/about'}>
                    About us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="menu">
              <p className='text-primary font-bold mt-5 md:mt-0'>30 Days Free Return</p>
            </div>
          </nav>
        </header>
      </div>

    </>
  )
}

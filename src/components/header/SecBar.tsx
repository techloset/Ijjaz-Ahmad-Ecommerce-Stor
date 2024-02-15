import React from 'react'
import { Link } from 'react-router-dom';
import arrrow from '../../assets/icons/arrow-down.svg';
import arrrow1 from '../../assets/icons/arrow-down-2.svg';

export default function SecBar() {
  return (
    <div className="bg-gray font-poppins">
      <header className='px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]'>
        <nav className="text-center py-3 sm:py-0 md:flex items-center justify-between pt-[20px] sm:pt-0'">
          <div className="flex justify-center  bg-warning text-white text-center p-4">
            <Link to={'/shop'} className='text-center font-medium text-[16px]'>
              Browse categories
            </Link>
            <img src={arrrow1} className="ms-4" />
          </div>
          <div className="menu hidden md-2:block">
            <ul className='flex items-center text-[16px] font-medium'>
              <li className='mx-3'>
                <Link to={'/'} className='flex'>
                  Home
                  <img src={arrrow} className="w-[1.2rem] ms-4" />
                </Link>
              </li>
              <li className='mx-3'>
                <Link to={'/catalog'} className='flex'>
                  Catalog
                  <img src={arrrow} className="w-[1.2rem] ms-4" />
                </Link>
              </li>
              <li className='mx-3'>
                <Link to={'/'}>
                  Blog
                </Link>
              </li>
              <li className='mx-3'>
                <Link to={'/'} className='flex'>
                  Pages
                  <img src={arrrow} className="w-[1.2rem] ms-4" />
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
  )
}

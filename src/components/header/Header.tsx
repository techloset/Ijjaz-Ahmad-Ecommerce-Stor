import React from 'react'
import logo from '../../assets/images/header/logo.png'
import heart from '../../assets/icons/heart.svg'
import user from '../../assets/icons/user.svg'
import Cart from '../../assets/icons/shopping-cart.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
interface RootState {
  cart: {
    cart: [];
  };
}
export default function Header() {
  const cart = useSelector((state: RootState) => state.cart.cart)
  return (

    <div className="bg-primary font-poppins">
      <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
        <header className="header py-4">
          <div className="flex items-center justify-between">
            <div className='flex items-center justify-between'>
              <div className="logo">
                <img src={logo} className='max-w-[140px] h-[39px]' alt="logo" />
              </div>
              <div className="hidden md-2:block">
                <form className="flex items-center search ms-8">
                  <div>
                    <input type='text' className="outline-none rounded-[20px] relative w-72 py-3 px-5 text-gray-900 placeholder:text-gray-400" placeholder='Search any things' />
                  </div>
                  <div>
                    <button type="submit" className="rounded-[20px] absolute top-[88px] left-[470px] py-3 px-5 bg-warning font-semibold text-white">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex'>
              <span className='flex text-white items-center font-sans '>
                <div>
                  <img src={user} className='w-[24px]' />
                </div>
                <span className='hidden md:block md: ms-3 text-sm font-normal'>Sign In</span>
              </span>
              <span className='flex text-white items-center font-sans mx-6'>
                <div className='flex'>
                  <img src={heart} className='w-[24px]' />
                  <span className="inline-flex items-center rounded-full bg-warning px-2 py-[2px] text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 me-2 ms-2">
                    0
                  </span>
                </div>
                <p className='hidden md:block text-sm font-normal'>Sign In</p>
              </span>
              <Link to='/cart' className='flex text-white items-center font-sans mx-3'>
                <div className='flex'>
                  <img src={Cart} className='w-[24px]' />
                  <span className="inline-flex items-center ms-3 rounded-full bg-warning px-2 py-[2px] text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 me-2">
                    {cart.length}
                  </span>
                </div>
                <p className='hidden md:block text-sm font-normal'>Cart</p>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

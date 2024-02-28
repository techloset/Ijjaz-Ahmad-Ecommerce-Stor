import React from 'react'
import backgroundImage from '../../assets/images/add/add.png'

export default function Add() {
  return (
    <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
      <div className="h-[417px] max-w-[1315px] sm:rounded-[20px] bg-center mx-auto flex bg-cover bg-no-repeat justify-end" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className=" flex flex-col items-center justify-center m-0 md:me-[100px] lg:me-[149px]">
          <button className='bg-warning rounded-3xl text-white py-[13px] px-[42px] text-[14px]'>New laptop</button>
          <h3 className='text-[41px] text-[#2E8FC5] font-semibold mt-6 mb-4'>Sale up to 50% off</h3>
          <p className='text-white mb-4'>12 inch hd display</p>
          <button className='bg-warning rounded-3xl py-[13px] text-white px-[42px] text-[14px]'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

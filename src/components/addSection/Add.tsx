import React from 'react'

export default function Add() {
  return (
    <>
      <div className="container ">
        <div className="adds mx-auto flex  justify-end">
              <div className=" flex flex-col items-center justify-center sm:me-40 md:me-52 lg:me-60">
                <button className='bg-warning rounded-3xl py-2 text-white px-5 text-[14px]'>New laptop</button>
                <h3 className='text-[41px] text-[#2E8FC5] font-semibold mt-6 mb-4'>Sale up to 50% off</h3>
                <p className='text-white mb-4'>12 inch hd display</p>
                <button className='bg-warning rounded-3xl py-2 text-white px-5 text-[14px]'>Shop Now</button>
              </div>
        </div>
      </div>
    </>
  )
}

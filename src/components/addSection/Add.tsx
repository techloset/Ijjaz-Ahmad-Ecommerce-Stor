import React from 'react'

export default function Add() {
  return (
    <>
      <div className="adds">
        <div className="container">
          <div className="bg-img am-w-[1315px] mx-auto">
            <div className="flex items-center sm:me-40 md:me-52 lg:me-60 lg:mt-20 mt-16 justify-end">
              <div className="text-center">
                <button className='bg-warning rounded-3xl py-2 text-white px-5 text-[14px]'>New laptop</button>
                <h3 className='text-[41px] text-[#2E8FC5] font-semibold mt-6 mb-4'>Sale up to 50% off</h3>
                <p className='text-white mb-4'>12 inch hd display</p>
                <button className='bg-warning rounded-3xl py-2 text-white px-5 text-[14px]'>Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

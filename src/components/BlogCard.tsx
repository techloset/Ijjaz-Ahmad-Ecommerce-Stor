import React from 'react'
import { blogCardProps } from '../constant/Types'

export default function BlogCard(props: blogCardProps) {
  return (
    <div className="my-10">
      <div className="border-2 rounded-3xl max-w-[650px] flex flex-wrap items-center justify-between">
        <div className='m-4 max-w-[302px] h-[274px]'>
          <img src={props.img} />
        </div>
        <div className="text-primary m-4 sm:m-0 w-[90%] sm:w-[45%]">
          <div>
            <button className='font-semibold border-2 py-2 px-4 rounded-full'>22,oct,2021</button>
          </div>
          <h3 className='text-[22.38px] font-semibold my-3'>Who avoids a<br />
            pain that produces?</h3>
          <p className='text-[13.17px]'>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
          <p className='mt-4'>By spacing tech</p>
        </div>
      </div>
    </div>
  )
}

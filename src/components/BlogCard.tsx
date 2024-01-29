import React from 'react'
import logo from "../assets/images/Product/headphone3.jpg";
type typePro = {
  img: string
}
export default function BlogCard(props: typePro) {
  return (
    <>
      <div className="my-10">
        <div className="border-2 px-5 border-gray-300 rounded-3xl flex mx-w-[650px] h-[375px] flex-wrap items-center justify-between overflow-hidden">
          <div className="w-[43%] flex items-center justify-center">
            <img src={props.img} className='w-[320px] h-[274px]' />
          </div>
          <div className="w-[50%]">
            <div className="text-primary">
              <div>
                <button className='font-semibold border-2 py-2 px-4 rounded-full'>22,oct,2021</button>
              </div>
              <h3 className='text-xl font-semibold my-3'>Who avoids a<br />
                pain that produces?</h3>
              <p className='w-[356px]'>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
              <p className='mt-4'>By spacing tech</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

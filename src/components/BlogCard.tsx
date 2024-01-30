import React from 'react'
type typePro = {
  img: string
}
export default function BlogCard(props: typePro) {
  return (
    <>
      <div className="my-10">
        <div className="border-2 rounded-3xl max-w-[650px] flex flex-wrap items-center justify-between gap-[10px] px-4 py-8">
          <div>
            <img src={props.img} className='max-w-[318px]' />
          </div>
          <div className="text-primary sm:w-[50%]">
            <div>
              <button className='font-semibold border-2 py-2 px-4 rounded-full'>22,oct,2021</button>
            </div>
            <h3 className='text-xl font-semibold my-3'>Who avoids a<br />
              pain that produces?</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
            <p className='mt-4'>By spacing tech</p>
          </div>
        </div>
      </div>
    </>
  )
}

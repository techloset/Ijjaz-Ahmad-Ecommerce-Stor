import React from 'react'
import { dealCardProps } from '../constant/Types'

export default function DealCard(Props: dealCardProps) {
  return (
    <div className="flex">
      <div>
        <img src={Props.img} className='w-[67px] h-[67px]' />
      </div>
      <div className='ms-5'>
        <h3 className='mb-2 text-[22px] text-primary font-bold'>{Props.title}</h3>
        <span className='text-[18px]'>{Props.des}</span>
      </div>
    </div>
  )
}

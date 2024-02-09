import React from 'react'
import { ClientCardProps } from '../constant/AllTypes'

export default function ClientCard(Props: ClientCardProps) {
    const { img, title } = Props

    return (
        <div className="card mb-14">
            <div className="border border-gray-300 rounded-3xl py-3 px-9 relative cardmain">
                <div className="flex flex-wrap text-center items-center">
                    <img src={img} className="w-[100px] h-[100px] me-[37px]" />
                    <h3 className='text-[15px] font-semibold text-primary'>{title}</h3>
                </div>
                <div className="content-1 mt-2 bg-footer p-2 rounded-xl">
                    <p className='font-normal text-[15px] text-primary'>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum Phasellus tristique aenean at lorem sed scelerisque.</p>
                </div>
            </div>
        </div>
    )
}

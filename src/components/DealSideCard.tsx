import React from 'react'
import logo from '../assets/images/Product/feathuer.png'
import star from '../assets/icons/star.svg'
import eye from '../assets/icons/eye.svg'
import cart from '../assets/icons/shopping-cart.svg'
export default function DealSildCard() {
    return (
        <>
            <div className="border-2 border-gray-300 rounded-3xl flex justify-center items-center px-[20px] gap-[62px] max-w-[803px] h-[505px]">
                <div className='w-[50%] flex items-center justify-center'>
                    <img src={logo} alt="Product" className='w-50' />
                </div>
                <div className="w-[50%]">
                    <div className="text">
                        <h3 className='text-xl font-semibold text-primary'>JBL bar 2.1 deep bass</h3>
                        <p className='text-lg font-semibold text-[#A4A4A4] my-5'>$11.5</p>
                        <div className="star-icon flex">
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                        </div>
                    </div>
                    <div className="text-white my-[37px]">
                        <div className="flex">
                            <div className="bg-[#E2F4FF] text-[22.09px] flex items-center justify-center font-semibold text-warning rounded-full w-[77px] h-[78px] mx-2">
                                <span>57</span>
                            </div>
                            <div className="bg-[#E2F4FF] text-[22.09px] flex items-center justify-center font-semibold text-warning rounded-full w-[77px] h-[78px] mx-2">
                                <span>11</span>
                            </div>
                            <div className="bg-[#E2F4FF] text-[22.09px] flex items-center justify-center font-semibold text-warning rounded-full w-[77px] h-[78px] mx-2">
                                <span>33</span>
                            </div>
                            <div className="bg-[#E2F4FF] text-[22.09px] flex items-center justify-center font-semibold text-warning rounded-full w-[77px] h-[78px] mx-2">
                                <span>59</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-white">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 bg-[#87BCD9] px-2 py-3 rounded-2xl">
                                <div className="flex justify-between items-center text-center">
                                    <p className='font-medium ms-1 md:ms-2 text-center'>Add To Cart</p>
                                    <div className="bg-warning p-2 py-1 text-center ms-3 md:ms-7 rounded-full">
                                        <img src={cart} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#87BCD9] flex items-center justify-center text-xl p-2 text-center rounded-2xl">
                                <img src={eye} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

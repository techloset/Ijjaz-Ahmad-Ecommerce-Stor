import React from 'react'
import logo from '../assets/images/Product/headphone.png'
import star from '../assets/icons/star.svg'
import eye from '../assets/icons/eye.svg'
import cart from '../assets/icons/shopping-cart.svg'
export default function DealSildCard() {
    return (
        <>
            <div className="card ">
                <div className="border-2 border-gray-300 rounded-3xl  flex justify-around  py-10 px-2">
                    <div >
                        <img src={logo} alt="Product" className='w-50' />
                    </div>
                    <div className="content">
                        <h3 className='mb-3 text-xl font-semibold text-primary'>Play Game</h3>
                        <p className='text-l font-semibold text-primary'>$11.5</p>
                        <div className="star-icon flex mt-2">
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                            <img src={star} className="ms-1" />
                        </div>
                        <div className="overlay text-white mt-7">
                            <div className="flex">
                                <div className="bg-[#E2F4FF] text-warning rounded-full px-4 py-3 mx-2">
                                    <span>57</span>
                                </div>
                                <div className="bg-[#E2F4FF] text-warning rounded-full px-4 py-3 mx-2">
                                    <span>11</span>
                                </div>
                                <div className="bg-[#E2F4FF] text-warning rounded-full px-4 py-3 mx-2">
                                    <span>33</span>
                                </div>
                                <div className="bg-[#E2F4FF] text-warning rounded-full px-4 py-3 mx-2">
                                    <span>59</span>
                                </div>
                            </div>
                        </div>
                        <div className="overlay text-white mt-7">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 bg-[#87BCD9] p-2 rounded-2xl">
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
            </div>
        </>
    )
}

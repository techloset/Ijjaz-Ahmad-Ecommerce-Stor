import React from 'react'
import logo from '../../assets/images/Footer/logodark.png'
import logo1 from '../../assets/images/Footer/headphone.png'
import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/facebook.svg'
import whatapp from '../../assets/icons/whatsapp.svg'
import send from '../../assets/icons/send-2.svg'
export default function Footer() {
    return (
        <>
            <div className="bg-footer p-3 pt-10">
                <div className="container">
                    <div className="bg-white py-6 rounded-xl flex flex-wrap items-center gap-[137px] justify-center">
                        <div>
                                <p className='text-primary text-center font-extrabold text-[24px] lg:text-[29.38px]'>Subscribe NewSletter</p>
                        </div>
                        <div className="flex gap-x-[88px]">
                            <form className="flex items-center my-3">
                                <div>
                                    <input type='email' className="outline-none ps-3 py-2 bg-warning rounded-s-xl text-white" placeholder='Email address' />
                                </div>
                                <div>
                                    <button className="rounded-e-xl bg-warning pe-3 py-2  font-semibold text-white ">
                                        <img src={send} alt="" />
                                    </button>
                                </div>
                            </form>
                            <div className="flex justify-center text-center">
                                <img src={logo1} />
                                <p className='text-left ms-3 text-[13px]'>Call us 24/7 : <br />(+62) 0123 567 789</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between mt-[41px] px-9 sm:px-0">
                        <div className='mb-3'>
                            <img src={logo} className="mb-6" />
                            <p className='text-primary mb-3 font-medium'>64 st james boulevard <br />
                                hoswick , ze2 7zj</p>
                            <div className="flex border-t-2 border-slate-950 gap-5 p-2">
                                <img src={google} alt="" />
                                <img src={facebook} alt="" />
                                <img src={whatapp} alt="" />
                            </div>
                        </div>
                        <div className='mb-3'>
                            <p className='text-primary text-lg mb-3 font-bold'>Find product</p>
                            <ul>
                                <p className='list-disc text-gray-300'><span className='text-primary'>Brownze arnold</span></p>
                                <p className='list-disc  text-gray-300'><span className='text-primary'>Chronograph blue</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Smart phones</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Automatic watch</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Hair straighteners</span></p>
                            </ul>
                        </div>
                        <div className='mb-3'>
                            <p className='text-primary text-lg  mb-3 font-bold'>Get help</p>
                            <ul>
                                <p className='list-disc text-gray-300'><span className="text-primary">About us</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Contact us</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Return policy</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Privacy policy</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Payment policy</span></p>
                            </ul>
                        </div>
                        <div >
                            <p className='text-primary text-lg mb-3 font-bold'>About us</p>
                            <ul>
                                <p className='list-disc text-gray-300'><span className="text-primary">News</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Service</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Our policy</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Custmer care</span></p>
                                <p className='list-disc text-gray-300'><span className="text-primary">Faq’s</span></p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

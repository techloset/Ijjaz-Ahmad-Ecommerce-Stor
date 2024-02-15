import React from 'react'
import logo from '../../assets/images/Footer/logodark.png'
import logo1 from '../../assets/images/Footer/headphone.png'
import google from '../../assets/icons/google.svg'
import facebook from '../../assets/icons/facebook.svg'
import whatapp from '../../assets/icons/whatsapp.svg'
import send from '../../assets/icons/send-2.svg'
export default function Footer() {
    return (

        <div className="bg-footer p-3 pt-10 font-poppins">
            <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
                <div className="bg-white py-6 rounded-xl flex flex-wrap justify-center items-center gap-x-[137px]">
                    <div>
                        <p className='text-primary text-center font-bold text-[24px] lg:text-[29.38px]'>Subscribe NewSletter</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-[88px]">
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
                <div className="flex flex-wrap gap-[80px] mt-[41px] px-9 sm:px-0">
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
                    <div className="flex flex-wrap gap-y-[30px] sm:gap-[227px]">
                        <div className='mb-3 w-[201]'>
                            <p className='text-primary text-lg mb-3 font-bold'>Find product</p>
                            <ul className="list-disc">
                                <li className=' text-gray-300 ml-[1.5em] '><span className='text-primary '>Brownze arnold</span>
                                </li>
                                <li className=' my-[2px]  text-gray-300 ml-[1.5em]'><span className='text-primary'>Chronograph blue</span></li>
                                <li className=' text-gray-300 ml-[1.5em]'><span className="text-primary">Smart phones</span></li>
                                <li className=' my-[10px] text-gray-300 ml-[1.5em]'><span className="text-primary">Automatic watch</span></li>
                                <li className=' text-gray-300 ml-[1.5em]'><span className="text-primary">Hair straighteners</span></li>
                            </ul>
                        </div>
                        <div className='mb-3 w-[172]'>
                            <p className='text-primary text-lg  mb-3 font-bold'>Get help</p>
                            <ul className="list-disc">
                                <li className='ml-[1.5em] text-gray-300 '><span className="text-primary">About us</span></li>
                                <li className='ml-[1.5em] my-[10px] text-gray-300'><span className="text-primary">Contact us</span></li>
                                <li className='ml-[1.5em] text-gray-300'><span className="text-primary">Return policy</span></li>
                                <li className='ml-[1.5em] my-[10px] text-gray-300'><span className="text-primary">Privacy policy</span></li>
                                <li className='ml-[1.5em] text-gray-300'><span className="text-primary">Payment policy</span></li>
                            </ul>
                        </div>
                        <div className='mb-3 w-[156]'>
                            <p className='text-primary text-lg mb-3 font-bold'>About us</p>
                            <ul className="list-disc">
                                <li className='ml-[1.5em] text-gray-300'><span className="text-primary">News</span></li>
                                <li className='ml-[1.5em] my-[10px] text-gray-300'><span className="text-primary">Service</span></li>
                                <li className='ml-[1.5em] text-gray-300'><span className="text-primary">Our policy</span></li>
                                <li className='ml-[1.5em] my-[10px] text-gray-300'><span className="text-primary">Custmer care</span></li>
                                <li className='ml-[1.5em] text-gray-300'><span className="text-primary">Faq’s</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

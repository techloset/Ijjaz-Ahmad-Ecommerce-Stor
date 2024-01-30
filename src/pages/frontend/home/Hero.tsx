import React from 'react'
import HeroCard from '../../../components/HeroCard'
import hero from '../../../assets/images/hero.png'
import logo1 from '../../../assets/images/Product/logo1.png'
import logo2 from '../../../assets/images/Product/logo2.png'
import logo3 from '../../../assets/images/Product/logo3.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Hero() {
    return (
        <>
            <div className="hero container">

                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}

                    pagination={{ clickable: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="flex flex-wrap-reverse justify-around my-10 items-center">
                            <div className="text">
                                <h1 className='text-[43px] text-center sm:text-left font-[700] text-primary md:w-20'>Canon camera</h1>
                                <div className="flex flex-wrap md:gap-3 my-5">
                                    <button className="bg-warning w-full sm:w-[144px] py-4 my-3 sm:my-0 text-white rounded-2xl">Shop now</button>
                                    <button className="py-4 w-full sm:w-[144px] border-2 border-[#316887] text-primary rounded-2xl">View more</button>
                                </div>
                            </div>
                            <div className="img">
                                <img src={hero} alt="" className='relative' />


                                <div className='bg-warning w-[120px] h-[114.61px] flex justify-center items-center absolute top-[250px] right-[210px] rounded-full font-medium text-white text-[21.57px]'>
                                    <span>
                                        only
                                        <br />
                                        $89
                                    </span>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-wrap-reverse md:justify-around my-10 items-center">
                            <div className="text">
                                <h1 className='text-[43px] text-center sm:text-left font-[700] text-primary md:w-20'>Canon camera</h1>
                                <div className="flex flex-wrap md:gap-3 my-5">
                                    <button className="bg-warning w-full sm:w-[144px] py-4 my-3 sm:my-0 text-white rounded-2xl">Shop now</button>
                                    <button className="py-4 w-full sm:w-[144px] border-2 border-[#316887] text-primary rounded-2xl">View more</button>
                                </div>
                            </div>
                            <div className="img">
                                <img src={hero} alt="" className='relative' />


                                <div className='bg-warning py-5 absolute top-[250px] right-[210px] rounded-full w-[90px] font-medium text-center text-white'>
                                    <span>
                                        only
                                        <br />
                                        $89
                                    </span>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-wrap-reverse md:justify-around my-10 items-center">
                            <div className="text">
                                <h1 className='text-[43px] text-center sm:text-left font-[700] text-primary md:w-20'>Canon camera</h1>
                                <div className="flex flex-wrap md:gap-3 my-5">
                                    <button className="bg-warning w-full sm:w-[144px] py-4 my-3 sm:my-0 text-white rounded-2xl">Shop now</button>
                                    <button className="py-4 w-full sm:w-[144px] border-2 border-[#316887] text-primary rounded-2xl">View more</button>
                                </div>
                            </div>
                            <div className="img">
                                <img src={hero} alt="" className='relative' />


                                <div className='bg-warning py-5 absolute top-[250px] right-[210px] rounded-full w-[90px] font-medium text-center text-white'>
                                    <span>
                                        only
                                        <br />
                                        $89
                                    </span>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>


                <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    loop={true}
                    breakpoints={{

                        576: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },

                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide> <HeroCard img={logo1} title='Speaker' /></SwiperSlide>
                    <SwiperSlide> <HeroCard img={logo2} title='Desktop & laptop' /></SwiperSlide>
                    <SwiperSlide> <HeroCard img={logo3} title='DSLR camera' /></SwiperSlide>
                    <SwiperSlide> <HeroCard img={logo1} title='Speaker' /></SwiperSlide>
                    <SwiperSlide> <HeroCard img={logo2} title='Desktop & laptop' /></SwiperSlide>
                    <SwiperSlide> <HeroCard img={logo3} title='DSLR camera' /></SwiperSlide>

                </Swiper>


            </div>
        </>
    )
}

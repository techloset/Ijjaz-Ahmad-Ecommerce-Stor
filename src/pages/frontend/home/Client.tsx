import React from 'react'
import clients1 from '../../../assets/images/deal/client (1).png'
import clients2 from '../../../assets/images/deal/client (2).png'
import clients3 from '../../../assets/images/deal/client (3).png'
import logo1 from '../../../assets/images/deal/logo (1).png'
import logo2 from '../../../assets/images/deal/logo (2).png'
import logo3 from '../../../assets/images/deal/logo (3).png'
import logo4 from '../../../assets/images/deal/logo (4).png'
import logo5 from '../../../assets/images/deal/logo (5).png'

import ClientCard from '../../../components/ClientCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Client() {
    return (
        <>
            <div className="container">
                <Swiper
                    className='my-5'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
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
                    <SwiperSlide>
                        <ClientCard title={'Savannah Nguyen'} img={clients1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard title={'Esther Howard'} img={clients2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard title={'Esther Howard'} img={clients3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard title={'Esther Howard'} img={clients2} />
                    </SwiperSlide>
                </Swiper>
                <div className="bg-footer py-6">
                    <div className="flex flex-wrap gap-5 items-center justify-evenly">
                        <img src={logo1} className="w-40 md:w-[115px]" />
                        <img src={logo2} className="w-40 md:w-[115px]" />
                        <img src={logo3} className="w-40 md:w-[115px]" />
                        <img src={logo4} className="w-40 md:w-[115px]" />
                        <img src={logo5} className="w-40 md:w-[115px]" />
                    </div>
                </div>
            </div>
        </>
    )
}
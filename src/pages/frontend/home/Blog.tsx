import React from 'react'
import BlogCard from '../../../components/BlogCard'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Blog() {
    return (
        <>
            <div className="container my-5">
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        <p className='text-[25px] font-semibold text-primary'>Latest news</p>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-primary'>View all</p>
                    </div>
                </div>
                <div>
                    <Swiper
                        className='showpagination'
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={{

                            576: {
                                slidesPerView: 1,
                            },

                            768: {
                                slidesPerView: 1,
                            },

                            992: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        <SwiperSlide> <BlogCard /></SwiperSlide>
                        <SwiperSlide> <BlogCard /></SwiperSlide>
                        <SwiperSlide> <BlogCard /></SwiperSlide>
                        <SwiperSlide> <BlogCard /></SwiperSlide>
                        <SwiperSlide> <BlogCard /></SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </>
    )
}

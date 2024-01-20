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
            <div className="container">
                <div>
                    <Swiper
                        className='showpagination my-5'
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        loop={true}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
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

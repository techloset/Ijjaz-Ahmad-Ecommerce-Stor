import React from 'react'
import BlogCard from '../../../components/blogCard/BlogCard'
import blog1 from '../../../assets/images/blog1.png'
import blog2 from '../../../assets/images/blog2.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Blog() {
    return (
        <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
            <div className="flex flex-wrap justify-between items-center">
                <div>
                    <p className='text-[25px] font-semibold text-primary'>Latest news</p>
                </div>
                <div>
                    <p className='text-xl font-semibold text-primary'>View all</p>
                </div>
            </div>
            <div className='mb-[100px]'>
                <Swiper
                    className='showpagination'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
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
                    <SwiperSlide> <BlogCard img={blog1} /></SwiperSlide>
                    <SwiperSlide> <BlogCard img={blog2} /></SwiperSlide>
                    <SwiperSlide> <BlogCard img={blog1} /></SwiperSlide>
                    <SwiperSlide> <BlogCard img={blog2} /></SwiperSlide>
                    <SwiperSlide> <BlogCard img={blog1} /></SwiperSlide>
                    <SwiperSlide> <BlogCard img={blog2} /></SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

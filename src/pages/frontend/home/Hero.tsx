import React from 'react'
import HeroCard from '../../../components/HeroCard'
import logo1 from '../../../assets/images/Product/logo1.png'
import logo2 from '../../../assets/images/Product/logo2.png'
import logo3 from '../../../assets/images/Product/logo3.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import HeroSlideCard from '../../../components/HeroSlideCard'

export default function Hero() {
    return (
        <div className="hero px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">

            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <HeroSlideCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSlideCard />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroSlideCard />
                </SwiperSlide>

            </Swiper>
            <Swiper

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
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
    )
}

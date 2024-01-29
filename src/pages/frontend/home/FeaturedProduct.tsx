import React from 'react'
import Card from '../../../components/Card'
import DealSildCard from '../../../components/DealSideCard'
import DealCard from '../../../components/DealCard'

import img from '../../../assets/images/deal/box-tick.png'
import img1 from '../../../assets/images/deal/crown.png'
import img2 from '../../../assets/images/deal/shield-security.png'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function FeaturedProduct() {

  return (
    <>
      <div className="container mx-auto">
        <div className="hidden md-2:block">
          <div className="flex flex-wrap my-[95px] justify-center">
            <div className='w-[100%] lg:w-[58%]'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                loop={true}

              >
                <SwiperSlide>   <DealSildCard /></SwiperSlide>
                <SwiperSlide>   <DealSildCard /></SwiperSlide>
                <SwiperSlide>   <DealSildCard /></SwiperSlide>



              </Swiper>
            </div>

            <div className="w-[100%] lg:w-[38%]">
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="bg-footer p-6 mb-[75px] rounded-lg">
          <div className="flex flex-wrap items-center justify-between ">
            <DealCard title={'Free delivery'} img={img} des={'on order above $50,00'} />
            <DealCard title={'1 year warranty'} img={img2} des={'Avaliable warranty'} />
            <DealCard title={'Best quality '} img={img1} des={'best quality in low price'} />

          </div>
        </div>
      </div>
    </>
  )
}
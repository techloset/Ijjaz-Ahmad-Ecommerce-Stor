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
      <div className="container">
        <div className="hidden md-2:block my-5">
          <div className="flex flex-wrap gap-7">
            <div className='flex-auto w-72'>

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

            <div className='flex-auto w-16 '>
              <div className='min-h-2/5'>
                <Card />
              </div>
              <div className='min-h-2/5'>
                <Card />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-footer p-6 rounded-lg">
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
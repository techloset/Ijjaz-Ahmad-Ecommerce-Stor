import React from 'react';
import { useSelector } from 'react-redux';
import ProCard from '../../../components/productCard/ProCard';
import { cartItem, rootStateProduct } from '../../../constant/Types';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Product() {
    const products = useSelector((state: rootStateProduct) => state.redux.products);

    return (
        <>
            <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
                <div className="flex flex-wrap justify-between mt-20">
                    <div>
                        <p className='text-[30px] font-semibold text-[#2E8FC5] mb-[16pxs]'>Popular products</p>
                    </div>
                    <div className='homeCategory w-[330px] md:w-[600px]'>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            
                            breakpoints={{

                                576: {
                                    slidesPerView: 2,
                                },

                                768: {
                                    slidesPerView: 3,
                                },

                                992: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            <SwiperSlide >
                                <div className='w-[139px] h-[48px]'>
                                    <button className='w-[139px] h-[45px] border border-[#003F62] text-[#003F62] me-[13px] rounded-[20px]'>Cameras</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='w-[139px] h-[48px]'>
                                    <button className='w-[139px] h-[45px] border border-[#003F62] text-[#003F62] me-[13px] rounded-[20px]'>Laptops</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='w-[139px] h-[48px]'>
                                    <button className='w-[139px] h-[45px] border border-[#003F62] text-[#003F62] me-[13px] rounded-[20px]'>Tablets</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='w-[139px] h-[48px]'>
                                    <button className='w-[139px] h-[45px] border border-[#003F62] text-[#003F62] rounded-[20px]'>Mouse</button>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div>
            <div className="flex mt-10 flex-wrap mb-6 justify-center gap-[31px]">
                {products.map((item: cartItem, i) => {

                    if (i < 8) {
                        return (
                            <div key={i}>
                                <ProCard detail={item} />
                            </div>
                        )
                    }
                }
                )}
            </div>
            <div className="flex justify-center items-center my-20">
                <span className="bg-warning border-2 px-2 py-2 rounded-full"></span>
                <span className="border-2 px-2 py-2 rounded-full mx-2"></span>
                <span className="border-2 px-2 py-2 rounded-full"></span>
            </div>
        </>
    );
}

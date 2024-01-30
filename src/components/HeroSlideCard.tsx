import React from 'react'
import hero  from '../assets/images/hero.png'

export default function HeroSlideCard() {
    return (
        <>
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


                    <div className='bg-warning w-[120px] h-[114.61px] flex justify-center items-center absolute top-[225px] right-[7px] md:top-[250px] md:right-[210px] rounded-full font-medium text-white text-[21.57px]'>
                        <span>
                            only
                            <br />
                            $89
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

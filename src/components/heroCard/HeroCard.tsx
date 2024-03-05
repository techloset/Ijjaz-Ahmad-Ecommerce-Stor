import React from 'react';
import {  heroCardProps } from '../../constant/Types';

export default function HeroCard(props: heroCardProps) {
  return (
    <div className="border border-gray-300 rounded-3xl mx-2 h-[147px] py-3 px-5 relative flex items-center justify-center">
      <div className="w-[50%] overflow-hidden">
        <img src={props.img} style={{width:`${props.imageWidth}`, height:`${props.imageHeight}`}} />
      </div>
      <div className="w-[50%]">
        <h3 className='mb-3 text-xl font-semibold text-primary'>{props.title}</h3>
        <p className='text-lg font-semibold text-primary'>(6 items)</p>
      </div>
    </div>
  );
}

import React from 'react'
import arrowLeft from "../../assets/icons/arrow-left.svg"
type props= {
  pageName?:string,
}
export default function TopBar(props:props) {
  return (
       <p className='mt-[26px] font-[500] mb-[48px] text-[16px] flex'>Home<img src={arrowLeft} alt='...' className='w-[24px] h-[24px] ms-[16px] me-[14px]'/>{props.pageName}<img src={arrowLeft} alt='...' className='w-[24px] h-[24px] ms-[16px] me-[14px]' /></p>
  )
}

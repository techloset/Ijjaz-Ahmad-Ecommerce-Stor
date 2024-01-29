import React from 'react';
import logo from "../assets/images/Product/feathuer.png";
import star from "../assets/icons/star.svg";

export default function Card() {
  return (
    <>      
        <div className="border-2 overflow-hidden mb-5 border-gray-300 max-w-[493p h-[241px] rounded-3xl relative flex justify-center items-center px-5">
          <div className="w-[50%]">
            <img src={logo} alt="Product" className="w-64" />
          </div>
          <div className="w-[50%]">
            <h3 className='text-xl font-semibold text-primary'>JBL bar 2.1 deep bass</h3>
            <p className='text-lg font-semibold text-[#A4A4A4] my-5'>$11.5</p>
            <div className="star-icon flex">
              <img src={star} className="ms-1" />
              <img src={star} className="ms-1" />
              <img src={star} className="ms-1" />
              <img src={star} className="ms-1" />
              <img src={star} className="ms-1" />
            </div>
          </div>
        </div>
    </>
  );
}

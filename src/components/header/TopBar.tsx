import React from 'react'
import location from '../../assets/icons/location.svg'
import truck from '../../assets/icons/truck.svg'

export default function TopBar() {
  return (

    <div className="bg-white font-poppins">
      <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
        <nav className="text-center lightBlack md:flex items-center justify-between py-4">
          <div>
            <p className='text-[14px]'>Need help? Call us: (+98) 0234 456 789</p>
          </div>
          <div className="flex justify-center my-2">
            <div className="flex items-center mx-2">
              <img src={location} className='w-6 h-6' />
              <p className='text-sm mx-1'>Our store</p>
            </div>
            <div className="flex items-center mx-2">
              <img src={truck} className='w-6 h-6' />
              <p className='text-sm mx-1'>Track your order</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

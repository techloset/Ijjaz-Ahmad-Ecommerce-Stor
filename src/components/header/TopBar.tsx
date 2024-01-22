import React from 'react'
import images from '../../assets/icons'

export default function TopBar() {
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <nav className="text-center lightBlack md:flex items-center justify-between py-4">
            <div>
              <p className='text-sm'>Need help? Call us: (+98) 0234 456 789</p>
            </div>
            <div className="flex justify-center my-2">
              <div className="flex items-center mx-2">
                <img src={images.location} className='w-6 h-6' />
                <p className='text-sm mx-1'>Our store</p>
              </div>
              <div className="flex items-center mx-2">
                <img src={images.truck} className='w-6 h-6' />
                <p className='text-sm mx-1'>Track your order</p>
              </div>
            </div>
          </nav>

        </div>
      </div>

    </>
  )
}

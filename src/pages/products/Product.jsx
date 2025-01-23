import React from 'react'
import { BsApple } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='container w-full h-full bg-black sm:w-full sm:h-full flex'>
      {/* Left side content */}
      <div className='flex flex-col justify-between p-10 w-1/2'>
        <div className='flex items-center justify-start'>
          <BsApple size={50} className='text-white' />
          <p className='px-3 font-semibold text-gray-200 items-center justify-center'>iPhone 14 Series</p>
        </div>

        <h1 className='text-white text-4xl leading-tight text-wrap p-6'>
          Up to 10% <br />off Voucher
        </h1>

        <div className='flex items-center justify-start p-8'>
          <Link to="/" className='flex items-center justify-center'>
            <p className='text-white underline underline-offset-4 decoration-2'>Shop Now</p>
            <GoArrowRight className='text-white px-1' size={30} />
          </Link>
        </div>
      </div>

      {/* Right side image */}
      <div className='w-1/2 flex items-center justify-center'>
        <img src="/iphone-img.png" alt="iPhone" className='max-w-full h-auto' />
      </div>
    </div>
  )
}

export default Product
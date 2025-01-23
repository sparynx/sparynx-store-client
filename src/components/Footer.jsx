// import React from 'react'
import { Link } from 'react-router-dom'
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { IoMdSend } from "react-icons/io"
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  const handleSubmitButton = () => {
    console.log('Submit button')
  }

  return (
    <footer className='bg-black text-white py-14 px-10 mt-28'>
      {/* top section */}
      <div className='flex flex-wrap justify-between border-b border-gray-700'>
        {/* First section */}
        <div className='md:w-1/4 w-full p-3'>
          <div className='flex items-center md:gap-16 gap-4'>
            <Link to='/' className='text-2xl font-bold text-white py-2'>TheSparynxStore<sup>®</sup></Link>
          </div>
          <h3 className='py-2 font-semibold'>Subscribe</h3>
          <h3 className='py-2'>Get 10% off your first order</h3>
          <div className='relative flex items-center w-full md:w-64'>
            <input type="text" placeholder='Enter your email' className='bg-black border border-white rounded-sm focus:outline-none p-2 pr-10 w-full' />
            <IoMdSend className='absolute right-3 text-white' onClick={handleSubmitButton} />
          </div>
        </div>

        {/* Second section */}
        <div className='md:w-1/4 w-full p-3'>
          <div className='flex items-center md:gap-16 gap-4'>
            <Link to='/' className='text-2xl font-bold text-white py-2'>Support</Link>
          </div>
          <Link to=""><h3 className='py-2 font-semibold'>Lagos Nigeria</h3></Link>
          <Link to=""><h3 className='py-2 font-semibold'>sparynxcyberneti@gmail.com</h3></Link>
          <Link to=""><h3 className='py-2 font-semibold'>23347434343</h3></Link>
        </div>

        {/* Third section */}
        <div className='md:w-1/4 w-full p-3'>
          <div className='flex items-center md:gap-16 gap-4'>
            <Link to='/' className='text-2xl font-bold text-white py-2'>Account</Link>
          </div>
          <Link to=""><h3 className='py-2 font-semibold'>My Account</h3></Link>
          <Link to=""><h3 className='py-2 font-semibold'>Login / Sign Up</h3></Link>
          <Link to=""><h3 className='py-2 font-semibold'>Cart</h3></Link>
          <Link to=""><h3 className='py-2 font-semibold'>Wishlist</h3></Link>
        </div>

        

        {/* Fourth section */}
        <div className='md:w-1/4 w-full p-3'>
          <div className='flex items-center md:gap-16 gap-4'>
            <p className='text-2xl font-bold text-white py-2'>Download App</p>
          </div>
          <h3 className='py-2 text-sm'>Save 5000-NGN with App New Users only</h3>
          <div className='flex'>
            <img src="/qr.png" alt="QR Code" className='w-16 h-16' />
            <div className='flex flex-col ml-4 items-center justify-center'>
              <img src="/GooglePlay.png" alt="App Store" className='w-16 h-8 mb-2' />
              <img src="/appstore.png" alt="Play Store" className='w-16 h-8' />
            </div>
          </div>

          <div className='flex mt-3 space-x-4'>
             <LuFacebook size={20}/>
             <LuTwitter  size={20} />
             <LuInstagram size={20} />
             <LuLinkedin  size={20} />
          </div>
        </div>
      </div>
      {/* bottom section */}

      <div className='flex items-center justify-center mt-6'>
      <LuCopyright className='text-gray-500 mt-6 items-center justify-center ' />
      <p className='text-sm text-gray-500 mt-6 ml-2'>Copyright TheSparynxStore<sup>®</sup> 2025. All right reserved</p>
      </div>



    </footer>
  )
}

export default Footer
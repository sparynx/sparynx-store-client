// import React from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";

const BottomSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-10 flex flex-col items-center relative">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full">
            <CiDeliveryTruck size={40} />
          </div>
          <h4 className="mt-4 text-lg font-semibold text-center">Free and Fast Delivery</h4>
          <p className="text-center text-sm text-gray-600">Free delivery for all orders over &#8358;140</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full">
            <RiCustomerService2Line size={40} />
          </div>
          <h4 className="mt-4 text-lg font-semibold text-center">24/7 CUSTOMER SERVICE</h4>
          <p className="text-center text-sm text-gray-600">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full">
            <BsShieldCheck size={40} />
          </div>
          <h4 className="mt-4 text-lg font-semibold text-center">MONEY BACK GUARANTEE</h4>
          <p className="text-center text-sm text-gray-600">We return money within 30 days</p>
        </div>
      </div>

      {/* Return to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-4 flex items-center justify-center w-12 h-12 bg-gray-400 text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default BottomSection;
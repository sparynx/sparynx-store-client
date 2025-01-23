// import React from 'react'
import { useState } from "react"
import ProductCard from "../products/ProductCard"

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";
import Loader from "../../components/Loader";

const categories = ["Browse by category", "Gaming", "computers", "clothes", "Bags", "furniture", "food", "toys"]

const Catergories = () => {

  const [selectedCategory, setSelectedCategory] = useState("Browse by category")

  const {data: products, error, isLoading} = useFetchAllProductsQuery()

  const filteredProducts = selectedCategory === "Browse by category" ?  products : products.filter(product => product.category === selectedCategory.toLowerCase())

  if(isLoading) return <Loader/>
  if(error) return <div>Error: Error getting data {error.message}</div>

  return (
    <div className="py-10">
        <div className='flex items-center mb-5'>
          <span className='h-8 w-4 bg-red-600 inline-block mr-2 rounded-sm'></span>
          <h3 className='text-red-600 font-semibold'>Categories</h3>
       </div>
    <h2 className="text-4xl font-semibold mb-6">Browse By Category</h2>
    {/* category feature dropdown */}
    <div className="mb-8 flex items-center">
        <select 
        onChange={(e) => setSelectedCategory(e.target.value)}
        name="category" id="category" className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none">
                {
                    categories.map((category, index) => (
                        <option key={index} value={category}>  
                            {category}
                        </option>
                    ))
                }
        </select>
    </div>


    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
           filteredProducts.length > 0 ? ( filteredProducts.map((product, index) => (
                <SwiperSlide key={index}>
                    <ProductCard  product={product}/>
                </SwiperSlide>
                
            ))
           ) : (
            <div>No Product found for the selected category</div>
           )
        }

    </Swiper>

  </div>
  )
}

export default Catergories
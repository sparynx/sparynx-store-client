// import React from 'react'

import { Link } from "react-router-dom"
import Loader from "../../components/Loader"
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi"
import ProductCard from "../products/TheProductCards"

const BestSellingProduct = () => {

    const {data: products = [], error, isLoading} = useFetchAllProductsQuery()



    if(isLoading) return <Loader />
    if(error) return <div>Error: Error getting data {error.message}</div>

  return (
    <div className="py-10">
        <div className='flex items-center mb-5'>
          <span className='h-8 w-4 bg-red-600 inline-block mr-2 rounded-sm'></span>
          <h3 className='text-red-600 font-semibold'>This Month</h3>
       </div>
        <div className="flex justify-between items-start mb-6">
            <h2 className="text-4xl font-semibold mb-6">Best Selling Product</h2>
            <Link to="/products" className="p-3 bg-red-500 rounded-lg text-white hover:bg-red-600 transition-colors duration-300">View All</Link>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products.slice(4, 8).map((product) => (
                    <div key={product._id}>
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestSellingProduct
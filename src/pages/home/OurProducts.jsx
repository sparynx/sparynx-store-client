// import React from 'react'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
import Loader from '../../components/Loader'
import ProductCard from '../products/TheProductCards'

const OurProducts = () => {
    const {data: products = [], isLoading, error} = useFetchAllProductsQuery() 
    
    if(isLoading) return <Loader/>
    if(error) return <div>Error: Error getting data {error.message}</div>

  return (
    <div className='py-10'>

    <div className='flex items-center mb-5'>
        <span className='h-8 w-4 bg-red-600 inline-block mr-2 rounded-sm'></span>
        <h3 className='text-red-600 font-semibold'>Our Products</h3>
    </div>
    <h2 className="text-4xl font-semibold mb-6">Explore Our Products</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
            products.slice(6, 18).map((product) => (
                <div key={product._id}>
                    <ProductCard product={product}/>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default OurProducts
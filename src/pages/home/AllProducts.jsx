// import React from 'react'
import  { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
import Loader from '../../components/Loader'
import ProductCard from '../products/productCard'

const AllProducts = () => {
    const {data: products = [], isLoading, error} = useFetchAllProductsQuery() 
    
    if(isLoading) return <Loader/>
    if(error) return <div>Error: Error getting data {error.message}</div>

  return (
    <div className='py-10'>
        <h2 className="text-4xl font-semibold mb-6">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
                products.map((product) => (
                    <div key={product._id}>
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AllProducts
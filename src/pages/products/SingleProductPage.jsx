import React from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"
import { useFetchProductByIdQuery } from '../../redux/features/products/productsApi'
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/features/cart/cartSlice"
import Loader from '../../components/Loader'
import {getImgUrl} from "../../utils/getImgurl"

const SingleProductPage = () => {
  const {id} = useParams()
  const {data:product, isLoading, isError} = useFetchProductByIdQuery(id) 

  const dispatch = useDispatch();


  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }


  if(isLoading) return <Loader/>
  if(isError) return <div>Error getting the book</div>


  return (
    <div className="max-w-lg  p-5 items-center space-y-5 mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6">{product.title}</h1>
      <div>
      <div>
          <img 
          src={`${getImgUrl(product.coverImage)}`}
          alt={product.title}
          className="mb-8"
          />
      </div>


      <div className="mb-5">
          <p className="text-gray-700 mb-2 ">
              <strong>Vendor: </strong>{product.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
              <strong>Published: </strong> {new Date(product?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
              <strong>Category:</strong> {product?.category}
          </p>
          <p className="text-gray-700">
              <strong>Description:</strong> {product.description}
          </p>

       </div>

       <button 
          onClick={() => handleAddToCart(product)}
          className="bg-red-500 flex space-x-3 text-white hover:bg-red-600 px-7 py-2 items-center justify-center rounded-lg ">
          <FiShoppingCart className="" />
          <span>Add to Cart</span>
      </button>
      </div>
      
    </div>
  )
}

export default SingleProductPage
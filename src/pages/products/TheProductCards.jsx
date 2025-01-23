import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getImgUrl } from "../../utils/thegetImgurl";
import { FiShoppingCart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Loading....</div>; // or return a placeholder/loading component
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? 'text-yellow-500' : 'text-yellow-500'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="rounded-lg transition-shadow duration-300 relative group bg-gray-100 p-4">
      <div className="flex justify-center items-center h-48 overflow-hidden">
        <Link to={`/product/${product._id}`}>
          <img
            src={`${getImgUrl(product.coverImage)}`}
            alt={product.title}
            className="h-full object-contain p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
          />
        </Link>
      </div>

      <div className="mt-3 text-center">
        <Link to={`/product/${product._id}`}>
          <h3 className="text-xl font-semibold hover:text-red-500 mb-3">
            {product?.title}
          </h3>
        </Link>
        <div className="flex justify-center mb-3">
          {renderStars(product?.rating || 0)}
        </div>
        <p className="font-medium mb-5">
          <span className="text-red-500">&#8358;{product?.newPrice}</span> 
          <span className="line-through font-normal ml-2">&#8358;{product?.oldPrice}</span>
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 btn-primary w-full px-6 space-x-1 flex items-center justify-center gap-1 absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
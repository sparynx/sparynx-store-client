import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl } from '../../utils/thegetImgurl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPag = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <button
          type="button"
          onClick={handleClearCart}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          Clear Cart
        </button>
      </div>
      <div className="hidden sm:grid grid-cols-4 gap-4 border-b-2 pb-2">
        <div className="font-semibold">Product</div>
        <div className="font-semibold">Price</div>
        <div className="font-semibold">Quantity</div>
        <div className="font-semibold">Subtotal</div>
      </div>
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <div key={product._id} className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-2 border-b">
            <div className="flex items-center">
              <img
                alt=""
                src={`${getImgUrl(product.coverImage)}`}
                className="h-24 w-24 object-cover object-center rounded-md border border-gray-200"
              />
              <div className="ml-4">
                <h3 className="text-base font-medium text-gray-900">
                  <Link to='/'>{product.title}</Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category: </strong>{product.category}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <span className="sm:hidden font-semibold">Price: </span>${product.newPrice}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <span className="sm:hidden font-semibold">Quantity: </span>1
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <span className="sm:hidden font-semibold">Subtotal: </span>${product.newPrice}
            </div>
            <div className="flex items-center justify-end">
              <button
                onClick={() => handleRemoveFromCart(product)}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="py-4">No Product Found</p>
      )}
      <div className="flex justify-end mt-4">
        <div className="w-full sm:w-1/3 bg-transparent p-4 rounded-lg border border-gray-300">
          <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total Items:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Total Price:</span>
            <span>&#8358;{totalPrice}</span>
          </div>
          <Link
            to="/checkout"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 text-center block"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPag;
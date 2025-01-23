// import React from 'react'

// import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { useAuth } from "../../context/AuthContext";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersApi";
import { getImgUrl } from "../../utils/thegetImgurl";


const OrderPage = () => {
  const {currentUser} = useAuth();
  const {data: orders=[], isLoading, isError} = useGetOrderByEmailQuery(currentUser?.email, {
    skip: !currentUser,
  })

  if(!currentUser) {
    return <div>Please <Link to="/login"><span className="text-red-500">login</span></Link> to view your orders</div>
  }

  if (isLoading) return <Loader/>
  if (isError) return <div>Error :(</div>

  return (
    <div className="container mx-auto p-6">
    <h2 className="text-2xl font-semibold mb-4">Your orders</h2>
        {
            orders.length === 0 ? (<div>No orders found</div>) : (<div>

                {
                    orders.map((order, index) => (
                       
                        <div key={order._id} className="border-b mb-4 pb-4" >
                             <p className="p-1 bg-secondary w-10 text-white rounded mb-1"># {index + 1}</p>
                            <h3 className="font-bold">OrderId: {order?._id}</h3>
                            <p className="text-gray-600">Name: {order.name} </p>
                            <p className="text-gray-600" >Email: {order.email}</p>
                            <p className="text-gray-600">Phone: {order.phone}</p>
                            <p className="text-gray-600">Total Price: {order.totalPrice}</p>

                            <h3 className="font-semibold mt-2">Address:</h3>
                            <img src={`${getImgUrl(order.coverImage)}`} alt="" />
                            <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode} </p>
                            <h3 className="font-semibold mt-2"> ProductsId:</h3>
                                    <ul>
                                        {order.productIds.map((productId) => (
                                            <li key={productId}>
                                                {productId}
                                            </li>
                                        ))
                                        
                                        }
                                    </ul> 
                        </div>
                    ))
                }
            </div>
            )
        }
</div>
  )
}

export default OrderPage
// import React from 'react'
import { useDeleteProductMutation, useFetchAllProductsQuery } from '../../../redux/features/products/productsApi';
import { Link, useNavigate } from 'react-router-dom';

const ManageProducts = () => {

  const navigate = useNavigate();

  const {data: products, refetch} = useFetchAllProductsQuery();

  const [deleteProduct] = useDeleteProductMutation()

  const handleDeleteBook = async (id) => {
      try {
          await deleteProduct(id).unwrap();
          alert("product deleted successfully");
          refetch();
      } catch (error) {
          console.error("Failed to delete product",error.message);
          alert("failed to delete product")
      }
  }

  const handleEditClick = (id)  =>{
      navigate(`dashboard/edit-product/${id}`);
  }


  return (
    <section className="py-1 bg-blueGray-50">
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">All products</h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                    </div>
                </div>
            </div>

            <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                #
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                product Name
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Category
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Price
                            </th>
                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products && products.map((product, index) => (
                                <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                   {index + 1}
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                    {product.title}
                                </td>
                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                  {product.category}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                    ${product.newPrice}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 space-x-4">

                                    <Link onClick={() =>handleEditClick(product._id)} to={`/dashboard/edit-product/${product._id}`} className="font-medium text-indigo-600 hover:text-indigo-700 mr-2 hover:underline underline-offset-2">
                                        Edit
                                    </Link>
                                    <button 
                                    onClick={() => handleDeleteBook(product._id)}
                                    className="font-medium bg-red-500 py-1 px-4 rounded-full text-white mr-2">Delete</button>
                                </td>
                            </tr> 
                            ))
                        }
         

                    </tbody>

                </table>
            </div>
        </div>
    </div>

</section>
  )
}

export default ManageProducts
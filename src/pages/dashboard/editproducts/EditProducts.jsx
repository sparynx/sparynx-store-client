// import React from 'react'
import { useForm } from 'react-hook-form'
import { useFetchProductByIdQuery, useUpdateProductMutation } from "../../../redux/features/products/productsApi";
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import getBaseUrl from '../../../utils/getBaseUrl';
import axios from 'axios'
import Swal from 'sweetalert2' 
import Loader from '../../../components/Loader';
import InputField from '../addproducts/InputField';
import SelectField from '../addproducts/SelectField';
const EditProducts = () => {

  const {id } = useParams();
  const {data: productData , isloading, isError, refetch} = useFetchProductByIdQuery(id);
  const [updateProduct ] = useUpdateProductMutation();
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
      if(productData){
          setValue("title", productData.title);
          setValue("description", productData.description);
          setValue("category", productData.category);
          setValue("price", productData.oldPrice);
          setValue("newPrice", productData.newPrice);
          setValue("coverImage", productData.coverImage);
      }
  }, [productData, setValue]);


  const onSubmit = async (data) => {
      const updateProductData = {
          title: data.title,
          description: data.description,
          category: data.category,
          trending: data.trending,
          oldPrice: Number(data.oldPrice),
          newPrice: Number(data.newPrice),
          coverImage: data.coverImage || productData.coverImage
      }

      try {
          await axios.put(`${getBaseUrl()}/api/products/edit/${id}`, updateProductData, {
              headers: {
                  "Content-Type" : "application/json",
                  "Authorization" : `Bearer ${localStorage.getItem("token")}`
              }
          }); 
                      Swal.fire({
                          title: "Book updated",
                          text: "Your book is updated successfully!",
                          icon: "success",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, It's Okay!"
                        });
                        reset();
                        await refetch();
      } catch (error) {
          console.log("failed to update book", error.message);
          alert("Failed to update book")
      }
  }

  if(isloading) return <Loader/>
  if(isError) return <div>Failed to load book</div>



  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Update product</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Title"
        name="title"
        placeholder="Enter book title"
        register={register}
      />

      <InputField
        label="Description"
        name="description"
        placeholder="Enter book description"
        type="textarea"
        register={register}
      />

      <SelectField
        label="Category"
        name="category"
        options={[
          { value: '', label: 'Choose A Category' },
          { value: 'Gaming', label: 'Gaming' },
          { value: 'computers', label: 'computers' },
          { value: 'clothes', label: 'clothes' },
          { value: 'Bags', label: 'Bags' },
          { value: 'furniture', label: 'furniture' },
        ]}
        register={register}
      />
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            {...register('trending')}
            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
        </label>
      </div>

      <InputField
        label="Old Price"
        name="oldPrice"
        type="number"
        placeholder="Old Price"
        register={register}
      />

      <InputField
        label="New Price"
        name="newPrice"
        type="number"
        placeholder="New Price"
        register={register}
      />

      <InputField
        label="Cover Image URL"
        name="coverImage"
        type="text"
        placeholder="Cover Image URL"
        register={register}
      />

      <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
        Update Book
      </button>
    </form>
  </div>
  )
}

export default EditProducts
// import React from 'react'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Login = () => {

  const [message, setMessage] = useState("");


  const {loginUser, signInWithGoogle} = useAuth();
  const navigate = useNavigate()
 

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      try {
        await loginUser(data.email, data.password);
        navigate("/");
      } catch (error) {
        setMessage("Please enter a valid email address and password", error.message);
        Swal.fire("Error", error.message, "error");
      }
    }
  
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();
        Swal.fire("login successful");
        navigate("/")
      } catch (error) {
        alert(error.message);
        console.error(error.message);
      }
    }


  return (
    
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* left side */}
      <div className="flex items-start justify-start w-full md:w-1/2">
        <img src="/sideimage.png" alt="Side" className="w-full h-auto" />
      </div>

      {/* right side */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mb-8 pb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Login to TheSparynxStore</h2>
        <p className="text-lg mb-20 text-gray-600 ">Enter your details here</p>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
            <input type="email"
              name="email" id="email" placeholder='Email Address' 
              className='appearance-none border-b-2 border-gray-300 w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500'  
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">Password</label>
            <input type="password"
              name="password" id="password" placeholder='Password' 
              className='appearance-none border-b-2 border-gray-300 w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500'  
              {...register('password', { required: true })}
            />
            {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
          </div>
          <div className="mb-6">
            <button type="submit" className='bg-red-600 hover:bg-red-700 text-white py-3 px-10 rounded focus:outline-none w-full'>
              Login
            </button>
          </div>

                      {/* google sign in button */}
                      <div>
              <button
              onClick={handleGoogleSignIn}
              className='gap-1 bg-transparent text-black py-2 px-8 rounded border border-black focus:outline-none mt-4 flex items-center justify-center w-full'>
               <FcGoogle size={24} className='mr-2' />
               Sign in with Google
              </button>
            </div>


            <p className=' font-medium mt-4 text-sm items-center text-center justify-center'>Dont have an account <Link to="/signup" className='text-gray-700 hover:underline underline-offset-3  '>Sign up</Link> </p>

            <p className='text-gray-800  mt-4 text-center text-xs'>Copyright &copy; 2025 TheSparynxStore<sup>®</sup>. All rights reserved.</p>
        </form>
      </div>
    </div>
  )
}

export default Login
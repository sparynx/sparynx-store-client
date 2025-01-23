import  { useState, useEffect } from 'react';
import ProductCard from "../products/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";
import Loader from '../../components/Loader';

const Flashsales = () => {
  const { data: products = [], error, isLoading } = useFetchAllProductsQuery();
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading) return <Loader/>
  if (error) return <div>Error: Error getting data {error.message}</div>;

  return (
    <div className='py-16 mt-20'>
       <div className='flex items-center mb-5'>
        <span className='h-8 w-4 bg-red-600 inline-block mr-2 rounded-sm'></span>
       <h3 className='text-red-600 font-semibold'>Today&apos;s</h3>
       </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold">Flash Sales</h2>
        <div className="text-3xl font-semibold ">
          Time left: {formatTime(timeLeft)}
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {products.map(product => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default Flashsales;
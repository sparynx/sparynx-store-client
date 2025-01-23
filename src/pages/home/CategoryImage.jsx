import { useState, useEffect } from 'react';

const CategoryImage = () => {
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
    return {
      hrs: hrs.toString().padStart(2, '0'),
      mins: mins.toString().padStart(2, '0'),
      secs: secs.toString().padStart(2, '0')
    };
  };

  const { hrs, mins, secs } = formatTime(timeLeft);

  return (
    <div className='flex justify-center items-center h-screen px-4'>
      <div className='relative w-full max-w-[1170px] h-[500px] bg-black rounded-lg p-4'>
        <h3 className='absolute top-4 left-4 sm:top-16 sm:left-16 text-green-600 text-lg sm:text-xl'>Categories</h3>
        <h3 className='py-2 absolute top-12 left-4 sm:top-24 sm:left-16 text-white font-bold text-2xl sm:text-4xl w-full sm:w-[600px]'>
          Enhance Your Music Experience
        </h3>
        <div className='absolute top-24 left-4 sm:top-40 sm:left-16 flex space-x-2 sm:space-x-4 py-8 sm:py-16'>
          <div className='flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full'>
            <span className='text-black text-lg sm:text-xl'>{hrs}</span>
          </div>
          <div className='flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full'>
            <span className='text-black text-lg sm:text-xl'>{mins}</span>
          </div>
          <div className='flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full'>
            <span className='text-black text-lg sm:text-xl'>{secs}</span>
          </div>
        </div>
        <button className='absolute top-40 left-4 sm:top-56 sm:left-16 mt-4 sm:mt-28 bg-red-500 text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-red-600 transition-colors duration-300'>
          Buy Now
        </button>
        <img src="/speaker.png" alt="Category" className="absolute right-4 bottom-4 sm:right-4 sm:bottom-32 max-w-[50%] max-h-[50%] object-contain" />
      </div>
    </div>
  );
};

export default CategoryImage;
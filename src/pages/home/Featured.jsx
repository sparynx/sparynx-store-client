// import React from 'react';

const Featured = () => {
  return (
    <div className="py-10 flex justify-center">
      <div className="w-full max-w-[1170px] p-4">
        <div className='flex items-center mb-5'>
          <span className='h-8 w-4 bg-red-600 inline-block mr-2 rounded-sm'></span>
          <h3 className='text-red-600 font-semibold'>Featured</h3>
        </div>

        <h2 className="text-4xl font-semibold mb-6">New Arrival</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* The big left side */}
          <div className="relative bg-black h-[300px] sm:h-[415px] col-span-1 flex items-center justify-center">
            <img src="/ps5.png" alt="Big Image" className="object-contain h-3/4 w-3/4" />
            <div className="absolute bottom-4 left-4 w-full text-white text-left p-4">
              <h4 className="font-semibold">PlayStation 5</h4>
              <p className="text-sm">Experience the next generation of gaming with the PlayStation 5.</p>
              <a href="#" className="text-white hover:underline">Learn More</a>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-4">
            {/* The top right side */}
            <div className="relative bg-black h-[150px] sm:h-[200px] row-span-1 flex items-center justify-center sm:justify-end">
              <img src="/woman.png" alt="Top Right Image" className="object-contain h-3/4 w-3/4" />
              <div className="absolute bottom-4 left-4 w-full text-white text-left p-4">
                <h4 className="font-semibold">Woman</h4>
                <p className="text-sm">Discover the latest fashion trends for women.</p>
                <a href="#" className="text-white hover:underline">Shop Now</a>
              </div>
            </div>

            {/* The bottom right side */}
            <div className="grid grid-cols-2 gap-4 row-span-2">
              {/* The bottom left side */}
              <div className="relative bg-black h-[150px] sm:h-[200px] flex items-center justify-center">
                <img src="/speaker.png" alt="Bottom Left Image" className="object-contain h-3/4 w-3/4" />
                <div className="absolute bottom-4 left-4 w-full text-white text-left p-4">
                  <h4 className="font-semibold">Speaker</h4>
                  <p className="text-sm">High-quality sound for your music and movies.</p>
                  <a href="#" className="text-white hover:underline">Buy Now</a>
                </div>
              </div>

              {/* The bottom right side */}
              <div className="relative bg-black h-[150px] sm:h-[200px] flex items-center justify-center">
                <img src="/bluetooth.png" alt="Bottom Right Image" className="object-contain h-3/4 w-3/4" />
                <div className="absolute bottom-4 left-4 w-full text-white text-left p-4">
                  <h4 className="font-semibold">Bluetooth</h4>
                  <p className="text-sm">Stay connected with the latest Bluetooth technology.</p>
                  <a href="#" className="text-white hover:underline">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
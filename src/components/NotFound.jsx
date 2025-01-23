import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="font-bold text-8xl mb-6">404 Not Found</h1>
        <p className="text-gray-700 mb-20">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className=" text-white hover:bg-red-600 px-5 py-3 rounded-sm bg-red-500">
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
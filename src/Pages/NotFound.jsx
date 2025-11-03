import React from 'react';
import errorImg from '../assets/error-404.png';

const NotFound = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="flex flex-col items-center gap-5 py-20 px-5">
        <img src={errorImg} alt="404 Error" className="max-w-md" />
        <h1 className="text-4xl font-semibold">Oops, page not found!</h1>
        <p className="text-gray-500 text-center">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 mt-6 font-bold"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
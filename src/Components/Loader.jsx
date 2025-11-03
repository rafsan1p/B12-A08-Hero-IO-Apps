import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-6">
        {/* Modern Spinner - Bigger */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border-[6px] border-purple-200 rounded-full"></div>
          <div className="absolute inset-0 border-[6px] border-transparent border-t-purple-600 rounded-full animate-spin"></div>
        </div>
        
        {/* Loading Dots - Bigger */}
        <div className="flex gap-2">
          <span className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
          <span className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
        </div>
        
        {/* Loading Text - Bigger */}
        <p className="text-gray-600 text-xl font-semibold">Loading apps...</p>
      </div>
    </div>
  );
};

export default Loader;
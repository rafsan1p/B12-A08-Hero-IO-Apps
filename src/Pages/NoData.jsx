import React from "react";
import notFound from "../assets/App-Error.png";

const NoData = () => {
  const handleGoBack = () => {
    window.location.href = '/apps';
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col items-center gap-5 py-15 px-5 my-20">
        <img className="w-auto max-w-md" src={notFound} alt="No Data" />
        <h1 className="text-4xl font-semibold text-center">OOPS!! APP NOT FOUND</h1>
        <p className="text-gray-500 text-center">
          The App you are requesting is not found on our system. Please try
          another app
        </p>
        <button
          onClick={handleGoBack}
          className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 mt-4"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default NoData;
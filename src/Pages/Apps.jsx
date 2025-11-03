import React, { useEffect, useState } from "react";
import useFetchApps from "../Hooks/useFetchApps";
import Card from "./Card";
import Loader from "../Components/Loader";
import { Search } from "lucide-react";
import notFoundImg from "../assets/App-Error.png";

const Apps = () => {
  const { appsList, isLoading } = useFetchApps();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(appsList);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    const timer = setTimeout(() => {
      const query = searchTerm.trim().toLowerCase();
      if (query) {
        const results = appsList.filter((app) =>
          app.title?.toLowerCase().includes(query)
        );
        setFilteredList(results);
      } else {
        setFilteredList(appsList);
      }
      setSearching(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, appsList]);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto mt-20">
        <div className="text-center space-y-4 mb-12">
          <h1 className="md:text-5xl text-3xl font-bold">
            Our All Applications
          </h1>
          <p className="text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex items-center justify-between mb-5 gap-4">
          <h2 className="font-bold md:text-base text-sm">
            ({filteredList.length}) Apps Found
          </h2>
          
          {/* Modern Search Bar with Always Visible Icon */}
          <div className="relative md:w-[320px] w-auto flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search apps..."
              className="input input-bordered w-full pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>

        {isLoading || searching ? (
          <Loader />
        ) : filteredList.length === 0 ? (
          <div className="flex flex-col items-center gap-5 py-20 px-5">
            <img className="w-auto max-w-md" src={notFoundImg} alt="No Results" />
            <h1 className="text-4xl font-semibold text-center">OOPS!! APP NOT FOUND</h1>
            <p className="text-gray-500 text-center">
              The App you are searching is not found on our system. Please try another app
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="btn bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 mt-4"
            >
              Go Back!
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-5 mb-20">
            {filteredList.map((app) => (
              <Card key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
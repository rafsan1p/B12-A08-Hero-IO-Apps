import React from "react";
import { Link } from "react-router";
import Card from "./Card";
import useFetchApps from "../Hooks/useFetchApps";
import HeroBanner from "../Components/HeroBanner";
import StatsSection from "../Components/StatsSection";
import Loader from "../Components/Loader";

const Home = () => {
  const { appsList, isLoading } = useFetchApps();
  const trendingApps = appsList.slice(0, 8);

  const handleShowAllClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="md:mt-20 mt-10">
        <HeroBanner />
        <StatsSection />

        <div className="md:my-20 my-10">
          <div className="text-center space-y-4 px-5">
            <h1 className="md:text-5xl text-4xl font-bold">Trending Apps</h1>
            <p className="text-gray-500">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto md:mt-10 mt-6">
              {trendingApps.map((app) => (
                <Card key={app.id} app={app} />
              ))}
            </div>
          )}
          <div className="flex items-center justify-center mt-7">
            <Link
              to="/apps"
              onClick={handleShowAllClick}
              className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-8"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
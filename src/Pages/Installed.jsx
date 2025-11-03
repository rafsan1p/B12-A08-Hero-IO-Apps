import { ArrowUpDown, MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import star from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
import { abbreviateNumber } from "js-abbreviation-number";

const Installed = () => {
  const [loading, setLoading] = useState(false);
  const [installedList, setInstalledList] = useState([]);
  const [sortType, setSortType] = useState("none");

  const sortedApps = (() => {
    if (sortType === "high-low") {
      return [...installedList].sort((a, b) => b.downloads - a.downloads);
    } else if (sortType === "low-high") {
      return [...installedList].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installedList;
    }
  })();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const savedApps = JSON.parse(localStorage.getItem("installed-apps"));
      if (savedApps) setInstalledList(savedApps);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleUninstallClick = (appId) => {
    const savedApps = JSON.parse(localStorage.getItem("installed-apps"));
    const updatedList = savedApps.filter((app) => app.id !== appId);
    setInstalledList(updatedList);
    localStorage.setItem("installed-apps", JSON.stringify(updatedList));
    toast.warning("App Uninstalled Successfully!");
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto md:my-20 my-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="md:text-5xl text-3xl font-bold">
            Your Installed Apps
          </h1>
          <p className="text-gray-500">
            Explore all the apps you have installed and manage them easily
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : !sortedApps.length ? (
          <h1 className="font-bold text-5xl opacity-10 text-center md:mt-40 mt-30">
            No App Installed
          </h1>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-2xl">
                ({sortedApps.length}) Apps Installed
              </h2>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn m-1"
                >
                  Sort By Download <ArrowUpDown />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm"
                >
                  <li>
                    <button
                      onClick={() => setSortType("high-low")}
                      className="flex justify-center"
                    >
                      High <MoveRight /> Low
                    </button>
                  </li>
                  <li>
                    <button
                      className="flex justify-center"
                      onClick={() => setSortType("low-high")}
                    >
                      Low <MoveRight /> High
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              {sortedApps.map((app) => (
                <div
                  key={app.id}
                  className="card bg-base-100 shadow p-4 flex flex-col lg:flex-row items-center justify-between gap-4"
                >
                  <figure className="rounded-xl lg:w-40 w-full flex justify-center">
                    <img
                      className="lg:w-40 lg:h-28 w-48 h-36 object-cover rounded-xl"
                      src={app.image}
                      alt={app.title}
                    />
                  </figure>
                  <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-4 p-4">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-medium md:text-left text-center">
                        {app.title}
                      </h3>
                      <div className="flex flex-row gap-3">
                        <div className="badge badge-soft badge-accent font-semibold">
                          <img className="w-4" src={download} alt="Downloads" />
                          {abbreviateNumber(app.downloads)}
                        </div>
                        <div className="badge badge-soft badge-error font-semibold">
                          <img className="w-4" src={star} alt="Rating" />
                          {app.ratingAvg}
                        </div>
                        <div className="badge badge-ghost">
                          <p className="text-gray-500">{app.size} MB</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleUninstallClick(app.id)}
                      className="btn bg-red-500 hover:bg-red-600 text-white w-full lg:w-auto border-none"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installed;
import { useParams } from "react-router";
import useFetchApps from "../Hooks/useFetchApps";
import star from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import like from "../assets/icon-review.png";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { toast } from "react-toastify";
import NoData from "./NoData";
import NotFound from "./NotFound";
import { ExternalLink, CheckCheck } from "lucide-react";

const Details = () => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();
  const { appsList, isLoading, errorMsg } = useFetchApps();

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installed-apps")) || [];
    const alreadyExists = savedApps.some((app) => app.id === Number(id));
    if (alreadyExists) {
      setInstalled(true);
    }
  }, [id]);

  const currentApp = appsList.find((app) => app.id === Number(id));

  if (isLoading) {
    return <Loader />;
  }

  if (errorMsg) return <NotFound />;

  if (!currentApp) return <NoData />;

  const {
    image,
    title,
    downloads,
    ratingAvg,
    reviews,
    size,
    companyName,
    description,
    ratings,
  } = currentApp;

  const shortDownloads = abbreviateNumber(downloads);
  const shortReviews = abbreviateNumber(reviews);

  const handleInstallClick = () => {
    if (installed) return;

    const savedApps = JSON.parse(localStorage.getItem("installed-apps"));
    let updatedApps = [];

    if (savedApps) {
      const exists = savedApps.some((app) => app.id === currentApp.id);
      if (exists) {
        setInstalled(true);
        return;
      }
      updatedApps = [...savedApps, currentApp];
    } else {
      updatedApps.push(currentApp);
    }

    localStorage.setItem("installed-apps", JSON.stringify(updatedApps));
    setInstalled(true);
    toast.success(`${title} installed successfully!`);
  };

  const handleViewInStore = () => {
    // Search for the app in store
    const appName = encodeURIComponent(title);
    const playStoreUrl = `https://play.google.com/store/search?q=${appName}&c=apps`;
    window.open(playStoreUrl, '_blank');
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-11/12 mx-auto flex flex-col">
        <div>
          {/* App Info */}
          <div className="flex  gap-10 p-5 flex-col md:flex-row items-center md:items-start ">
            <div className="flex justify-center w-full md:w-auto">
              <img className="md:w-[350px] w-[280px] rounded-xl" src={image} alt={title} />
            </div>
            <div className="flex flex-col justify-between flex-1 w-full">
              <div className="border-b-1 border-b-gray-300 pb-7">
                <h3 className="md:text-[32px] text-[25px] font-bold">
                  {title}
                </h3>
                <p className="text-gray-500">
                  Developed by{" "}
                  <span className="text-purple-500 font-semibold">
                    {companyName}
                  </span>
                </p>
              </div>
              <div className="pt-7 pb-11 grid grid-cols-3 gap-4">
                <div className="flex flex-col justify-start">
                  <img className="md:w-10 w-6" src={download} alt="Downloads" />
                  <p className="text-gray-500 md:text-base text-sm">
                    Downloads
                  </p>
                  <h2 className="font-bold md:text-[40px] text-3xl">
                    {shortDownloads}
                  </h2>
                </div>
                <div className="flex flex-col justify-start">
                  <img className="md:w-10 w-6" src={star} alt="Rating" />
                  <p className="text-gray-500 md:text-base text-sm">
                    Average Ratings
                  </p>
                  <h2 className="font-bold md:text-[40px] text-3xl">
                    {ratingAvg}
                  </h2>
                </div>
                <div className="flex flex-col justify-start">
                  <img className="md:w-10 w-6" src={like} alt="Reviews" />
                  <p className="text-gray-500 md:text-base text-sm">
                    Total Reviews
                  </p>
                  <h2 className="font-bold md:text-[40px] text-3xl">
                    {shortReviews}
                  </h2>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-3 md:flex-row flex-col">
                <button
                  onClick={handleInstallClick}
                  className={`${
                    installed 
                      ? "btn bg-gray-400 hover:bg-gray-400" 
                      : "btn bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  } text-white font-bold md:w-60 w-full flex items-center justify-center gap-2 border-none`}
                  disabled={installed}
                >
                  {installed && <CheckCheck className="w-5 h-5" />}
                  {installed ? "Installed" : `Install Now ${size} MB`}
                </button>
                
                <button
                  onClick={handleViewInStore}
                  className="btn btn-outline btn-primary font-bold md:w-[240px] w-full gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  View in Store
                </button>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="border-t-1 border-gray-300 pt-10 px-3">
            <h3 className="text-2xl font-bold mb-4">Ratings</h3>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                layout="vertical"
                data={[...ratings].reverse()}
                margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  width={60}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" barSize={20} fill="#8b5cf6" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Description */}
          <div className="pt-10 px-5 border-t-1 border-gray-300 mb-20">
            <p className="font-semibold text-purple-500 text-left">
              Description:
            </p>
            <p className="text-gray-500 text-left">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details; 
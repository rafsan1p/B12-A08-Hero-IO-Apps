import React from 'react';
import star from '../assets/icon-ratings.png';
import download from "../assets/icon-downloads.png";
import { Link } from 'react-router';
import { abbreviateNumber } from 'js-abbreviation-number';

const Card = ({ app }) => {
  const { image, title, ratingAvg, downloads, id } = app;
  const shortDownloads = abbreviateNumber(downloads);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={`/details/${id}`} onClick={handleClick}>
      <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="px-5 pt-5 overflow-hidden flex justify-center">
          <img
            className="w-full max-w-[315px] h-[250px] rounded-xl object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body space-y-1">
          <p className="font-semibold text-xl">{title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-soft badge-accent font-semibold">
              <img className="w-4" src={download} alt="Downloads" />
              {shortDownloads}
            </div>
            <div className="badge badge-soft badge-error font-semibold">
              <img className="w-4" src={star} alt="Rating" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
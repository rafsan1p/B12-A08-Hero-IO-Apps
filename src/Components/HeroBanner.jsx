import React from 'react';
import playStore from "../assets/playStore.png";
import appleStore from "../assets/appleStore.png";

const HeroBanner = () => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center px-2">
      <h1 className="md:text-[72px] text-5xl font-bold text-center leading-tight">
        We Build <br />{" "}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-gray-500 text-center max-w-3xl">
        At Hero IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="https://play.google.com/store/games?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost font-bold border border-gray-200"
        >
          <img className="w-6" src={playStore} alt="Play Store" /> Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost font-bold border border-gray-200"
        >
          <img className="w-6" src={appleStore} alt="App Store" /> Apple Store
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
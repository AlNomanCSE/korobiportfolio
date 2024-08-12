import React from "react";
import { HERO_CONTENT } from "../data.js";
import profileImage from "../assets/Profile.jpg";
const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap items-center ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              Fatema Tuj Johora Korobi
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Data Science and Machine Learning Enthusiast
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg-p-8">
          <div className="flex justify-center">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt=""
                className="rounded-lg brightness-75 w-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

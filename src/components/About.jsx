import React from "react";
import { ABOUT_TEXT } from "../data.js";
import profileImage from "../assets/about.jpg";
const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
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
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 ">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../data.js";
import profileImage from "../assets/about.jpg";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg-p-8"
        >
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
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 ">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

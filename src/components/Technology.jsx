import React from "react";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiGeopandas } from "react-icons/si";
import { IoLibrary } from "react-icons/io5";
const iconDurations = (duration) => ({
  intioal: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technology = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technology
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 text-4xl"
      >
        <motion.div
          variants={iconDurations(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython />
        </motion.div>
        <motion.div
          variants={iconDurations(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJupyter />
        </motion.div>
        <motion.div
          variants={iconDurations(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNumpy />
        </motion.div>
        <motion.div
          variants={iconDurations(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGeopandas />
        </motion.div>
        <motion.div
          variants={iconDurations(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLibrary />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technology;

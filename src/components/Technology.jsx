import React from "react";
import { FaPython } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiGeopandas } from "react-icons/si";
import { IoLibrary } from "react-icons/io5";
const Technology = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-4xl">Technology</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 text-4xl">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJupyter />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNumpy />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGeopandas />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLibrary />
        </div>
      </div>
    </section>
  );
};

export default Technology;

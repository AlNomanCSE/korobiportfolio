import React from "react";
import { PROJECTS } from "../data.js";
const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap items-center lg:justify-center"
          >
            <div className="w-full lg:w-1/4">
              <img src={project.image} alt={project.title} width={150} />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {project.title} -
                {/* <span className="text-sm text-purple-100">
                  {project.company}
                </span> */}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

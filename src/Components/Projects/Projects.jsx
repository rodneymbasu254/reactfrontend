import React, { useEffect, useState } from "react";
import api from "../../api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("projects/")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="px-8 py-16 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center text-indigo-700">
        Our Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center mb-16 gap-10`}
        >
          {/* ✅ Use uploaded image if available, else a fallback */}
          <img
            src={
              project.image
                ? project.image
                : `https://source.unsplash.com/600x400/?technology,${project.title}`
            }
            alt={project.title}
            className="w-full h-auto object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />

          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {project.title}
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {project.division_name}
            </h3>
            <h3 className="text-gray-600 text-sm mb-3">
              {project.category}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {project.description}
            </p>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              {project.goal}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-indigo-600 hover:text-indigo-800 font-medium">{project.division}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                🔗 View Project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

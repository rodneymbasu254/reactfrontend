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
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
        Our Projects
      </h1>

      {/* ✅ Static banner image */}
      <div className="flex justify-center mb-12">
        <img
          src="/projects.png"
          alt="Projects Showcase"
          className="rounded-2xl shadow-lg w-full max-w-5xl object-cover"
        />
      </div>

      {/* ✅ Project List */}
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center mb-16 gap-10`}
          >
            {/* ✅ Use uploaded image if available, else placeholder */}
            <img
              src={
                project.image && project.image !== ""
                  ? project.image
                  : "/project-placeholder.png"
              }
              onError={(e) => (e.target.src = "/project-placeholder.png")}
              alt={project.title}
              className="w-full h-auto object-cover shadow-lg hover:scale-105 transition-transform duration-300 rounded-xl"
            />

            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h2>
              {project.division_name && (
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.division_name}
                </h3>
              )}
              {project.category && (
                <p className="text-gray-600 text-sm mb-3">
                  {project.category}
                </p>
              )}
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              {project.goal && (
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Goal: {project.goal}
                </p>
              )}

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
        ))
      ) : (
        <p className="text-center text-gray-600 mt-10">
          Server reconnecting. Please check back later.
        </p>
      )}
    </div>
  );
}

export default Projects;




import React, { useEffect, useState } from "react";
import api from "../../api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("projects/");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading projects...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">
        Our Projects
      </h1>

      {/* ✅ Banner image */}
      <div className="flex justify-center mb-12">
        <img
          src='/projects.png'
          alt="Our Projects"
          className="w-full h-auto rounded-sm shadow-md object-cover hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      {/* ✅ Project cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {project.title}
            </h2>
            <h3 className="text-gray-700 font-medium mb-1">
              Division: {project.division_name}
            </h3>
            <h4 className="text-gray-500 text-sm mb-2">
              Category: {project.category}
            </h4>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <p className="text-sm text-gray-600 italic mb-3">{project.goal}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-indigo-600 hover:text-indigo-800 font-medium"
              >
                🔗 View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

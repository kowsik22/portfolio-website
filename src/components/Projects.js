// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "Guess My Number",
    description: "A number guessing game built with JavaScript.",
  },
  {
    title: "PG Life",
    description: "A web app to help students find PG accommodations.",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded shadow">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

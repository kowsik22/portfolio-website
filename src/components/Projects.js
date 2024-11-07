// src/components/Projects.js
import React from "react";

const projects = [
  {
    title: "Guess My Number",
    description:
      "Developed a responsive restaurant website using HTML, CSS, JavaScript, and Bootstrap, boosting user engagement by 50% with interactive ordering features, real-time validation, and optimized cross-device compatibility. ",
    image: "assets/r-1.png",
  },
  {
    title: "PG Life",
    description: "A web app to help students find PG accommodations.",
    image: "assets/pg.png",
  },
  {
    title: "Guess My Number",
    description:
      "Developed a responsive restaurant website using HTML, CSS, JavaScript, and Bootstrap, boosting user engagement by 50% with interactive ordering features, real-time validation, and optimized cross-device compatibility. ",
    image: "assets/live.png",
  },
  {
    title: "Guess My Number",
    description:
      "Developed a responsive restaurant website using HTML, CSS, JavaScript, and Bootstrap, boosting user engagement by 50% with interactive ordering features, real-time validation, and optimized cross-device compatibility. ",
    image: "assets/ps.png",
  },
  {
    title: "Guess My Number",
    description:
      "Developed a responsive restaurant website using HTML, CSS, JavaScript, and Bootstrap, boosting user engagement by 50% with interactive ordering features, real-time validation, and optimized cross-device compatibility. ",
    image: "assets/todo.png",
  },
  {
    title: "Guess My Number",
    description:
      "Developed a responsive restaurant website using HTML, CSS, JavaScript, and Bootstrap, boosting user engagement by 50% with interactive ordering features, real-time validation, and optimized cross-device compatibility. ",
    image: "assets/tsm.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded shadow">
              <img
                src={project.image}
                alt={project.title}
                className="sm:w-full w-65 h-38 object-cover mb-4 rounded hover:scale-105 transform transition duration-200 ease-in-out cursor-pointer"
              />
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

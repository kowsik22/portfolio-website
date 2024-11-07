// src/components/Skills.js
import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "Django",
  "Python",
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gray-800 p-4 rounded cursor:pointer hover:text-blue-500 hover:scale-105 transform transition duration-200 ease-in-out"
              style={{ cursor: "pointer" }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

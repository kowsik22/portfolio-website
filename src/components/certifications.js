// src/components/Certifications.js
import React from "react";

const certifications = [
  {
    title: "Programming with JavaScript",
    organization: "Meta",
    skill: "JavaScript",
    link: "https://bit.ly/48B4W6c",
  },
  {
    title: "Web Development Training",
    organization: "Internshala",
    skill: "ReactJS, PHP, Mysql  ",
    link: "https://bit.ly/3UzYtms",
  },
  {
    title: "JavaScript Skill Assessment",
    organization: "HackerRank",
    skill: "JavaScript",
    link: "https://bit.ly/3UzYtms",
  },
  {
    title: "Frontend Developer Certification",
    organization: "HackerRank",
    skill: "ReactJs",
    link: "https://bit.ly/3YAAapy",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-100 text-gray-900 cursor-pointer "
    >
      <div className="max-w-4xl mx-auto px-6 text-center ">
        <h2 className="text-4xl font-bold mb-8">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-left"
            >
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-700 mb-1">
                <strong>Organization:</strong> {cert.organization}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Skill:</strong> {cert.skill}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                  style={{ "text-decoration": "none" }}
                >
                  View Certification
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

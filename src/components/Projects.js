import React from "react";

const projects = [
  {
    title: "PostNest",
    description:
      "PostNest is a dynamic social blogging platform built with Django, Tailwind CSS, and JavaScript. It offers features like dark mode, user authentication, and the ability to create, edit, and manage posts.",
    image: "assets/ps.png",
    github: "https://bit.ly/3Avd37R",
    skills: "Django, React, Tailwind CSS",
  },
  // {
  //   title: "Foodies",
  //   description:
  //     "Developed a responsive restaurant website using HTML, CSS, JavaScript, and Bootstrap, boosting user engagement by 50% with interactive ordering features and real-time validation. ",
  //   image: "assets/r-1.png",
  //   github: "https://bit.ly/3YAWFux",
  //   skills: " javascript, Tailwind CSS",
  // },
  // {
  //   title: "PG Life",
  //   description:
  //     "Designed a web app aimed at helping students find suitable PG accommodations. The app streamlines the process of searching for and booking PGs, providing an easy-to-use interface for students seeking housing near their universities.",
  //   image: "assets/pg.png",
  //   github: "https://bit.ly/40Dhvfw",
  //   skills: " Html, Css, React, Bootstrap, Php, Mysql",
  // },
  {
    title: "Livestockify Dashboard",
    description:
      "The Livestockify Dashboard is an intuitive farm management tool enabling real-time tracking of essential metrics like temperature, humidity, and ammonia levels. With responsive design, device management, alerts, and actionable insights, it helps farmers enhance farm productivity.",
    image: "assets/live.png",
    github: "https://tinyurl.com/yc883k4h",
    skills: " React, Tailwind CSS",
  },
  {
    title: "Screen Time Management",
    description:
      "An interactive platform to monitor and reduce screen time effectively. Includes features like real-time usage tracking, reminders for exceeding time limits, focus modes, gamification, and insights into weekly and monthly usage patterns.",
    image: "assets/screen.png",
    github: "https://router-six-omega.vercel.app/",
    skills: "React, Tailwind CSS",
  },
  {
    title: "TODO",
    description:
      "Built a simple and responsive to-do list app with React, offering a user-friendly interface for managing tasks. The app supports real-time updates, making task management seamless and accessible on all devices.",
    image: "assets/todo.png",
    github: "https://bit.ly/3CiQG6l",
    skills: " Html, React, Tailwind CSS",
  },
  {
    title: "TASK APP",
    description:
      "Developed a task management web app using React, enabling users to organize and prioritize tasks efficiently. With a focus on usability, the app offers a clean interface and ensures a smooth experience across multiple devices.",
    image: "assets/tsm.png",
    github: "https://tinyurl.com/4vp6czuf",
    skills: "Html, React, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6  md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded shadow">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="sm:w-full w-65 h-38 object-cover mb-4 rounded hover:scale-105 transform transition duration-200 ease-in-out cursor-pointer"
                />
              </a>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 mb-3 text-gray-700">{project.description}</p>
              <h5 className=" mb-4 text-blue-500">{project.skills}</h5>
              <a
                href={project.github}
                target="_blank"
                rel="github"
                className="text-white bg-red-500 text-1xl font-bold px-2 py-2  rounded cursor-pointer hover:scale-105 transform transition duration-200 ease-in-out"
                style={{ border: "none" }}
              >
                Live Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

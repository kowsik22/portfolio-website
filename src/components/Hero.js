import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white h-screen flex items-center justify-center"
    >
      <div className="text-center flex flex-col items-center">
        <img
          src="/assets/img1.jpg"
          alt="Profile"
          className="mb-4 w-32 h-32 sm:w-72 sm:h-72  rounded-full object-cover"
        />
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Hi, I'm Kowsik</h1>
        <p className="text-lg sm:text-xl mb-6">
          Web Developer | Frontend Enthusiast
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            download="kowsik_narumanchi_resume.pdf"
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

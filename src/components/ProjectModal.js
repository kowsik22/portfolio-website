import React from "react";

const ProjectModal = ({ project, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-2xl">{project.title}</h3>
      <p>{project.description}</p>
      <button
        onClick={closeModal}
        className="mt-4 btn-primary px-6 py-2 rounded-full"
      >
        Close
      </button>
    </div>
  </div>
);

export default ProjectModal;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faNode,
  faGithub,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    name: "HTML",
    icon: (
      <FontAwesomeIcon icon={faHtml5} size="3x" style={{ color: "#E34F26" }} />
    ),
  },
  {
    name: "CSS",
    icon: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        size="3x"
        style={{ color: "#1572B6" }}
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <FontAwesomeIcon icon={faJs} size="3x" style={{ color: "#F7DF1E" }} />
    ),
  },
  {
    name: "React",
    icon: (
      <FontAwesomeIcon icon={faReact} size="3x" style={{ color: "#61DAFB" }} />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <FontAwesomeIcon icon={faNode} size="3x" style={{ color: "#339933" }} />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <FontAwesomeIcon icon={faGithub} size="3x" style={{ color: "#171515" }} />
    ),
  },
  {
    name: "Python",
    icon: (
      <FontAwesomeIcon icon={faPython} size="3x" style={{ color: "#306998" }} />
    ),
  },
  {
    name: "Django",
    icon: <FontAwesomeIcon icon={faCode} size="3x" style={{}} />,
  },
];

const Skills = () => (
  <section id="skills" className="py-10 bg-gray-900 text-white">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded flex flex-col items-center hover:bg-blue-700 hover:scale-105 transition duration-200 ease-in-out"
          >
            {skill.icon}
            <p className="mt-2 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

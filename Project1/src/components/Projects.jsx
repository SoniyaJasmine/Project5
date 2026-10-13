
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import "./Projects.css";

const projects = [
  {
    title: "Food Blog Website",
    description:
      "A responsive food blog website featuring delicious recipes, food photography, and an attractive layout.",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
    demo: "https://soniyajasmine.github.io/Day9/Project2/Food%20Blog/Project2.html#",
  },
   {
    title: "Construction Website",
    description:
      "A construction company website featuring project information, service sections, and responsive navigation.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
    demo: "https://day9-umyh.vercel.app/",
  },
  {
    title: "Vetri Website",
    description:
      "A modern, responsive business website built with reusable React components and a clean user interface.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    demo: "https://day9-523a.vercel.app/",
  },
  {
    title: "Wedding Invitation Store",
    description:
      "An e-commerce website featuring wedding invitation collections, product details, wishlist, cart, and checkout.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
    demo: "https://project5-2k3c.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio showcasing my skills, projects, and journey into AI Python Full Stack Development.",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
    ],
    demo: "",
  },
  
 
  {
    title: "Python & Django API",
    description:
      "A backend learning project exploring REST APIs, serializers, validation, and database operations.",
    technologies: [
      { name: "Python", icon: <FaPython /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Database", icon: <FaDatabase /> },
    ],
    demo: "",
  },
];

function Projects() {
  return (
    <section className="project-page" id="projects">
      <div className="project-title">
        
      </div>

      <div className="particles" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      
    <div className="project-slider">
        <div className="project-container">
            {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
                <div className="project-front">
                <span className="project-number">
                    0{index + 1}
                </span>

                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-tech">
                    {project.technologies.map((tech) => (
                    <span
                        className="project-tech-item"
                        key={tech.name}
                        title={tech.name}
                    >
                        {tech.icon}
                    </span>
                    ))}
                </div>

                <div className="project-links">
                    {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer"       className="project-link"
>
                        to explore →
                    </a>
                    )}
                </div>
                </div>
            </article>
            ))}
        </div>
    </div>

    </section>
  );
}

export default Projects;

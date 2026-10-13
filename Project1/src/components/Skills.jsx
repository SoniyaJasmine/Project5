
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    category: "FRONTEND",
    title: "The visual experience.",
    description:
      "Crafting responsive interfaces with clean layouts and engaging user experiences.",
    icon: "✳",
    className: "frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    category: "BACKEND",
    title: "The logic behind it.",
    description:
      "Building application logic, developing APIs, and connecting services.",
    icon: "</>",
    className: "backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
    ],
  },
  {
    number: "03",
    category: "DATABASE",
    title: "The data foundation.",
    description:
      "Organizing application data and working with relational databases.",
    icon: "⌘",
    className: "database",
    skills: ["MySQL", "SQL", "Database Design"],
  },
];

function Skills() {
  return (
    <section className="skills-page" id="skills">
      <div className="skills-aurora aurora-one"></div>
      <div className="skills-aurora aurora-two"></div>
      <div className="skills-grid-bg"></div>

      <div className="skills-content">
        <header className="skills-header">

          <h1>
            Skills & <span>Stack.</span>
          </h1>

          <div className="skills-heading-line">
            <span></span>
          </div>
        </header>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <article
              className={`skill-group ${group.className}`}
              key={group.number}
            >
              <div className="skill-group-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-category">
                  {group.category}
                </span>
                <span className="skill-symbol">{group.icon}</span>
              </div>

              <h2>{group.title}</h2>
              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    <span className="skill-dot"></span>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="skill-card-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

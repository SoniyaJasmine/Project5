
import "./About.css";

import profileImage from "../assets/WhatsApp Image 2026-08-20 at 13.40.11.jpeg";
import resume from "../assets/New Resume (2).pdf";

function About() {
    return (
        <section className="about" id="about">
            
            <div className="about-ambient" aria-hidden="true">
                <span className="ambient-orb orb-one"></span>
                <span className="ambient-orb orb-two"></span>
                <span className="ambient-orb orb-three"></span>

                <span className="ambient-particle particle-one"></span>
                <span className="ambient-particle particle-two"></span>
                <span className="ambient-particle particle-three"></span>
                <span className="ambient-particle particle-four"></span>
                <span className="ambient-particle particle-five"></span>
                <span className="ambient-particle particle-six"></span>
            </div>


            <div className="about-heading">
                <p>Get to know me</p>
            </div>

            <div className="about-container">

                <div className="about-image">
                    <img src={profileImage} alt="Soniya" />
                </div>

                <div className="about-content">
                    <h2>A Little About Me</h2>

                    <p>
                        I'm an AI Python Full Stack Developer currently pursuing my internship, gaining hands-on experience in building real-world applications.
                    </p>

                    <p>
                       I'm passionate about problem-solving, exploring new technologies, and creating responsive, user-friendly digital experiences
                    </p>

                    <p>
                        My goal is to grow as a full stack developer and contribute to innovative projects that create meaningful impact.
                    </p>

                    <div className="about-details">
                        <div>
                            <strong>Education</strong>
                            <span>M.Sc. Mathematics</span>
                        </div>

                        <div>
                            <strong>Focus</strong>
                            <span>AI Python Full Stack</span>
                        </div>
                    </div>

                    <a
                        href={resume}
                        target="_blank"
                        rel="noreferrer"
                        className="about-btn"
                    >
                        Download CV
                    </a>

                </div>
            </div>
        </section>
    );
}

export default About;

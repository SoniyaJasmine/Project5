
import "./Home.css";

import linkedinIcon from "../assets/mingcute--linkedin-fill.svg";
import twitterIcon from "../assets/ri--twitter-fill.svg";
import githubIcon from "../assets/ri--github-fill.svg";
import profileImage from "../assets/WhatsApp Image 2026-08-20 at 13.40.11.jpeg";

function Home() {
    return (
        <>
            {/* Social Icons */}
            {/* <div className="left-social">

                <span className="social-line"></span>

                <div className="left-icons">

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>

                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={twitterIcon} alt="Twitter" />
                    </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={githubIcon} alt="GitHub" />
                    </a>

                </div>

                <span className="social-line"></span>

            </div> */}

            {/* Hero Section */}
            <section className="hero" id="home">

                <div className="hero-content">

                    <h1>Hi, I'm</h1>

                    <h2 className="name">
                        {"Soniya A".split("").map((letter, index) => (
                            <span key={index}>
                                {letter === " " ? "\u00A0" : letter}
                            </span>
                        ))}
                    </h2>

                    <h3>AI Python Full Stack Developer</h3>

                    <p>
                        I develop scalable web applications by combining modern frontend technologies with Python-based backend development and emerging AI solutions.
                    </p>

                </div>

                <div className="hero-image">

                    <div className="image-circle">
                                {/* Diagonal orbital rings */}
                                <div className="orbit orbit-one">
                                    <span className="particle"></span>
                                </div>

                                <div className="orbit orbit-two">
                                    <span className="particle"></span>
                                </div>

                                <div className="orbit orbit-three">
                                    <span className="particle"></span>
                                </div>

                                {/* Original profile image */}
                                <img
                                    src={profileImage}
                                    alt="Soniya G"
                                />

                    </div>

                </div>

            </section>
        </>
    );
}

export default Home;


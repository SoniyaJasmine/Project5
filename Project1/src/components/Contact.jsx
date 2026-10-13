
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:sonysophia07@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-page" id="contact">

      {/* Main editorial layout */}
      <div className="contact-layout">
        {/* Left side */}
        <div className="contact-editorial">

          <h1 className="contact-headline">
            LET'S
            <br />
            CREATE<span className="headline-period">.</span>
            <br />
            <span className="headline-outline">
              SOMETHING
            </span>
            <br />
            MEANINGFUL.
          </h1>

          <p className="contact-intro">
            Every great project starts with a conversation.
            I'm exploring opportunities to learn, collaborate
            and build thoughtful digital experiences with
            Python and modern web technologies.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:sonysophia07@gmail.com"
            className="contact-email-cta"
          >
            <span className="email-icon">
              <FaArrowUpRightFromSquare />
            </span>

            <span className="email-text">
              <small>DROP ME AN EMAIL</small>
              <strong>sonysophia07@gmail.com</strong>
            </span>

            <FaArrowRight className="email-arrow" />
          </a>

          {/* Bottom information */}
          <div className="contact-bottom-info">
            <div className="contact-location">
              <span className="bottom-label">BASED IN</span>
              <span>Tamil Nadu, India</span>
            </div>

            <div className="contact-social-area">
              <span className="bottom-label">FIND ME ON</span>

              <div className="contact-socials">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/SoniyaJasmine"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: compact form */}
        <div className="contact-form-panel">
          <div className="form-panel-heading">
            <span className="form-number">01 — YOUR MESSAGE</span>

            <div className="form-icon">
              <FaPaperPlane />
            </div>
          </div>

          <h2>
            Tell me
            <br />
            what's on <span>your mind.</span>
          </h2>

          <p className="form-description">
            Have a project, an opportunity, or just want
            to say hello? Send me a message.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="editorial-input">
              <label htmlFor="contact-name">01. YOUR NAME</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="What should I call you?"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="editorial-input">
              <label htmlFor="contact-email">02. YOUR EMAIL</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="editorial-input">
              <label htmlFor="contact-message">
                03. YOUR MESSAGE
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="3"
                placeholder="Tell me a little about it..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              <span>LET'S CONNECT</span>
              <FaArrowRight />
            </button>
          </form>

          <p className="form-footnote">
            YOUR NEXT BIG IDEA COULD START HERE.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <span>DESIGNED WITH PURPOSE.</span>
        <Link to="/">
          BACK TO HOME <FaArrowRight />
        </Link>
        <span>© {new Date().getFullYear()} SONIYA</span>
      </footer>
    </section>
  );
};

export default Contact;

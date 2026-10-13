import { useLocation } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import "./SocialSidebar.css";

function SocialSidebar() {
    const location = useLocation();
    const isDarkPage =
        location.pathname === "/about" ||
        location.pathname === "/skills" ||
        location.pathname === "/projects";
    return (
        <div className={`left-social ${isDarkPage ? "social-dark" : "social-light"}`}>

            <span className="social-line top"></span>

            <div className="left-icons">
                <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://github.com/SoniyaJasmine"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="YOUR_TWITTER_URL"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                >
                    <FaTwitter />
                </a>
            </div>

            <span className="social-line bottom"></span>

            
        </div>
    );
}

export default SocialSidebar;
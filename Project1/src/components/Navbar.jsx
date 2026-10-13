
import "./Navbar.css";
import { NavLink } from "react-router-dom";


import homeIcon from "../assets/tabler--home-filled.svg";
import aboutIcon from "../assets/solar--user-id-bold.svg";
import skillsIcon from "../assets/ph--code-fill.svg";
import projectIcon from "../assets/ic--round-work.svg";
import contactIcon from "../assets/mage--contact-book-fill.svg";

function Navbar() {
    return (
        <nav className="right-nav">

            <NavLink to="/" className="right-item">
                <img src={homeIcon} alt="Home" />
                <span>Home</span>
            </NavLink>

            <NavLink to="/about" className="right-item">
                <img src={aboutIcon} alt="About" />
                <span>About</span>
            </NavLink>

            <NavLink to="/skills" className="right-item">
                <img src={skillsIcon} alt="Skills" />
                <span>Skills</span>
            </NavLink>

            <NavLink to="/projects" className="right-item">
                <img src={projectIcon} alt="Projects" />
                <span>Projects</span>
            </NavLink>

            <NavLink to="/contact" className="right-item">
                <img src={contactIcon} alt="Contact" />
                <span>Contact</span>
            </NavLink>

        </nav>
    );
}

export default Navbar;


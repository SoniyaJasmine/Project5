import { useState } from "react";
import { useCart } from "../Context/CartContext";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/download__23_-removebg-preview.png";

function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(
      activeDropdown === name ? null : name
    );
  };

  return (
    <header className="navbar">

      {/* ================= LOGO ================= */}
      <a
        href="#home"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <div className="logo-design">

          {/* Logo Image */}
          <div className="logo-image-wrapper">
            <img
              src={logo}
              alt="Cherish By Wed Knot Craft"
            />
            <div className="inside-name">
              <span>Cherrish</span>
              <span>&nbsp;&nbsp;&nbsp;By</span>
            </div>
          </div>

          {/* Wed Knot Craft */}
          <div className="brand-name">
            <span>Wed</span>
            <span> &nbsp;&nbsp;&nbsp; Knot</span>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Craft</span>
          </div>

          {/* Wedding */}
          <div className="wedding-name">
            Wedding
          </div>

        </div>
      </a>


      {/* ================= SEARCH ================= */}
      <div className="navbar-search" onClick={() => navigate("/search")}>

        <input
          type="text"
          placeholder="Search..."
          readOnly
        />

        <button aria-label="Search">
          🔍
        </button>

      </div>


      {/* ================= ACTIONS ================= */}
      <div className="navbar-actions">

        <button
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className="nav-icon wishlist-nav-icon"
          onClick={() => navigate("/wishlist")}
          aria-label="Wishlist"
        >
          ♡
        </button>

        <button
          className="cart-icon"
          onClick={() => navigate("/cart")}
          aria-label="Cart"
        >
          🛒

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>


      {/* ================= NAVIGATION ================= */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

        {/* HOME */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>

        {/* WEDDING INVITATION */}
        <NavLink
          to="/wedding-invitation"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={closeMenu}
        >
          Wedding Invitation
        </NavLink>


        {/* ================= SPECIAL OCCASIONS ================= */}
        <div
          className={`dropdown ${
            activeDropdown === "special" ? "active" : ""
          }`}
        >

          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown("special")}
          >
            Special Occasions
            <span className="arrow"></span>
          </button>

          <div className="dropdown-menu">

            <a
              href="#birthday"
              className="birthday-option"
              onClick={closeMenu}
            >
              Birthday Invitations
            </a>

            <a
              href="#engagement"
              className="engagement-option"
              onClick={closeMenu}
            >
              Puperty Cards
            </a>

            <a
              href="#engagement"
              className="engagement-option"
              onClick={closeMenu}
            >
              Luxury Invitations
            </a>

            <a
              href="#engagement"
              className="engagement-option"
              onClick={closeMenu}
            >
              Ear Boring Cards
            </a>

            <a
              href="#engagement"
              className="engagement-option"
              onClick={closeMenu}
            >
              Engagement Cards
            </a>

            <a
              href="#engagement"
              className="engagement-option"
              onClick={closeMenu}
            >
              House Warming
            </a>

            <a
              href="#anniversary"
              className="anniversary-option"
              onClick={closeMenu}
            >
              Anniversary Cards
            </a>


          </div>

        </div>


        {/* ================= THEME CARDS ================= */}
        <div
          className={`dropdown ${
            activeDropdown === "themes" ? "active" : ""
          }`}
        >

          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown("themes")}
          >
            Theme Cards
            <span className="arrow"></span>
          </button>

          <div className="dropdown-menu">

            <a
              href="#floral"
              className="floral-option"
              onClick={closeMenu}
            >
              Beach Theme Cards
            </a>

            <a
              href="#royal"
              className="royal-option"
              onClick={closeMenu}
            >
              Bride Theme Cards
            </a>

            <a
              href="#beach"
              className="beach-option"
              onClick={closeMenu}
            >
              Box Cards
            </a>

            <a
              href="#minimal"
              className="minimal-option"
              onClick={closeMenu}
            >
              Single Sheet Cards
            </a>

          </div>

        </div>


        {/* ================= SCROLL INVITATION ================= */}
        <div
          className={`dropdown ${
            activeDropdown === "scroll" ? "active" : ""
          }`}
        >

          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown("scroll")}
          >
            Scroll Invitation
            <span className="arrow"></span>
          </button>

          <div className="dropdown-menu">

            <a
              href="#traditional-scroll"
              className="traditional-option"
              onClick={closeMenu}
            >
              Small Size Scroll
            </a>

            <a
              href="#royal-scroll"
              className="royal-scroll-option"
              onClick={closeMenu}
            >
              Box Scroll
            </a>

            <a
              href="#floral-scroll"
              className="floral-scroll-option"
              onClick={closeMenu}
            >
              Only Scroll
            </a>

            <a
              href="#modern-scroll"
              className="modern-scroll-option"
              onClick={closeMenu}
            >
              High End Scroll
            </a>

          </div>

        </div>


        {/* ================= DIGITAL INVITATION ================= */}
        <div
          className={`dropdown ${
            activeDropdown === "digital" ? "active" : ""
          }`}
        >

          <button
            className="dropdown-toggle"
            onClick={() => toggleDropdown("digital")}
          >
            Digital Invitation
            <span className="arrow"></span>
          </button>

          <div className="dropdown-menu">

            <a
              href="#video-invitation"
              className="video-option"
              onClick={closeMenu}
            >
              Whatsapp Cards
            </a>

            <a
              href="#whatsapp-invitation"
              className="whatsapp-option"
              onClick={closeMenu}
            >
              Save the Date Cards
            </a>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;
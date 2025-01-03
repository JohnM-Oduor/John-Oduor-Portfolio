import React, { useState } from 'react';
import './navbar.css';
import johnlogo from '../../assets/johnlogo.png';
import { Link } from 'react-scroll';
import { MdMessage } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  // State to toggle the menu visibility
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <img src={johnlogo} alt="Logo" className="logo" />

      {/* Desktop Menu */}
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>

      {/* Contact Button */}
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <MdMessage alt="" className="desktopMenuBtnImg" /> Contact Me
      </button>

      {/* Hamburger Menu Icon */}
      <GiHamburgerMenu
        className="hamburgerIcon"
        onClick={() => setShowMenu((prev) => !prev)}
      />

      {/* Mobile Menu */}
      <div
        className="navMenu"
        style={{ display: showMenu ? 'flex' : 'none' }}
      >
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

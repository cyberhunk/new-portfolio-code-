import React, { useState } from "react";
import "./Navbar.scss";
import Logo from "../Logo/Logo";
import { navLinks } from "./../../constants/constants";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import resume from "../../assets/satyam.pdf";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        ".navbar .nav-links .tab",
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          delay: 0.3,
        }
      )
      .fromTo(
        ".rightSection",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
        }
      );
  });

  return (
    <nav className="navbar">
      <Logo />

      <div className={`nav-links ${openNav ? "active" : ""}`}>
        <div className="close-icon" onClick={() => setOpenNav(!openNav)}>
          <FaTimes />
        </div>

        {navLinks.map((tab, index) => (
          <Link
            key={index}
            className="tab"
            activeClass="active"
            id={index}
            to={tab.id}
            spy={true}
            smooth={true}
            offset={-80}
            onClick={() => setOpenNav(false)}
          >
            <h5>{tab.title}</h5>
          </Link>
        ))}
      </div>

      <div className="rightSection">
        <div className="button">
          <a
            href={resume}
            target="_blank"
            className="myResume"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>

        <div className="menu-btn" onClick={() => setOpenNav(!openNav)}>
          <FaBars />
        </div>
      </div>

      {openNav && (
        <div className="sidebar-overlay" onClick={() => setOpenNav(!openNav)} />
      )}
    </nav>
  );
};

export default Navbar;

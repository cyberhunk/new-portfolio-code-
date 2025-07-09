import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import { navLinks } from "../../constants/constants";
import { Link } from "react-scroll";
import SocialHandles from "../SocialHandles/SocialHandles";

const Footer = () => {
  return (
    <footer id="footer" className="padding-horizontal footer-container">
      <div className="container">
        <Logo />

        <div className="footer-tabs">
          {navLinks.map((tab, index) => (
            <Link
              className="tab"
              to={tab.id}
              smooth={true}
              key={index}
            >
              <h4>{tab.title}</h4>
            </Link>
          ))}
        </div>

        <SocialHandles />
      </div>

      <div className="copyright">
        <p className="buildBy">Build with ❤️ by Satyam Vishwakarma</p>
        <p className="copyText">Copyright &copy; All right reserved - 2024</p>
      </div>
    </footer>
  );
};

export default Footer;

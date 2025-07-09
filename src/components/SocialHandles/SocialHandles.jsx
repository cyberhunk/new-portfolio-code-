import React from "react";
import "./SocialHandles.scss";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const socialHandles = [
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/satyam-vishwakarma-502126240/",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/_satyam_vish/",
  },
  {
    name: "gmail",
    icon: <SiGmail />,
    link: "mailto:satyamvishwakarma1819@gmail.com",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/cyberhunk",
  },
];

const SocialHandles = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".handles-container .icon-wrapper",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        delay: 2,
      }
    );
  });

  return (
    <div className="handles-container">
      {socialHandles.map((handle, index) => (
        <a
          href={handle.link}
          target="_blank"
          className={`icon-wrapper ${handle.name}`}
          key={index}
          rel="noopener noreferrer"
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;

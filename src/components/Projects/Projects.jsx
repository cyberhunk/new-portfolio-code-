import React from "react";
import "./Projects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../../constants/constants";
import SectionHeading from "../SectionHeading/SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top 80%",
        },
      })
      .fromTo(
        ".projects-container .projectText",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".projects-container .projectContainer > *",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
          ease: "back.out",
        }
      );
  });

  return (
    <section id="projects" className="padding-horizontal projects-container">
      <SectionHeading subHeading={"My Works"} heading={"Projects"} />

      <p className="projectText">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className="projectContainer">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

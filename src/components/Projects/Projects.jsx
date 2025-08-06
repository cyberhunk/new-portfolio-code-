import React, { useState } from "react";
import "./Projects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "../../constants/constants";
import SectionHeading from "../SectionHeading/SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
        selectedCategory === "Shopify"
          ? project.fil === "shopify"
          : project.fil !== "shopify"
      );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

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
      <SectionHeading subHeading={"My Work"} heading={"Projects"} />

      <p className="projectText">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>

      <div className="projectNav ">
        {["All",  "Coding","Shopify",].map((category, index) => (
          <button
            key={index}
            className={`navButton ${selectedCategory === category ? "active" : ""
              }`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </button>
        ))}
        <button className="github-ac" onClick={() => window.open("https://github.com/cyberhunk", "_blank")}>
          Explore My Github
        </button>
      </div>

      <div className="projectContainer">
        {currentProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pageButton ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}

          </button>

        ))}
      </div>
    </section>
  );
};

export default Projects;

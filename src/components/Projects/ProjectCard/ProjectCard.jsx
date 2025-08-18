import React from "react";
import "./ProjectCard.scss";
import Tilt from "react-parallax-tilt";
import github from "../../../assets/github.png";
// import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  // const navigate = useNavigate();
  return (
    <Tilt
      className="projectCard"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <div
        className="upperContainer"
        onClick={() => window.open(project?.view, "_blank")}
      >
        <div className="topContainer">
          <img src={project?.image} alt={project?.name} className="image" />
          {!project?.tags?.some((tag) => tag.name.toLowerCase() === "shopify") && (
            <div className="githubContainer">
              <div
                onClick={() => window.open(project?.source_code_link, "_blank")}
                className="black-gradient innerContainer"
              >
                <img src={github} alt="github" />
              </div>
            </div>
          )}
        </div>

        <div className="middleContainer">
          <h3 className="projectName">{project?.name}</h3>
          <p>{project?.description}</p>
        </div>
      </div>

      <div className="bottomContainer">
        {project?.tags.map((tag) => (
          <p key={tag.name} className={`tagText ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

export default ProjectCard;

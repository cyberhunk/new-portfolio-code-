import React from "react";
import "./skillsCard.scss";

const SkillsCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img src={skill.icon} alt={skill.name} className="icon" />
      <h5 className="name">{skill.name}</h5>
    </div>
  );
};

export default SkillsCard;

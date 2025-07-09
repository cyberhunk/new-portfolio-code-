import React from "react";
import "./Skills.scss";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { skills } from "../../../constants/constants";
import SkillsCard from "../SkillsCard/SkillsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 80%",
        },
      })
      .fromTo(
        ".skills-container .all-skills > *",
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'sine.out'
        }
      );
  });

  return (
    <section id="skills" className="padding-horizontal skills-container">
      <SectionHeading
        subHeading={"The Tools I Work With"}
        heading={"Skills & Expertise"}
      />

      <div className="all-skills">
        {skills.map((item, index) => (
          <SkillsCard key={index} skill={item} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import "./Education.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { educations } from "../../constants/constants";
import EducationCard from "./EducationCard/EducationCard";

const Education = () => {
  return (
    <section id="education" className="padding-horizontal education-container">
      <SectionHeading
        subHeading={"Academic Background"}
        heading={"Education"}
      />

      <div className="timeline-container">
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;

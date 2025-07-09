import React from "react";
import "./educationCard.scss";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      className="cardStyle"
      contentStyle={{
        background: "#16325B",
        color: "#f0f3fa",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #b1c9ef",
      }}
      date={education?.timeline}
      iconStyle={{
        background: education?.iconBg,
      }}
      icon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src={education?.icon}
            alt={education?.name}
            className="badge-icon"
            style={{
              height: "50px",
              width: "50px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>
      }
    >
      <div className="details-container">
        <h3 className="course">{education?.courseName}</h3>
        <p className="instName">{education?.name}</p>
        {/* <p className="grade">Grade: {education?.grade}</p> */}
      </div>

      <p className="description">{education?.description}</p>

      <div className="badge-container">
        {education?.skills?.map((item, index) => (
          <div className="badge" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;

import React from "react";
import "./serviceCard.scss";
import Tilt from "react-parallax-tilt";

const ServiceCard = ({ service }) => {
  return (
    <Tilt
      className="serviceCard"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <div className="green-pink-gradient outer-card">
        <div className="mainContainer">
          <img src={service?.icon} alt={service?.title} className="iconImage" />
          <h3 className="title">{service?.title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

export default ServiceCard;

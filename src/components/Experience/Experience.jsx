import React from "react";
import "./Experience.scss";
import { experiences } from "../../constants/constants";
import SectionHeading from "../SectionHeading/SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".experience-container",
          start: "top 80%",
        },
      })
      .fromTo(
        ".experience-container .experience-main-container .box",
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
        }
      )
      .fromTo(
        ".experience-container .experience-main-container .box .experience-image",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
  });

  return (
    <section
      id="experience"
      className="padding-horizontal experience-container"
    >
      <SectionHeading
        subHeading={"What I Have Done So Far"}
        heading={"Work Experience"}
      />

      <div className="experience-main-container">
        {experiences.map((item, index) => (
          <div key={index} className="box">
            <h3>{item?.title}</h3>
            <h4>{item?.company_name}</h4>

            <div
              className="experience-image"
              style={{
                content: "",
                position: "absolute",
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                top: "0",
                left: "-70px",
                border: "2px solid var(--muted-foreground)",
                backgroundColor: "var(--bg-primary)",
                backgroundImage: `url(${item?.icon})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
            ></div>

            <ul className="details">
              {item?.points?.map((point, index) => (
                <li key={index}>
                  <p>{point}</p>
                </li>
              ))}
            </ul>

            <p className="date">{item?.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

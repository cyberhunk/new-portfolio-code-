import React from "react";
import "./About.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { services } from "../../constants/constants";
import ServiceCard from "./ServiceCard/ServiceCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 50%",
        },
      })
      .fromTo(
        ".about-container .aboutText",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".about-container .service > *",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.3,
          ease: 'back.out'
        }
      );
  });

  return (
    <section id="about" className="padding-horizontal about-container">
      <SectionHeading subHeading={"Introduction"} heading={"Overview"} />

      <p className="aboutText">
        I'm a skilled software developer with experience in  JavaScript,
        and expertise in frameworks like React, Node.js, and Express.js. I'm a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </p>

      <div className="service">
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default About;

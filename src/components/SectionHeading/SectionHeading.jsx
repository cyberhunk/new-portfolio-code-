import React, { useRef, useEffect } from "react";
import "./sectionHeading.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SectionHeading = ({ subHeading, heading }) => {
  const headingRef = useRef(null); 

  useEffect(() => {
    const el = headingRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        el.children, 
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
      );
  }, []);

  return (
    <div className="headingContainer" ref={headingRef}>
      <p className="sectionSubText">{subHeading}</p>
      <h2 className="sectionHeadText">{heading}.</h2>
    </div>
  );
};

export default SectionHeading;

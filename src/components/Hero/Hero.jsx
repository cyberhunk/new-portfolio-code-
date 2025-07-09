import React, { useEffect, useLayoutEffect } from "react";
import "./Hero.scss";
import formalLow from "../../assets/profilelow.png";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import SocialHandles from "../SocialHandles/SocialHandles";
import gsap from "gsap";
import resume from "../../assets/satyam.pdf";

const Hero = () => {
  useLayoutEffect(() => {
    const resetScroll = () => {
      setTimeout(() => {
        window.scrollTo(0, 0); // Ensure the scroll position is at the top
      }, 100); // Adding a small delay to ensure everything is rendered
    };

    window.onload = resetScroll;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"; // Disable automatic scroll restoration
    }

    const img = document.querySelector(".hero-image img");

    // Run animation only when the image is fully loaded
    img.onload = () => {
      window.scrollTo(0, 0); // Reset scroll on load

      gsap
        .timeline()
        .fromTo(
          ".hero .hero-image",
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.7,
            delay: 0.3,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".hero .top-container > *",
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.2,
          }
        )
        .fromTo(
          ".hero .right-container p",
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          }
        )
        .fromTo(
          ".hero .bottom-container .btn-container",
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
          }
        );
    };
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="hero padding-horizontal">
      <div className="container">
        <div className="hero-image">
          <img src={formalLow} alt="" />
        </div>

        <div className="right-container">
          <div className="top-container">
            <h2 className="heading-1">Hi, I'm</h2>

            <h1>Satyam Vishwakarma</h1>

            <h2>
              And I'm a &nbsp;
              <span>
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "Frontend Developer",
                    "Backend Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
          </div>

          <p>
            Driven by an insatiable curiosity and a love for all things tech, I
            am always on the lookout for new challenges to conquer. With a
            robust computer science background, I approach problems with a
            creative mindset and a commitment to excellence, striving to craft
            innovative solutions. My journey as a tech enthusiast is marked by
            continuous learning, experimentation, and a desire to make a
            meaningful impact through technology.
          </p>

          <div className="bottom-container">
            <SocialHandles />

            <div className="btn-container">
              <div className="button btn">
                <Link to="contact" smooth={true}>
                  Contact Me
                </Link>
              </div>

              <div className="button resumeBtn">
                <a
                  href={resume}
                  target="_blank"
                  className="myResume"
                  rel="noopener noreferrer"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

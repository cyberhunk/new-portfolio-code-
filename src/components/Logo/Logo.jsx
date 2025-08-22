import React from 'react'
import './Logo.scss'
// import logo from '../../assets/'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Logo = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        '.logo-container',
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
        }
      )
  });

  return (
    <div className='logo-container'>
        {/* <img src={logo} alt="logo" className='logo-icon'/> */}
        <h1 onClick={() => window.scrollTo(0, 0) } style={{ cursor: "pointer" }}>Satyam</h1>
    </div>
  )
}

export default Logo

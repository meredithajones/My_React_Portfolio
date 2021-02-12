import React from "react";
import "./hero.css";
import Background from "../Card/Images/background.jpg"

const Hero = (props) => {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${Background})` }}>
      {props.children}
    </div>
  )
} 
export default Hero;
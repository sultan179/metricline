import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/AboutUs-bg.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="video-background">
        <video autoPlay loop muted>
            <source src="/AboutUs.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div> */}
      
      <div className="about-section-text-container">
        <div><p className="primary-subheading">About Us</p></div>
        
        <h1 className="primary-heading">
         Project experience in Canada, USA, UK, Africa, South Korea, Turkmenistan, Saudi Arabia, Morocco, Malaysia, UAE, and Russia
        </h1>
        <p className="primary-text">
          At Metricline Projects, we do things different.  Taking learnings from past experiences, we have become experts at project execution and delivery.  Identifying solutions using out of the box thinking strategies, directly solving problems with fit for purpose solutions, and providing an exceptional customer experience is what we do.


        </p>
        <p className="primary-text">
         Our full discipline delivery team executes projects from cradle to grave.  Getting involved at the beginning stages, we see projects through from concept or business case development through Pre-FEED, FEED, Detailed Engineering & Procurement, to Fabrication & Equipment Supply, Construction, Commissioning, and Start up.   Striving to help our clients be successful is our main goal.  When you win, we win.
        </p>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;

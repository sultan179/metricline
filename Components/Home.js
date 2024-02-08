import React from "react";
import HomeBackground from "../Assets/home-bg.jpg";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Margin, WidthFull } from "@mui/icons-material";
const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${HomeBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    Width:'100vh'
    
  };
  
  return (
    <div className="home-container" style={containerStyle}>
      <Navbar />
      <div className="home-banner-container" >
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Industrial Facility Engineering, Design, and Project Execution
          </h1>
          <p className="primary-text">
           Evolving from an era of crude by rail to the latest technologies of solar farms by night, our team leads our clients through emerging markets and upcoming industries as the world transforms to renewable energy.  Diversifing our knowledge for the future while leveraging off our experiences from the past, Metricline Projects leads your industry in project execution, delivery, and customer experience!
          </p>
          <div className="home-buttons">
             <button className="secondary-button">
            Services <FiArrowRight />{" "}
          </button>
          <button className="secondary-button">
            Contact us <FiArrowRight />{" "}
          </button>
          </div>
         
        </div>
        {/* <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;

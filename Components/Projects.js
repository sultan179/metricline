// Projects.js
import React from 'react';
import ImageSlider from './ImageSlider';

const Projects = () => {
  const images = [
    'ProjectSlider1.PNG',
    'ProjectSlider2.PNG',
    'ProjectSlider3.PNG',
     'ProjectSlider4.PNG',
    'ProjectSlider5.PNG',
    'ProjectSlider6.PNG',
     'ProjectSlider7.PNG',
    
    // Add more image filenames as needed
  ];

  return (
    
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Projects;

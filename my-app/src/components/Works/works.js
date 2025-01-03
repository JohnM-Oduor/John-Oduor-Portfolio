import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';
import portfolio4 from '../../assets/portfolio4.png';

const Works = () => {
  // Function to handle button click
  const handleSeeMoreClick = () => {
    window.open('https://github.com/JohnM-Oduor', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id='works'>
      <h2 className='worksTitle'>My portfolio</h2>
      <span className='worksDesc'>
        I am a versatile creative professional with expertise in graphic design, web design, and music. 
        I create impactful logos, branding, and digital illustrations using Adobe tools, design intuitive 
        and create modern websites
      </span>
      <div className='worksImgs'>
        <img src={portfolio1} alt="" className="worksImg" />
        <img src={portfolio2} alt="" className="worksImg" />
        <img src={portfolio3} alt="" className="worksImg" />
        <img src={portfolio4} alt="" className="worksImg" />
      </div>
      <button className="workBtn" onClick={handleSeeMoreClick}>See More</button>
    </section>
  );
};

export default Works;

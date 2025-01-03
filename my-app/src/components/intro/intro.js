import React from 'react';
import './intro.css';
import bg from '../../assets/joh2.png';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="intoName">John </span><br/>UI/UX Designer</span>
        <p className="introPara">I have expertise in playing multiple musical instruments and a strong 
          background in web design, specializing in creating visually appealing <br/> and user-friendly websites 
          for an enjoyable browsing experience.

        </p>
        </div>
        <img src={bg} alt="profile" className="bg"></img>
    </section>
    
  )
}

export default Intro;
import React from 'react'
import './skills.css'
import MusicLogo from '../../assets/MusicLogo.webp'
import WebDesign from '../../assets/WebDesign.webp'
import GraphicDesign from '../../assets/GraphicDesign.webp'
const Skills = () => {
  return (
    <section id="skills">
       <span className="skillTitle">What i do</span>
       <span className="skillDesc">Has expertise in playing multiple musical instruments and a strong 
         background in web design, specializing in creating visually appealing and user-friendly 
        websites for an enjoyable browsing experience.I also has expertise in graphic design.
        </span>
     <div className="skillBars">
        <div className="skillBar">
          <img src={ MusicLogo} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Music</h2>
            <p> 
            I possess a strong talent and passion for playing musical instruments, 
            showcasing my dedication to creating harmonious melodies and exploring 
            the art of music. This skill reflects my commitment to 
            rhythm, creativity, and the power of sound as a form of expression.
            </p>
          </div>
        
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>I specialize in crafting visually appealing and dynamic apps by leveraging the power of HTML, CSS, 
              and JavaScript, ensuring a seamless and interactive user experience.</p>
          </div>
        
        </div>
        <div className="skillBar">
          <img src={GraphicDesign} alt="GraphicDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Graphic Design</h2>
            <p> I am skilled in creating various designs using Adobe Illustrator and Photoshop, 
              showcasing my expertise in digital artistry and creativity. This proficiency allows 
              me to craft visually stunning and impactful designs tailored to diverse needs.</p>
          </div>
        
        </div>
    </div>
    </section>
  )
}

export default Skills;
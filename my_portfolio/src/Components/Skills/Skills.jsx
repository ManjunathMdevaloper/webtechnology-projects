import React from 'react'
import '../../assets/styles/skills.css'
import web from '../../assets/images/layers.webp'
import mobile from '../../assets/images/smartphone_5536822.png'
const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Full-stack developer skilled in Java and React.js and Build dynamic web applications using Java and React.js </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={web} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>this is demo content</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={mobile} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>App Design</h2>
              <p>This is demo</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills

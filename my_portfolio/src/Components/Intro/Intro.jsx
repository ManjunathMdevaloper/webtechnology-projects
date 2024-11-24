import React from 'react'
import '../../assets/styles/intro.css'
import { Link } from 'react-scroll'
import Image from '../../assets/images/fullimage.png'
import Hire from '../../assets/images/hire.png'

const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="introContent">
            <span className='hello'> Hello,</span>
            <span className="introText">I'm <span className="introName">Manjunath</span> <br /> Full Stack Devloper</span>
            <p className='introPara'>I am a trined full stack Java devloper and React.js </p>
            <Link><button className='btn'><img src={Hire} alt='img' className='btnImg' activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}/>Hire Me</button></Link>
        </div>
        <img src={Image} alt="" className="bg" />
      </section>
    </>
  )
}

export default Intro

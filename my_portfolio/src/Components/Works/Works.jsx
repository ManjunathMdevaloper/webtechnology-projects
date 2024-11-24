import React from 'react'
import './works.css'
import Img1 from '../../assets/images/img1.webp'
import Img2 from '../../assets/images/img2.webp'
import Img3 from '../../assets/images/img3.jpg'
import Img4 from '../../assets/images/img6.jpg'

const Works = () => {
  return (
    <section id='works'>
      <h2 className="workstitle">My Portfolio</h2>
      <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>  
      <div className="workImgs">
        <img src={Img1} alt="img1" className="worksimg" />
        <img src={Img2} alt="img2" className="worksimg" />
        <img src={Img3} alt="img3" className="worksimg" />
        <img src={Img4} alt="img4" className="worksimg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  )
}

export default Works

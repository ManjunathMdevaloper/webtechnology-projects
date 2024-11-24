import React, { useRef } from 'react'
import './contacts.css'
import emailjs from '@emailjs/browser';
import gitHubImg from '../../assets/images/githubImg.png'
import linkedIn from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'

const Contacts = () => {
    let form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_m0m10gc', 'template_kwfdtaw', form.current, {
            publicKey: 'BCSWA2UBfp32yDKEs',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email Sent !')
              e.target.reset()
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id="contact">
      <div >
        <h1 className="contactPageTitle">Contact Me</h1>
        <h6 className='contactDesc'>Please fill out the form below to discuss any work opportunities.</h6>
        <form action="" className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name'name='your_name' />
            <input type="email" className="email" placeholder='Your Email' name='your_email'/>
            <textarea name="message" rows={5} placeholder='Your Message' className='msg'></textarea>
            <button className="submitBtn" type='submit' value='send'>Submit</button>
            <div className="links">
                <a href="https://www.instagram.com/mr_manjunath0/" target='_blank'><img src={instagram } alt="insta" className="link" /></a>
                <a href="https://www.linkedin.com/in/manjunath-manke-9656812b9 " target='_blank'><img src={linkedIn} alt="linkedin" className="link" /></a>
                <a href="https://github.com/ManjunathMdevaloper" target='_blank'><img src={gitHubImg} alt="github" className="link" /></a>
            </div>
        </form>
      </div>
    </section>
  )
}

export default Contacts

import React from 'react'
import "./Contact.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import contactVector from "./../../assets/contact_anime.png";
import gitHub from "./../../assets/gh.png";
import instaGram from "./../../assets/in.png";
import linkedIn from "./../../assets/li.png";
import medium from "./../../assets/me.png";
import resume from "./../../assets/resume1.png";
import web from "./../../assets/web.png";
import hashnode from "./../../assets/hashnode.png";
import { useForm, ValidationError } from '@formspree/react';
function Contact() {
  const [state, handleSubmit] = useForm("xrgjwzvr");
  if (state.succeeded){
      setTimeout(() => {
        document.getElementById("contact-form").reset();
      }, 2500)
  }
  return (
    <div className='section-container'>
      <Header 
        heading="Get in touch."
        subHeading="Interested to collaborate? Feel free to drop me an email.">
      </Header>
      <div className='contact-form-container'>
        {
            state.succeeded && 
            <div className='alert'>
                Thanks for the submission!
            </div>
        }
        <form className='contact-form' onSubmit={handleSubmit}
        id='contact-form'>
          <input type="email" className='input-box email-input' 
            placeholder='Your Email Id' name='email' required/>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          <textarea type="text" placeholder='Your Message' name='message'
            className='input-box body-input' required></textarea>
          <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
          <button type="submit" className="contact-btn"
          disabled={state.submitting}>
            Send Email
          </button>
        </form>
      </div>
      <div className='social-icons-container'>
        <a href="https://github.com/chinyeep123"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={gitHub} alt='github' loading="lazy"/>
        </a>
        <a href="https://www.linkedin.com/in/patrick-wan-149622136/" 
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={linkedIn} alt='linkedin' loading="lazy"/>
        </a>
        <a href="https://www.comecodetogether.com/" 
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={web} alt='web' loading="lazy"/>
        </a>
        <a href="https://drive.google.com/file/d/1tg0ZnVGMIXNi26glARxugfIMModyEMl3/view?usp=sharing"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={resume} alt='resume' loading="lazy" width={55}/>
        </a>
        <a href="https://medium.com/@patrickwanchinyeep"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={medium} alt='medium' loading="lazy"/>
        </a>
        <a href="https://www.instagram.com/chinyeep/"
          className='social-icon'
          target="_blank" rel="noreferrer">
          <img src={instaGram} alt='instagram' loading="lazy"/>
        </a>
      </div>
      <Footer 
        phrase="Read more "
        link="about me."
        toAddress="/about">
      </Footer>
      <div className='vector-frame'>
        <img src={contactVector}
          alt="contact"
          loading="lazy"
          className='about-vector'
        />
      </div>
    </div>
  )
}

export default Contact
//rafce
import React from 'react'
import './about.css'
import yag1 from '../../assets/yag1.jpg'
import {FaAward} from 'react-icons/fa'
import {FcReadingEbook} from 'react-icons/fc'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={yag1} alt=""></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward class='about__icon'/>
              <h5>Experience</h5>
              <small>Intern at Verisk Analytics</small>
            </article>
            <article className='about__card'>
              <FcReadingEbook class='about__icon'/>
              <h5>Education</h5>
              <small>CS undergrad</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary class='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>
          <p>
          I am a passionate and dedicated computer science student from Vasavi College of Engineering, 
          equipped with strong programming skills, a problem-solving mindset, 
          and a continuous drive for learning, seeking an opportunity as a Software Engineer to make a 
          significant impact in the industry.
          </p>
          <a href="#content" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
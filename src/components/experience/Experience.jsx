import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'; 

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills do I have?</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon" />
              <div><h4>HTML</h4></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        
        <div  className="experience__backend">
          <h3>Programming Languages and Databases</h3>
        <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>C/C++</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>SQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>Java</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>Spring/Spring Boot</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className="experience__detials-icon"/>
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
//rafce
import React from 'react'
import './contact.css'
import {AiOutlineLinkedin,AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <AiOutlineMail/>
              <h4>Email</h4>
              <h5>yagnannimma@gmail.com</h5>
              <a href="mailto:yagnannimma@gmail.com" target='_blank' rel='noreferrer'>send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin/>
              <h4>LinkedIn</h4>
              <h5>Nimma Yagnan</h5>
              <a href="https://www.linkedin.com/in/nimma-yagnan-a1a751204/" target='_blank' rel='noreferrer'>connect</a>
          </article>
          <article className='contact__option'>
              <AiOutlineWhatsApp />
              <h4>WhatsApp</h4>
              <h5>+918074488916</h5>
              <a href="https://api.whatsapp.com/send?phone=+918074488916" target='_blank' rel='noreferrer'>send a message</a>
          </article>
        </div>
        
      </div>
    </section>
  )
}

export default Contact
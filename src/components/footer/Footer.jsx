import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Yagnan</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">My Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Personal persuits</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/nimma.yagnanreddy" target='_blank' rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/yagnanreddy/" target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/YagnanNimma" target='_blank' rel="noreferrer"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Yagnan Nimma All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './header.css'
import CTA from './CTA'
import yag2 from '../../assets/yag2.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yagnan Nimma</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocial />
        <div className="me">
          <img src={yag2} alt="me"/>
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
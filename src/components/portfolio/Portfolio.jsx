import React from 'react'
import './portfolio.css'
import amazonpricetracker from '../../assets/amazonpricetracker.png';
import warehouse123 from '../../assets/warehouse123.jpeg';
import space from '../../assets/space.jpeg';
import Tindog from '../../assets/Tindog.png';
import Drums from '../../assets/Drums.jpg';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={amazonpricetracker} alt=" "/>
          </div>
          <h3>Amazon product Price Tracker</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Yagnannimma/Yagnannimma" target='_blank' rel="noreferrer" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={warehouse123} alt=" "/>
          </div>
          <h3>Ware House Monitoring</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Yagnannimma/WareHouseMonitoring" target='_blank' rel="noreferrer" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={space} alt=" "/>
          </div>
          <h3>Space Shooter Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Yagnannimma/SpaceShooterGame" target='_blank' rel="noreferrer" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Drums} alt=" "/>
          </div>
          <h3>Drums</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Yagnannimma/Drums" target='_blank' rel="noreferrer" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={Tindog} alt=" "/>
          </div>
          <h3>Tindog</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Yagnannimma/Tindog" target='_blank' rel="noreferrer" className='btn btn-primary'>Github</a>
          
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
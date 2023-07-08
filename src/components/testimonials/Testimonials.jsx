import React from 'react'
import './testimonials.css'
import chess from '../../assets/chess.jpg'
import travel from '../../assets/travel.jpg'
import swimming from '../../assets/swimming.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>I enjoy doing these</h5>
      <h2>Personal Pursuits</h2>
      <Swiper className='container testimonials__container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={chess} alt=""/>
              
            </div>
            <h5 className='client__name'>Playing Chess</h5>
              <small className='client__review'>

              </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={travel} alt=""/>
            </div>
            <h5 className='client__name'>I Love to Travel</h5>
              <small className='client__review'>
                
              </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={swimming} alt=""/>
            </div>
            <h5 className='client__name'>Swimming</h5>
              <small className='client__review'>
                
              </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
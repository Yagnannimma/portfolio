import React from 'react'
import Resume1 from '../../assets/Resume1.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={Resume1} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA
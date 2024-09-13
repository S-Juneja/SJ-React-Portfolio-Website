import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div>
      <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
      </div>
    </div>
  )
}

export default CTA

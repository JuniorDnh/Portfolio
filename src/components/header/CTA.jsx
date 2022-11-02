import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Télécharger CV</a>
        <a href='#contact' className='btn btn-primary'>Contactez-moi</a>
        </div>
  )
}

export default CTA
import React from 'react'
import './header.css'
import CTA from './CTA'


function Header() {
  return (
    <header>
        <div className="conainer header__container">
            <h5>Hello World ! Je suis</h5>
            <h1>Isaac-Junior DANHO</h1>
            <h5 className='text-light'> Développeur Front-End</h5>
            <CTA />
            
            <a href="#contact" className='scroll__down'>Défiler vers le bas</a>
        </div>
    </header>
  )
}

export default Header
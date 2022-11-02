/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {IoLogoLinkedin} from 'react-icons/io'
import {DiGithubBadge} from 'react-icons/di'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JuniorDnh</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">À propos</a></li>
      <li><a href="#experience">Expériences</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href='https://www.linkedin.com/in/isaac-junior-danho-8389861b5/'><IoLogoLinkedin/></a>
      <a href='https://github.com/JuniorDnh'><DiGithubBadge/></a>
    </div>

    <div className="footer__copyright">&copy; Danho Isaac-Junior. Tous droits réservés</div>

    </footer>
  )
}

export default Footer
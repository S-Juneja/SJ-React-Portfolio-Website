import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="javascript:void(0)" className='footer__logo' >@SannyaJuneja</a>

      <ul className='permalinks'>
        <li><a href="javascript:void(0)">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://www.linkedin.com/in/sannya-juneja-426a35327/" target="https://www.linkedin.com/in"><BsLinkedin/></a>
       <a href="https://github.com/S-Juneja" target="https://github.com"><FaGithub/></a>
       <a href="https://api.whatsapp.com/send/?phone=918168179922&text&type=phone_number&app_absent=0" target='__blank'><BsWhatsapp/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; SannyaJuneja. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer

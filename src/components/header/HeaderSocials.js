import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sannya-juneja-426a35327/" target="__blank">
        <BsLinkedin/></a>
        <a href="https://github.com/S-Juneja" target="__blank"><FaGithub/></a>
        <a href="https://t.me/sannyajuneja" target='__blank'><FaTelegram/></a>
    </div>
  )
}

export default HeaderSocials
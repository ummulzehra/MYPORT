import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return(
    <div className='header_socials'>
         <a href="https://www.linkedin.com/in/ummul-zehra-7b2528201" target="_blank"><BsLinkedin/></a>
         <a href="https://github.com/ummulzehra" target="_blank"><BsGithub/></a>
         <a href="https://instagram.com/ummulzehra3131?igshid=ZDdkNTZiNTM=" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials

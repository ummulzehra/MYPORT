import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () =>{
  return (
    <footer>
<a href="#" className='footer_logo'>Ummul</a>

<ul className='permalinks'>
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">Testimonials</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

<div className="footer_socials">
    <a href="https://facebook.com"><AiFillFacebook /></a>
    <a href="https://instagram.com"><BsInstagram /></a>
    <a href="https://twitter.com"><FaTwitterSquare /></a>
</div>

     <div className="footer_copyright">
        <small>&copy; Ummul.  All rights reserved.</small>
     </div>

    </footer>
  )
}

export default Footer

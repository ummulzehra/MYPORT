import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = ()=> {
  const form = useRef();

  const sendEmail = (e) => {
     e.preventDefault();

     emailjs.sendForm(process.env.REACT_APP_API_KEYSERV, process.env.REACT_APP_API_KEYTEMP, form.current, process.env.REACT_APP_API_KEYUSER)
      e.target.reset()
   };

  return(
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

      <div className="container contact_container">
         <div className="contact_options">

       <article className="contact_option">
       <MdEmail className='contact_option-icon'/>
       <h4>Email</h4>
       <h5>ummulzehra31@gmail.com</h5>
        <a href="mailto:ummulzehra31@gmail.com" target="_blank">Send a Message!</a>
       </article>

       <article className="contact_option">
       <FaInstagramSquare className='contact_option-icon' />
       <h4>Instagram</h4>
       <h5>@Ummul Zehra</h5>
        <a href="https://www.instagram.com/ummulzehra3131/" target="_blank">Let's Connect!</a>
       </article>

       <article className="contact_option">
       <FaWhatsappSquare className='contact_option-icon' />
       <h4>WhatsApp</h4>
       <h5>Let's WhatsApp!</h5>
        <a href="https://api.whatsapp.com/send?phone+916392300931" target="_blank">Let's Chat!</a>
       </article>

       </div>

       <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact

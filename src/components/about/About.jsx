import React from 'react'
import './about.css'
import ME from '../../assests/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {GiFullFolder} from 'react-icons/gi'

const About = ()=>{
  return(
<section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>

<div className="container about_container">
<div className="about_me">
<div className="about_me-image">
<img src={ME} alt="About Image" />
</div>
</div>
<div className="about_content">
<div className="about_cards">

<article className='about_card'>
<FaAward className='about_icon'/>
<h5>Experience</h5>
<small>1+ Years Working</small>
</article>

<article className='about_card'>
<FaUsers className='about_icon'/>
<h5>Clients</h5>
<small>10+ Active Clients</small>
</article>

<article className='about_card'>
<GiFullFolder className='about_icon'/>
<h5>Projects</h5>
<small>10+ Projects</small>
</article>
</div>
<p>Passionate, Enthusiastic and a Creative person to work with. We can spill secrets while manipulating with code..! I have great interest in Web Development. Photography and travelling are my leisure activities. You can get to know me more over Tea!!</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>

</div>
</div>
</section>
)
}

export default About

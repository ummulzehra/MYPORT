
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assests/avatar1.png'
import AVTR2 from '../../assests/avatar2.png'
import AVTR3 from '../../assests/avatar3.png'
import AVTR4 from '../../assests/avatar4.png'

import { Pagination, } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



const data = [
{
avatar:AVTR1,
name:'Tina Snow',
review:'jhshkjhasoahso  kdauwhqowur adoadoqw awheoi2uro wlhfoqwur khworyoqhd NFWROWF WLFO	WY CKjhwoufhoFPjwpoew afowh'
},
{
avatar:AVTR2,
name:'Shatta Wale',
review:'jhshkjhasoahso  kdauwhqowur adoadoqw awheoi2uro wlhfoqwur khworyoqhd NFWROWF WLFO	WY CKjhwoufhoFPjwpoew afowh'
},
{
avatar:AVTR3,
name:'Kwame Harry',
review:'jhshkjhasoahso  kdauwhqowur adoadoqw awheoi2uro wlhfoqwur khworyoqhd NFWROWF WLFO	WY CKjhwoufhoFPjwpoew afowh'
},
{
avatar:AVTR4,
name:'Brian Peter',
review:'jhshkjhasoahso  kdauwhqowur adoadoqw awheoi2uro wlhfoqwur khworyoqhd NFWROWF WLFO	WY CKjhwoufhoFPjwpoew afowh'
},

]


const Testimonials = () =>{
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

   <Swiper className="container testimonials_container"
      modules={[ Pagination,]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
   {
     data.map(({avatar, name, review}, index)=> {
       return(
       <SwiperSlide key={index}>
       <div className="testimonial">
          <div className="client_avatar">
          <img src={avatar} alt="Avatar"/>
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>{review}</small>
          </div>
       </SwiperSlide>
     )
     })
   }
   </Swiper>
    </section>
  )
}

export default Testimonials

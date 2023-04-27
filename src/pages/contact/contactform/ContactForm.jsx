import React from 'react'

import './ContactForm.css'
import mail from '../../../images/mail.svg'
import phone from '../../../images/phone.svg'
import location from '../../../images/location.svg'

const ContactForm = (props) => {
  return ( 
      <div className="contactContainer">
 
          <h1 className='contactHeaderText'>
           Ready to elevate your space with our products? <br />
           Reach out to us and let's get started.
          </h1> 

        <div className="contactEquipment">
          <div className="equipmentDIv">
           <img src={phone} alt="phone" className='contactIcon' />
           <p className="equipmentText">+993 64 879779</p>
          </div>

          <div className="equipmentDIv">
           <img src={location} alt="location" className='contactIcon' />
           <p className="equipmentText">Ashgabat, Halmammedov str. 24</p>
          </div>

          <div className="equipmentDIv">
           <img src={mail} alt="mail" className='contactIcon' />
           <p className="equipmentText">info@textile-opt-tm.org</p>
          </div>
        </div>

        <div className="contactForm">
          <div className="contactformDIv">
            <input type="text" placeholder='Full name' className='contactInput' />
            <input type="text" placeholder='Phone number' className='contactInput' />
            <input type="email" placeholder='Email address' className='contactInput' />
            <textarea  type="text" placeholder='Your message' className='contactMessage' />
            <button className="ContactButton"><span className="contactbutonText">Send Message</span></button>
          </div>

        </div>
     </div> 
  )
}

export default ContactForm

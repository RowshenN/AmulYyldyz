import React from 'react'

import './Contact.css'
import Navigation from '../../components/navigation/Navigation'
import ContactForm from './contactform/ContactForm'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navigation />
        <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
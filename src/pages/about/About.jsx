import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './About.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Part1 from './part1/Part1'
import Part2 from './part2/Part2'
import Part3 from './part3/Part3'
import Part4 from './part4/Part4'
AOS.init({duration: 700, delay: 150})
const About = () => {
  return ( 
    <div>
      <Navigation />

      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />

      <Footer />
    </div>
  )
}

export default About

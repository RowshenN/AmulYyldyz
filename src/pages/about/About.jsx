import React from 'react'

import './About.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Part1 from './part1/Part1'
import Part2 from './part2/Part2'
import Part3 from './part3/Part3'

const About = () => {
  return ( 
    <div>
      <Navigation />

      <Part1 />
      <Part2 />
      <Part3 />

      <Footer />
    </div>
  )
}

export default About

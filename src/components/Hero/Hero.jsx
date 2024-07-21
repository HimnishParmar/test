import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Succesfully Mentored</h1>
        <p>Research Scholars & Authors across the Globe</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

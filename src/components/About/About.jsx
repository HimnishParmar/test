import React from 'react'
import './About.css'
import about_img from '../../Assets/about.jpg'
import play_icon from '../../Assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='abt-img'/>
        <img src={play_icon} alt="" className='play_icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT PHD ASSISTANCE</h3>
        <h2>Find More About Our Quality Procedure</h2>
        <p>PhD Assistance, is world’s reputed academic guidance provider for the past 15 years have guided more than 4,500 Ph.D. scholars and 10,500 Masters Students across the globe. We support students, research scholars, entrepreneurs, and professionals from various organizations in providing consistently high-quality writing and data analytical services every time</p>
        <p>To achieve this vision, PhD Assistance approaches each research work through unique methodology and after a lot of discussion between research expertise, professors, data management experts, industry professionals and language & technical editors; we develop the research work.</p>
        <p>Our team of research expertise is providing this research support for the past 15 years. With an excellent infrastructure equipped with 24-hours power back-up and high-speed internet connectivity, we have access to online databases for accessing the best research sources all over the world.</p>
      </div>
    </div>
  )
}

export default About

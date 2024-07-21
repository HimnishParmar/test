import React from 'react'
import './Mentor.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Mentor = () => {
  return (
    <div className='mentorcontainer'>
        <div className='mentor-text'>
            <h1>Our Mentors</h1>
            <p>Intellectual, Passionate, and Highly Collaborative.</p>
            <button className='btn_1'>Learn More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Mentor

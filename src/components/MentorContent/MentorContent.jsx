import React from 'react'
import './MentorContent.css'
import home_1 from '../../Assets/home1.jpg'
import home_2 from '../../Assets/home2.jpg'
import home_3 from '../../Assets/home3.jpg'

const MentorContent = () => {
  return (
    <div className='mentorcontent'>
      <div className="content">
        <div className="contentinner">
            <img src={home_1} alt="" />
            <div className="mentorcaption">
                Research Mentoring, Data Analytics & Consulting Service
            </div>
        </div>
        <p className='underimgtextmentor'>For students,Research Scholars,Authors & Publishers across the domain</p>
      </div>
      <div className="content">
        <div className="contentinner">
            <img src={home_3} alt="" />
            <div className="mentorcaption">
                Our Core Lies in Tutoring and Mentoring
            </div>
        </div>
        <p className='underimgtextmentor'>We translate our Knowlegde & Skills to students across the world</p>
      </div>
      <div className="content">
        <div className="contentinner">
            <img src={home_2} alt="" />
            <div className="mentorcaption">
                Highly commendable Phd Research
            </div>
        </div>
        <p className='underimgtextmentor'>We support you at every stage of your research to help you deliver a high-quality thesis or dissertation.</p>
      </div>
    </div>
  )
}

export default MentorContent

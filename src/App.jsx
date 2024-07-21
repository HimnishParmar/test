import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import Mentor from './components/Mentor/Mentor'
import MentorContent from './components/MentorContent/MentorContent'
import Guarantee from './components/Guarantees/Guarantee'
import GuaranteeContent from './components/GuaranteeContent/GuaranteeContent'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Insight from './components/Insight/Insight'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Why Phd Assistance?' title='A Trusted & Academically Sound Mentors representing various Countries'/>
        <Programs/>
      </div>
      <Mentor/>
      <MentorContent/>
      <Guarantee/>
      <Title subTitle='OUR PROCESS' title=''/>
      <GuaranteeContent/>
      <About/>
      <Title subTitle='TESTIMONIALS' title='What Client Says...'/>
      <Testimonials/>
      <Title subTitle='INSIGHTS' title=''/>
      <Insight/>
      <Title subTitle='CONTACT US' title=''/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

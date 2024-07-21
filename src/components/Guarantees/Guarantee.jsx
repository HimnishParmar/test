import React from 'react'
import './Guarantee.css'
import dark_arrow from '../../Assets/dark-arrow.png'

const Guarantee = () => {
  return (
    <div className='guaranteescontainer'>
      <div className='guarantee-text'>
            <h1>Our Guarantees</h1>
            <p>We deliver, What We Promise</p>
            <button className='btn_2'>Learn More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Guarantee

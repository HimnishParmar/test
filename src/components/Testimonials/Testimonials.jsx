import React from 'react'
import Quote from '../../Assets/blockquote.svg'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'
import './Testimonials.css'



const Testimonials = () => {
  return (
    <section className='testimonial-container'>
      <div className="slider-container">
        <blockquote>
          <img src={Quote} className='quote top-quote' alt="quote" />
          <img src={Quote} className='quote bottom-quote' alt="quote" />
        </blockquote>
        <Splide options={{ perPage : 1, type: 'loop', speed: 2000, autoplay: true}}>
          <SplideSlide>
          <img src={user_1} alt="" className='review-img'/>
          <div className="content">
            <p className='text'>l'd want to express my gratitude to Phdassistance for their invaluable assistance in developing our programme. Everyone
            was courteous, competent, and diligent.</p>
            <div className="info">
              <div className="rating">
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
              </div>
              <div className="user">
                <p>Kalwn ada</p>
              </div>
            </div>
          </div>
          </SplideSlide>
          <SplideSlide>
            <img src={user_2} alt="" className='review-img'/>
          <div className="content">
          <div className="text">
            <p>I was blown away by the ease and speed with which I was able to place my order, as well as the speed with which it was
            sent and arrived. The fabric poster was excellent.</p>
            <div className="info">
              <div className="rating">
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
              </div>  
              <div className="user">
                <p>Klein Cooper</p>
              </div>
            </div>
          </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <img src={user_3} alt="" className='review-img'/>
          <div className="content">
          <div className="text">
            <p>l'm a PCC undergraduate who had to do a scientific poster presentation. Your templates were beautiful and easy to use. I
            had no issue creating, altering, or changing the entire thing.</p>
            <div className="info">
              <div className="rating">
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
              </div>  
              <div className="user">
                <p>Ana de armas</p>
              </div>
            </div>
          </div>
          </div>
          </SplideSlide>
          <SplideSlide>
          <img src={user_4} alt="" className='review-img'/>
          <div className="content">
          <div className="text">
            <p>I was struggling to identify a research problem for my Ph.D. dissertation until I sought assistance from PhD
                  Dissertation Problem ldentification Services</p>

            <div className="info">
              <div className="rating">
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
                <span className='star'>&#9733;</span>
              </div>  
              <div className="user">
                <p>Meywatt Cline</p>
              </div>
            </div>
          </div>
          </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  )
}

export default Testimonials

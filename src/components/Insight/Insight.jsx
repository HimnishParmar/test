import React from 'react'
import './Insight.css'
import insight_1 from '../../Assets/insight_1.jpg'
import insight_2 from '../../Assets/insight_2.jpg'
import insight_3 from '../../Assets/insight_3.jpg'
import insight_4 from '../../Assets/insight_4.jpg'

const Insight = () => {
  return (
    <div className='insight'>
      <div className="insightcontent">
        <div className="insightinner">
            <img src={insight_1} alt="" />
            <div className="insightcaption">
                <h3>Trust,Quality & Customer Care</h3>
                <button className='insight-btn'>WHO WE ARE?</button>
            </div>
        </div>
      </div>
      <div className="insightcontent">
        <div className="insightinner">
            <img src={insight_2} alt="" />
            <div className="insightcaption">
                <h3>Trust,Quality & Customer Care</h3>
                <button className='insight-btn'>BROUCHER</button>
            </div>
        </div>
      </div>
      <div className="insightcontent">
        <div className="insightinner">
            <img src={insight_3} alt="" />
            <div className="insightcaption">
                <h3>Improve your book knowledge</h3>
                <button className='insight-btn'>BLOG</button>
            </div>
        </div>
      </div>
      <div className="insightcontent">
        <div className="insightinner">
            <img src={insight_4} alt="" />
            <div className="insightcaption">
                <h3>Phd Assistance help guidance</h3>
                <button className='insight-btn'>HELP GUIDE</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Insight

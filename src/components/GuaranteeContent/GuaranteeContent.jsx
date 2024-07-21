import React from 'react'
import './GuaranteeContent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const GuaranteeContent = () => {
  return (
    <div className='guaranteecontent'>
      {/* <div className="content1">
      <h1>Our Process</h1>
      </div> */}
      <div className="content2">
            <div className="point">
                <div className="icon">
                <FontAwesomeIcon icon={faClockRotateLeft} className='img'/>
                <div className="icontext">
                    <h3>On Time Delivery</h3>
                    <p>Thereby you can be assured of your submission</p>
                </div>
                </div>
            </div>
            <div className="point">
                <div className="icon">
                <FontAwesomeIcon icon={faThumbsUp} className='img' />
                <div className="icontext">
                    <h3>100% Originality Guarantee</h3>
                    <p>Our writing undergoes through plagiarism checks to ensure 95-100% originality on delivery.</p>
                </div>
                </div>
            </div>
        {/* <div className="content3"> */}
            <div className="point">
                <div className="icon">
                <FontAwesomeIcon icon={faBook} className='img' />
                <div className="icontext">
                    <h3>Unlimited Revisions</h3>
                    <p>We offer unlimited free revisions, unlike competitors who charge.</p>
                </div>
                </div>
            </div>
            <div className="point">
                <div className="icon">
                <FontAwesomeIcon icon={faShare} className='img' />
                <div className="icontext">
                    <h3>Unlimited Revisions</h3>
                    <p>We offer unlimited free revisions, unlike competitors who charge.</p>
                </div>
                </div>
            </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default GuaranteeContent

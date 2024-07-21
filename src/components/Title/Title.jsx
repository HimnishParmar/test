import React from 'react'
import './Title.css'

const Title = ({subTitle,title}) => {
  return (
    <div>
        <div className='title'>
            <h1>{subTitle}</h1>
            <p>{title}</p>
        </div>  
    </div>
  )
}

export default Title

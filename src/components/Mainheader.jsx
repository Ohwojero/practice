import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../src/images/image1.avif'
import './Mainheader.css'
const Mainheader = () => {
  return (
    <header className='main-header'>
      <div className='container main-header-container'>
        <div className='main-left'>
          <h4>#100daysofWork</h4>
          <h1>Join The Legend OF The Fitess World</h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magnam necessitatibus eum asperiores saepe placeat ut vero numquam
            voluptates consequuntur explicabo aliquid quidem, molestias corporis optio fugit sit earum? Odio, dignissimos!</p>
          <div className='btn'>
            <Link to="/plan">Get Started</Link>
          </div>
        </div>
        <div className='main-right'>
          <div className='main-circle'></div>
          <div className='main-image'>
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Mainheader
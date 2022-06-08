import React from 'react'
import regalo from '../assets/images/regalo.jpeg'
import '../components/Gallery.css';
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
        
          <div className='col-md-5 mb-30'>
          
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={regalo} className='imagen' alt='' />{' '}
                </div>
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Thank you.</h4>
            <h3 className='oliven-story-title'>Regalo</h3>
            <p>
              Como regalo de boda te pedimos que nos ayudes a pagar la fiesta abonando una tarjeta de
              $5500 por persona.
            </p>
            <p>
              CBU: 2850133440095426630898
            </p>
            <p>
              Alias: leoyandi
            </p>
            <h4>Sep 3, 2022</h4>
            <p>
              Muchas gracias! ♥️
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story

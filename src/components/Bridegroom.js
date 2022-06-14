import React from 'react'
import gorda from '../assets/images/gorda.jpg'
import bici from '../assets/images/bici.jpg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={gorda} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Andi <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>La Novia</span>
                  <p>
                    "Estoy cumpliendo un sueño y me gustaria hacerlo realidad
                    con ustedes, gracias por estar siempre y espero con todo el corazon
                    puedan asistir"
                  </p>
                  <div className='social'>
                    <div className='full-width'>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-facebook'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-twitter'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-instagram'></i>{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={bici} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Leo <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>El novio</span>
                  <p>
                  "Muchas gracias por todo el cariño, 
                    espero puedan asistir a la fiesta, seguro la vamos a pasar muy bien.
                    Los espero!"
                  </p>
                  <div className='social'>
                    <div className='full-width'>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-facebook'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-twitter'></i>{' '}
                      </a>
                      <a href='#0' className='icon'>
                        {' '}
                        <i className='ti-instagram'></i>{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Nos casamos!</h3>
            <h4 className='oliven-couple-subtitle'>
              03 de septiembre, 2022 — Salta, Argentina
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom

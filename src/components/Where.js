import React from 'react'
import fatima from '../assets/images/fatima.jpeg'
import medi from '../assets/images/medi.jpg'
import civil from '../assets/images/civil.jpeg'
import '../components/Gallery.css';
function Where() {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Informacion</span>
            <h2 className='oliven-title'>Cuando & Donde</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <a href='https://www.google.com/maps/place/Parroquia+de+Nuestra+Se%C3%B1ora+de+F%C3%A1tima/@-24.7883984,-65.4991743,12z/data=!4m9!1m2!2m1!1svicaria+fatima+salta!3m5!1s0x941bc24cba24e7a7:0x1f458b11e4ea77cf!8m2!3d-24.7883984!4d-65.4291365!15sChR2aWNhcmlhIGZhdGltYSBzYWx0YZIBD2NhdGhvbGljX2NodXJjaA' target='_blank' rel='noopener noreferrer'>
              <div className='whenwhere-img'>
                {' '}
                <div className="photos">
                  <img src={fatima} alt='' /></div>
              </div>
            </a>
            <div className='content'>
              <h5>Misa</h5>
              <p>
                <i className='fa fa-calendar' />
                <i className='ti-location-pin'></i>
                Parroquia nuestra señora de Fatima
                <br />
                Caseros 1904
              </p>
              <p>
                <i className='ti-time'></i> <span>20:00pm – 21:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <a href='https://www.google.com/maps/place/Eventos+Mediterr%C3%A1neo/@-24.7385327,-65.4199248,15z/data=!3m1!4b1!4m5!3m4!1s0x941bc16c12a2b295:0xf1c4ff002463ebc1!8m2!3d-24.7385524!4d-65.4111915' target='_blank' rel='noopener noreferrer'>
              <div className='whenwhere-img'>
                {' '}
                <div className="photos">
                  <img src={civil} alt='' /></div>
              </div>
            </a>
            <div className='content'>
              <h5>Boda civil</h5>
              <p>
                <i className='ti-direction-alt'></i> Luego de la boda los invitamos a presenciar
                la union civil.
              </p>
              <p>
                <i className='ti-time'></i> <span>21:30pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <a href='https://www.google.com/maps/place/Eventos+Mediterr%C3%A1neo/@-24.7385327,-65.4199248,15z/data=!3m1!4b1!4m5!3m4!1s0x941bc16c12a2b295:0xf1c4ff002463ebc1!8m2!3d-24.7385524!4d-65.4111915' target='_blank' rel='noopener noreferrer'>
              <div className='whenwhere-img'>
                {' '}
                <div className="photos">
                  <img src={medi} alt='' /></div>
              </div>
            </a>
            <div className='content'>
              <h5>Fiesta</h5>
              <p>
                <i className='ti-location-pin'></i> Eventos mediterraneo
                <br />
                Av. Robustiano Patrón Costas 1023
              </p>
              <p>
                <i className='ti-time'></i> <span>22:00pm - Hasta que salgo el sol</span>
              </p>
              <p>
                <i className='fa fa-calendar' />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where

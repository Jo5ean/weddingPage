import React from 'react'
import fatima from '../assets/images/fatima.jpeg'
// import emediterraneo from '../assets/images/emediterraneo.jpeg'
import regalo from '../assets/images/regalo.jpeg'
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
            <div className='whenwhere-img'>
              {' '}
              <div className="photos">
                <img src={fatima} alt='' /></div>
            </div>
            <div className='content'>
              <h5>Misa</h5>
              <p>
                <i className='fa fa-calendar' />
                <i className='ti-location-pin'></i> Esquina Ayacucho y Caceros
                <br />


              </p>
              <p>
                <i className='ti-time'></i> <span>12:00am – 13:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <div className="photos">
                <img src={fatima} alt='' /></div>
            </div>
            <div className='content'>
              <h5>Fiesta</h5>
              <p>
                <i className='ti-location-pin'></i> Eventos mediterraneo
              </p>
              <p>
                <i className='ti-time'></i> <span>14:00pm</span>
              </p>
              <p>
                <i className='fa fa-calendar' />
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <div className="photos">
                <img src={regalo} alt='' /></div>
            </div>
            <div className='content'>
              <h5>Regalos</h5>
              <p>
                <i className='ti-direction-alt'></i> Si queres hacernos un regalo te dejamos la siguiente infomracion:
              </p>
              <p>
                <i className='ti-direction'></i> CBU:
                2850133440095426630898
                Alias: leoyandi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where

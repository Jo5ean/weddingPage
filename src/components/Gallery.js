import React from 'react'
import chanchines from '../assets/images/chanchines.jpeg'
import chanchi2 from '../assets/images/chanchi2.jpg'
import chanchi3 from '../assets/images/chanchi3.jpg'
import chanchi4 from '../assets/images/chanchi4.jpg'
import chanchi5 from '../assets/images/chanchi5.jpg'
import chanchi6 from '../assets/images/chanchi6.jpg'
import '../components/Gallery.css';
function Gallery () {
  return (
    <div id='gallery' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 widht:100%'>
            <span className='oliven-title-meta'>Fotos</span>
            <h2 className='oliven-title'>Nuestras Memorias</h2>
          </div>
        </div>
      </div>
      
      <div className='container'>
        <div className='row gallery-filter mt-5 img-fluid '>
          <div className='col-md-4 gallery-item ceremony '>
            
              <div className='gallery-box'>
              
                <div className='gallery-img img-fluid rounded img-thumbnail' >
                  {' '}
                  <div className="photos">
                  <img
                    src={chanchines}
                    className='img-fluid  '
                    alt=''
                  /></div>{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Ceremony</h4>
                </div>
              
              </div>
            
          </div>
          <div className='col-md-4 gallery-item party'>
            
              <div className='gallery-box'>
                <div className='gallery-img img-fluid rounded img-thumbnail'>
                  {' '}
                  <div className="photos">
                  <img
                    src={chanchi2}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  /></div>{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Party</h4>{' '}
                </div>
              </div>
            
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            
              <div className='gallery-box'>
                <div className='gallery-img img-fluid rounded img-thumbnail'>
                  {' '}
                  <div className="photos">
                  <img
                    src={chanchi3}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  /> </div>{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Ceremony</h4>{' '}
                </div>
              </div>
            
          </div>
          <div className='col-md-4 gallery-item party'>
            
              <div className='gallery-box'>
                <div className='gallery-img img-fluid rounded img-thumbnail'>
                  {' '}
                  <div className="photos">
                  <img
                    src={chanchi4}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  /></div>{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Party</h4>{' '}
                </div>
              </div>
            
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            
              <div className='gallery-box'>
                <div className='gallery-img img-fluid rounded img-thumbnail'>
                  {' '}
                  <div className="photos">
                  <img
                    src={chanchi5}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  /></div>{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Ceremony</h4>{' '}
                </div>
              </div>
           
          </div>
          <div className='col-md-4 gallery-item party'>
            
              <div className='gallery-box'>
                <div className='gallery-img img-fluid rounded img-thumbnail'>
                  {' '}
                  <div className="photos">
                  <img
                    src={chanchi6}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  /></div>{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Wedding Party</h4>{' '}
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Gallery

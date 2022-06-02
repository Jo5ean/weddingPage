import React from 'react'
import chanchi3 from '../assets/images/chanchi3.jpg'
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
                <img src={chanchi3} className='imagen' alt='' />{' '}
                </div>
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Nuestra historia</h3>
            <p>
              Todo empezo cuando coincidimos para hacer unos trabajos practicos
              para la facultad, ambos pensamos "no se va a fijar en mi", sin embargo
              pegamos onda, nos fuimos a cazar muchos zuris, perdices y vivimos felices
              alpistes, necesito que me digas vos que bosta poner aca jajaja.
            </p>
            <p>
              Nos ecanta ir a chamarra, no me encanta tanto errar los tiros
              pero la vizcacha se movio muy rapido
            </p>
            <p>
              Cuando estaba en la parte de atras de la camioneta, el pelado me rompia las bolas
              que tire, yo sabia que no tenia que tirar por que no se tira al tun tun.
            </p>
            <h4>Sep 3, 2022, (cuando dijeron que si?)!</h4>
            <p>
              y bueno nada, el josean nos hizo la pagina esta, esta re copada.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story

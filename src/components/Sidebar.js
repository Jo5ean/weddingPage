import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
              Chanchina <small>&</small> Chanchi
            </span>
            <h6>03.08.2022</h6>
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Pareja</a>
            </li>
            <li>
              <a href='#story'>Nuestra historia</a>
            </li>
            <li>
              <a href='#organization'>Organizacion</a>
            </li>
            <li>
              <a href='#gallery'>Fotos</a>
            </li>
            <li>
              <a href='#whenwhere'>Cuando & Donde</a>
            </li>
            <li>
              <a href='#rsvp'>R.S.V.P</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Chanchina & Chanchi
            <br />
            3 Septiembre 2022, Salta, Argentina
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

import React, { useEffect } from 'react'

function Countdown () {
  useEffect(() => {
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
            //aca pones el dia del casamiento
      let elDia = "Sep 3, 2022 00:00:00",
          countDown = new Date(elDia).getTime(),
          x = setInterval(function() {    
            let now = new Date().getTime(),
                distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            if (distance < 0) {
              let headline = document.getElementById("headline"),
                  countdown = document.getElementById("countdown"),
                  content = document.getElementById("content");
    
              headline.innerHTML = "It's our wedding!";
              countdown.style.display = "none";
              content.style.display = "block";
    
              clearInterval(x);
            }
            //seconds
          }, 0);
          return null;
      }());
  }, [])
  return (
    <div
      id='countdown'
      className='section-padding bg-img bg-fixed'
      data-background='images/banner-1.jpg'
    >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h4>Inicia nuestra familia en</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              <li>
                <span id='days'></span>Días
              </li>
              <li>
                <span id='hours'></span>Horas
              </li>
              <li>
                <span id='minutes'></span>Minutos
              </li>
              <li>
                <span id='seconds'></span>Segundos
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown

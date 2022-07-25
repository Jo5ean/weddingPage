import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { storage } from './firebase/firebaseConfig'
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from 'uuid'
import toast from 'react-hot-toast';
import "../index.css"

function RSVP() {


  //subir archivo
  const [fileUpload, setFileUpload] = useState(null);
  const uploadImage = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `Recibos de pagos/${fileUpload.name + v4()} `);
    uploadBytes(fileRef, fileUpload).then(() => {
      
    });
  }

  //envio de emails
  const formRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('leo&andi', 'template_6n7b3ii', formRef.current, 'QPjdY378W5ZGzBQvO')
      .then((result) => {
        console.log(result.text);
        toast('Reserva realizada!');
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Asistiras?</span>
            <h2 className='oliven-title text-center'>R.S.V.P</h2>
            <br />
            {/* a partir de aca arrancamos el proceso de RSVP method='post' */}
            <form className='row' ref={formRef} onSubmit={handleSubmit}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='user_name'
                    className='form-control'
                    placeholder='Nombre'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label>Phone</label>
                  <input
                    type='number'
                    name='user_email'
                    className='form-control'
                    placeholder='Telefono'
                  // aca va si es que va a ser necesario, o podemos cambiar por numero de telefono
                  />{' '}
                </div>
              </div>
              {/* <div className='col-md-12'>
                <div className='form-group'>
                  <label>Attendance</label>
                  <input
                    type='text'
                    name='user_attendance'
                    className='form-control'
                    placeholder='Quienes asistiran?'
                  />{' '}
                </div>
              </div> */}
              <div className='col-md-12'>
                <div className='form-group'>
                  <label>Message</label>
                  <textarea
                    name='user_message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Si tienes alguna pregunta o comentario, escríbelo aquí'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <label>Document</label>
                  <h5>Si es posible, subi un archivo con la comprobacion de la transferencia, gracias! ♥️</h5>
                  <input type="file" onChange={(el) => { setFileUpload(el.target.files[0]) }} />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='Send' onClick={uploadImage} />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default RSVP

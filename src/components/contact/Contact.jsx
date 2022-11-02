import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedinIn} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fgn88cu', 'template_fdxylf4', form.current, 'YoWTRaoz7pqdpxEkC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Prendre contact</h5>
      <h2>Contactez-moi !</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>danho.isaacjunior@gmail.com</h5>
            <a target='_blank' href='mailto:danho.isaacjunior@gmail.com' rel="noreferrer">Envoyez un message</a>
          </article>
          <article className='contact__option'>
            <FaLinkedinIn className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Isaac-Junior Danho</h5>
            <a target='_blank' href="https://www.linkedin.com/messaging/thread/new/" rel="noreferrer">Envoyez un message</a>
          </article>
        </div>
        {/*Fin de OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom et Prénom' required/>
          <input type="email" name='email' placeholder='Votre email' required/>
          <textarea type="message" name='message' rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiTelegramLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ta0d9aa', 'template_3kd59aa', form.current, {
          publicKey: 'Sep_oDoetptttj4M2',
        })
        .then((result) => {
            console.log(result.text);
        }, (error) => {
              console.log(error.text);
        });
        
        e.target.reset();
    };
  
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>junejasannya22@gmail.com</h5>
            <a href="mailto:junejasannya22@gmail.com" target='__blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiTelegramLine  className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>+91</h5>
            <a href="https://t.me/sannyajuneja" target='__blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91</h5>
            <a href="https://api.whatsapp.com/send/?phone=918168179922&text&type=phone_number&app_absent=0" target='__blank'>
            Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name="name" placeholder='Your Full Name' required/>
          <input type='email' name="email" placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

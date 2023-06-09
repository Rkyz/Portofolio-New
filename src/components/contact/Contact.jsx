import React from 'react'
import '../contact/Contact.css'
import Foto from '../../assets/smile.png'

const Contact = () => {
  return (
    <div>
        <section id='contact'>
          <div className="container-contact">
            <div className="img-contact">
              <img src={Foto} alt="" srcset="" />
            </div>
            <div className="header-contact">
              <h1>Talk With Me</h1>
              <p>I'm happy to talk to you.</p>
            </div>
            <div className="my-form">
              <form action="">
                <label htmlFor="name">Name</label>
                <input type="name" />
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="message">Message</label>
                <textarea  id="" cols="30" rows="10"></textarea>
              </form>
              <button className='btn btn-primary btn-contact'>Next</button>
            </div>
          </div>
            <section className="shadow-circle-contact"></section>
        </section>
    </div>
  )
}

export default Contact

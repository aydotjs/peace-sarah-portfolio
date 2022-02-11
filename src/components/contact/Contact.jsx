import React from 'react'
import {useState} from 'react'
import './contact.scss'
import Shake from "../../img/shake.svg"
export default function Contact() {
  const [message, setMessage] = useState(false)

  const  handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
    return (
        <div className='contact' id='contact'>
          <div className="left">
            <img src={Shake} alt="" />
          </div>
          <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Email' />
              <textarea placeholder="Message"></textarea>
              <button type='submit'>Send</button>
              {message && <span>Thanks I will Reply ASAP :) </span>}
            </form>
          </div>
        </div>
    )
}

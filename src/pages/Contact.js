import React from "react";
import './Contact.css'
export default function Home() {
  return (

      <div className="contact">
        <div className='title'>
          <h1>Let's talk!</h1>
          <i className="far fa-comment"></i>
        </div>
        <div>
          <form action="https://formspree.io/f/myyldngz" method="post" >
            <input type='text' placeholder='Full name' />
            <input type='email'  name="_replyto" placeholder='Email'/>
            <textarea  placeholder='Write your message here'style={{height:150}}name="message" />
            <input type='submit'  value='Submit' />
          </form>
        </div>


      </div>
  
  );
}
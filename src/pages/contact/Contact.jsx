import React from "react";
import "./Contact.css";
import { TEXT } from "../../constants/ProjectList";

export default function Home() {
  const { title, action } = TEXT.CONTACT;
  return (
    <div className="contact">
      <div className="title">
        <h1>{title}</h1>
        <i className="far fa-comment"></i>
      </div>
      <div>
        <form action="https://formspree.io/f/myyldngz" method="post">
          <input type="text" name="full_name" placeholder="Full name" />
          <input type="email" name="_replyto" placeholder="Email" />
          <textarea
            placeholder="Write your message here"
            style={{ height: 150 }}
            name="message"
          />
          <input type="submit" value={action} />
        </form>
      </div>
    </div>
  );
}

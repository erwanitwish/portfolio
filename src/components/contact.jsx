import React from "react";

export default function Contact({ ancre }) {
  return (
    <div id={ancre} className="contact">
      <div className="my-contact">Contact</div>
      <div className="contact-element">Erwan Quillec</div>
      <div className="contact-element">Nantes</div>
      <div className="contact-element">06 61 37 60 63</div>
      <div className="contact-element mail">quillec.erwan@gmail.com</div>
    </div>
  );
}

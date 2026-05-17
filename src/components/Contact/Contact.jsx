import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h5q0tma",
      "template_iyzepog",
      form.current,
      "gzdQQUCjOqi5w6Mys"
    )
    .then(() => {
      alert("Message Sent Successfully!");
    })
    .catch(() => {
      alert("Failed to send message");
    });

    e.target.reset();
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-title-container">
        <span className="section-watermark">Connect</span>
        <div className="section-title">
          <div className="section-title-line"></div>
          Get In Touch
        </div>
      </div>
      <div className="contact-container">
        
        <div className="contact-left">
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:nagaratnakarmandadi@gmail.com">nagaratnakarmandadi@gmail.com</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>Kakinada, Andhra Pradesh, India</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaLinkedin /></div>
              <div>
                <h4>LinkedIn</h4>
                <p><a href="https://linkedin.com/in/nagaratnakar-mandadi" target="_blank" rel="noreferrer">linkedin.com/in/nagaratnakar-mandadi</a></p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaGithub /></div>
              <div>
                <h4>GitHub</h4>
                <p><a href="https://github.com/nagaratnakarmandadi" target="_blank" rel="noreferrer">github.com/nagaratnakarmandadi</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-right">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send Message &rarr;
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}

export default Contact;
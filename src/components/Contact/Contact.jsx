import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      "service_h5q0tma",
      "template_iyzepog",
      form.current,
      "gzdQQUCjOqi5w6Mys"
    )
    .then(() => {
      setToast({ show: true, message: "Message Sent Successfully! 🚀", type: "success" });
      setIsSending(false);
      setTimeout(() => {
        setToast({ show: false, message: "", type: "" });
      }, 4000);
    })
    .catch(() => {
      setToast({ show: true, message: "Failed to send message. Please try again! ❌", type: "error" });
      setIsSending(false);
      setTimeout(() => {
        setToast({ show: false, message: "", type: "" });
      }, 4000);
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
      <p className="contact-subtitle">
        Feel free to connect! Whether you have an exciting project idea, a job opportunity, or just want to say hello, my inbox is always open. I will do my best to get back to you as soon as possible!
      </p>
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
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={isSending} 
              style={{ width: "100%", justifyContent: "center", opacity: isSending ? 0.75 : 1, cursor: isSending ? "not-allowed" : "pointer" }}
            >
              {isSending ? "Sending Message... 🚀" : "Send Message →"}
            </button>
          </form>
        </div>
        
      </div>

      {/* Floating Glassmorphic Toast Notification */}
      {toast.show && (
        <div className={`toast-notification ${toast.type}`}>
          <span className="toast-message">{toast.message}</span>
          <button 
            type="button" 
            className="toast-close" 
            onClick={() => setToast({ show: false, message: "", type: "" })}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}

export default Contact;
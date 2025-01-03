import React, { useRef } from 'react';
import './contact.css';
import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";
import emailjs from '@emailjs/browser';

const Contact = () => {
  // Function to handle GitHub icon click
  const handleGitHubClick = () => {
    window.open('https://github.com/JohnM-Oduor', '_blank', 'noopener,noreferrer');
  };

  // Function to handle Netlify icon click
  const handleNetlifyClick = () => {
    window.open('https://app.netlify.com/start/repos', '_blank', 'noopener,noreferrer'); // Replace with your Netlify link
  };

  // Form reference
  const form = useRef();

  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8hui83r', 'template_lhh96ds', form.current, 'X_oC0DXIEeHNiSnym')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below we discuss any work opportunities.
        </span>
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" required />
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <FaGithub alt="GitHub" className="link" onClick={handleGitHubClick} />
            <BiLogoNetlify alt="Netlify" className="link" onClick={handleNetlifyClick} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

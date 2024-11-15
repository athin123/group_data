import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './components/img.jpg';
import banner_image from './assets/images/banner.png';
import service_image from './assets/images/service.png';

function App() {
  return (
    
    <div className="landing-page"  id="home">
      {/* Navbar */}
      <nav className="navbar" style={{position: 'fixed'}}>
        <div className="logo"><img style={{ width: '80px', height: '60px' }} src={logo}></img><span className="info-name3">GROUP DATA SHARING</span></div>
        <ul className="menu" style={{textDecoration: 'none'}}>
          <li><a style={{textDecoration: 'none'}} href="#home">Home</a></li>
          <li><a style={{textDecoration: 'none'}} href="#features">About</a></li>
          <li><a style={{textDecoration: 'none'}} href="#services">Working</a></li>
          <li><a style={{textDecoration: 'none'}} href="#contact">Contact</a></li>
          <li><Link to={'/login'}>
            <Button>Login</Button>
            </Link></li>
        </ul>
      </nav>
      {/* Banner Image */}
      <div className="banner">
        <img src={banner_image} alt="Banner" />
      </div>

      {/* What We Do and How We Do */}
      <div className="features" id="features">
        <div className="feature">
        <br></br>
        <br></br>
          <p>
          Welcome to the forefront of secure, seamless, and collaborative data sharing in the cloud. Driven by a passion for innovation and a commitment to privacy, we have developed a state-of-the-art Group Data Sharing Platform powered by the MERN stack, designed to meet the evolving needs of modern organizations. </p>
        </div>
        <div className="feature">
        <br></br>
        <br></br>
          <p>Our expert team specializes in secure cryptographic solutions and robust back-end systems, ensuring your data is protected while remaining accessible to authorized group members. Whether you're a startup aiming to safeguard sensitive information or a large enterprise looking to streamline secure collaboration, our platform empowers you with the tools to stay ahead in today’s digital landscape.</p>
        </div>
      </div>

      {/* Full-width Image */}
      <div className="full-width-image" id="services">
        <img src={service_image} alt="Full Width" />
      </div>

      {/* Contact */}
<div className="contact" id="contact">
  {/* Google Maps */}
  <div className="map-container">
  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.590154264044!2d80.49808730840844!3d16.49627768418111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1699584289450!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>

  {/* Contact Form */}
  <div className="contact-form">
    <h2>Contact Us</h2>
    {/* Your contact form JSX goes here */}
    {/* Add input fields, labels, and a submit button */}
    <form action="https://formspree.io/f/xoqobobq"
  method="POST">
      {/* Example input field */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="name">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="name">Messsage:</label>
        <input type="text" id="message" name="message" required />
      </div>

      
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  </div>
</div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; COPYRIGHTS 2023 &nbsp;&nbsp; VIT-AP UNIVERSITY, INAVOLU</p>
      </footer>
      
    </div>
  );
}

export default App;

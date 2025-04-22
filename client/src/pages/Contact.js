import React, { useState } from 'react';
import './Contact.css';


// Import images from the assets folder
import facebookLogo from '../assets/facebook-brands.svg';
import instagramLogo from '../assets/instagram-brands.svg';
import tiktokLogo from '../assets/tiktok-brands.svg';

const ContactPage = () => {
  const [formType, setFormType] = useState(null);

  const handleFormClick = (type) => {
    setFormType(type);
  };

  const renderForm = () => {
    switch (formType) {
      case 'feedback':
        return (
          <div className="form-container">
            <h3>Feedback Form</h3>
            <form>
              <label>Your Feedback:</label>
              <textarea placeholder="Enter your feedback"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'return':
        return (
          <div className="form-container">
            <h3>Return Form</h3>
            <form>
              <label>Order Number:</label>
              <input type="text" placeholder="Enter your order number" />
              <label>Reason for Return:</label>
              <textarea placeholder="Enter the reason for return"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      case 'orderTracking':
        return (
          <div className="form-container">
            <h3>Order Tracking Form</h3>
            <form>
              <label>Order Number:</label>
              <input type="text" placeholder="Enter your order number" />
              <button type="submit">Track</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="contact-page">
      <h1>Customer Service</h1>
      
      {/* Postal Info */}
      <div className="contact-info">
        <p>Postal Address: Rasinkatu 4, 01360, Vantaa, Finland</p>
        <p>Phone: +358442700981</p>
        <p>Email: <a href="mailto:rdblueblack07@gmail.com">rdblueblack07@gmail.com</a></p>
        <p>Website: <a href="https://simplyclothes.com" target="_blank" rel="noopener noreferrer">simplyclothes.com</a></p>
      </div>
      
      {/* Contact Boxes */}
      <div className="contact-boxes">
        <button onClick={() => handleFormClick('feedback')}>Feedback</button>
        <button onClick={() => handleFormClick('return')}>Return</button>
        <button onClick={() => handleFormClick('orderTracking')}>Order Tracking</button>
      </div>
      
      {/* Form Display */}
      {renderForm()}

      {/* Social Media Links */}
      <div className="social-media">
        <p>Follow us:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={tiktokLogo} alt="TikTok" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;

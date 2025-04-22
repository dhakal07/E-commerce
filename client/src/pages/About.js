import React from 'react';
import './About.css'; // Don't forget to import the CSS file

function About() {
  return (
    <div className="about-container">
      {/* Brand Story */}
      <section className="hero-section">
        <img src="path/to/hero-image.jpg" alt="Our Story" className="hero-img" />
        <div className="hero-text">
          <h1>Our Story</h1>
          <p>
            Founded in 2024, Simply Clothes started with the vision to bring high-quality, affordable fashion to everyone. Our journey has been about making fashion accessible without compromising on quality.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>At Simply Clothes, we provide quality fashion that’s affordable, stylish, and sustainable. Our mission is to offer you the best shopping experience.</p>
        <div className="mission-icons">
          <div className="icon">
            <img src="path/to/heart-icon.svg" alt="Customer Commitment" />
            <p>Customer First</p>
          </div>
          <div className="icon">
            <img src="path/to/leaf-icon.svg" alt="Sustainability" />
            <p>Sustainability</p>
          </div>
          <div className="icon">
            <img src="path/to/lightbulb-icon.svg" alt="Innovation" />
            <p>Innovation</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="value-cards">
          <div className="card">
            <h3>Customer Commitment</h3>
            <p>We always put our customers first, ensuring the best service and experience.</p>
          </div>
          <div className="card">
            <h3>Sustainability</h3>
            <p>We focus on sustainable fashion, reducing our environmental impact.</p>
          </div>
          <div className="card">
            <h3>Innovation</h3>
            <p>We are constantly innovating to bring you the best shopping experience.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="path/to/rajiv-dhakal.jpg"/>
            <h4>Rajiv Dhakal</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="member">
            <img src="path/to/komal-gautam.jpg"/>
            <h4>Komal Gautam</h4>
            <p>Head of Marketing</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <p>"Simply Clothes made shopping so easy! The clothing is stylish and the quality is amazing!"</p>
            <p>- Jane D.</p>
          </div>
          <div className="testimonial-card">
            <p>"I love the variety and how affordable everything is. My new favorite online store!"</p>
            <p>- Mark S.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

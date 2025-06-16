import React from 'react'
import './NinethDiv.css'

function NinethDiv() {
  const profileImage = "https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg";

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Request Call Back Section */}
        <div className="callback-section">
          <h2>Request a Call Back</h2>
          <p>Our Staff Will Call Back Later And Answer Your Questions</p>
          <form className="callback-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <button type="submit">SEND NOW</button>
            </div>
          </form>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={profileImage} alt="Client" className="testimonial-img" />
              <div className="testimonial-info">
                <h4>John Smith</h4>
                <p>CEO, Tech Corp</p>
              </div>
            </div>
            <p className="testimonial-text">"Amazing service and support. Highly recommended!"</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-header">
              <img src={profileImage} alt="Client" className="testimonial-img" />
              <div className="testimonial-info">
                <h4>David Wilson</h4>
                <p>CTO, Innovation Inc</p>
              </div>
            </div>
            <p className="testimonial-text">"Best business solutions we've ever used."</p>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo-section">
              <h3>E Grow.</h3>
              <p>Office: 4042 Imperial Road, UK<br />
                 Granada Hills, CA 91344<br />
                 Phone: +1 (123) 456-7890</p>
            </div>
          </div>

          <div className="footer-links">
            <div className="menu-column">
              <h4>Menu</h4>
              <ul>
                <li><a href="#home">Homepage</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#pricing">Pricing Plans</a></li>
                <li><a href="#blog">Blog & News</a></li>
              </ul>
            </div>

            <div className="quick-links-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div className="newsletter-column">
              <h4>Our Newsletter</h4>
              <p>Sign Up To Our Newsletter To Get The Latest News And Offers.</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter Your Email" />
                <button type="submit">Subscribe</button>
              </div>
              <div className="social-icons">
                <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#twitter"><i className="fab fa-twitter"></i></a>
                <a href="#instagram"><i className="fab fa-instagram"></i></a>
                <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                <a href="#youtube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          <p>Copyright © E-Grow. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default NinethDiv

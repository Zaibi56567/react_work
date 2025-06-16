import React from 'react'
import './EighthDiv.css'
import { FaGlobe, FaPhone, FaEnvelope } from 'react-icons/fa'
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function EighthDiv() {
      let team = [
        {
          name: "Brooklyn Simmons",
          image: "https://www.man-shop.eu/media/db/93/05/1726129673/MAN%20Lifestyle%20Merchandising%20Shop%20Bekleidung%20Herren.png",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/brooklyn-simmons/",
          facebook: "https://www.facebook.com/brooklyn.simmons",
          twitter: "https://twitter.com/brooklyn_simmons"
        },
        {
          name: "Jenny Wilson",
          image: "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=",
          role: "Finance Adviser",
          linkedin: "https://www.linkedin.com/in/brooklyn-simmons/",
          facebook: "https://www.facebook.com/brooklyn.simmons",
          twitter: "https://twitter.com/brooklyn_simmons"
        },
        {
          name: "Wade Warren",
          image: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/brooklyn-simmons/",
          facebook: "https://www.facebook.com/brooklyn.simmons",
          twitter: "https://twitter.com/wade_warren"
        },
        {
          name: "Marvin McKinney",
          image: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/marvin-mckinney/",
          facebook: "https://www.facebook.com/marvin.mckinney",
          twitter: "https://twitter.com/marvin_mckinney"
        },
        {
          name: "Brooklyn Simmons",
          image: "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/brooklyn-simmons/",
          facebook: "https://www.facebook.com/brooklyn.simmons",
          twitter: "https://twitter.com/brooklyn_simmons"
        },
        {
          name: "Brooklyn Simmons",
          image: "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/brooklyn-simmons/",
          facebook: "https://www.facebook.com/brooklyn.simmons",
          twitter: "https://twitter.com/brooklyn_simmons"
        },
        {
          name: "Brooklyn Simmons",
          image: "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/brooklyn-simmons/",
          facebook: "https://www.facebook.com/brooklyn.simmons",
          twitter: "https://twitter.com/brooklyn_simmons"
        },
        {
          name: "Brooklyn Simmons",
          image: "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
          role: "Lead Developer",
          linkedin: "https://www.linkedin.com/in/brooklyn-simmons/",
          facebook: "https://www.facebook.com/brooklyn.simmons",
          twitter: "https://twitter.com/brooklyn_simmons"
        },
      ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="eighth-container">
      {/* Team Members Section */}
      <section id="team" className="team-section">
        <div className="section-label">EXPERT PEOPLE</div>
        <h2 className="section-title">Our Dedicated Team Members</h2>
        <div className="team-slider-container">
          <Slider {...sliderSettings}>
            {team.map((item, index) => (
              <div key={index} className="team-slide">
                <div className="team-card">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                  <div className="social-icons">
                    <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="social-icon" />
                    </a>
                    <a href={item.facebook} target="_blank" rel="noopener noreferrer">
                      {/* <FaFacebookSquare className="social-icon" /> */}
                    </a>
                    <a href={item.twitter} target="_blank" rel="noopener noreferrer">
                      <FaSquareXTwitter className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="services" className="testimonials-section">
        <h2 className="section-title">What Customers Say's About Our Grow Services</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."</p>
            <div className="testimonial-author">
              <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg" alt="Mr Sidney Jones" />
              <div>
                <h4>Mr Sidney Jones</h4>
                <p>CEO, Company Name</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."</p>
            <div className="testimonial-author">
              <img src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=" alt="Mr Sidney Jones" />
              <div>
                <h4>Mr Sidney Jones</h4>
                <p>CEO, Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="about" className="pricing-section">
        <h2 className="section-title">We've offered the best pricing for you</h2>
        <div className="pricing-toggle">
          <span>Monthly</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span>Yearly</span>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter Plan</h3>
            <div className="price">$19.00<span>/month</span></div>
            <ul className="features-list">
              <li>✓ Up to 3k Visitors</li>
              <li>✓ 10 User Administration</li>
              <li>✓ 15 Minutes Support</li>
              <li>✓ Unlimited Features</li>
              <li>✓ 1 Free Domain</li>
            </ul>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="pricing-card popular">
            <div className="popular-tag">Popular</div>
            <h3>Premium Plan</h3>
            <div className="price">$49.00<span>/month</span></div>
            <ul className="features-list">
              <li>✓ Up to 10k Visitors</li>
              <li>✓ 20 User Administration</li>
              <li>✓ 25 Minutes Support</li>
              <li>✓ Unlimited Features</li>
              <li>✓ 2 Free Domain</li>
            </ul>
            <button className="get-started-btn">Get Started</button>
          </div>
          <div className="pricing-card">
            <h3>Enterprise Plan</h3>
            <div className="price">$99.00<span>/month</span></div>
            <ul className="features-list">
              <li>✓ Up to 20k Visitors</li>
              <li>✓ 30 User Administration</li>
              <li>✓ 35 Minutes Support</li>
              <li>✓ Unlimited Features</li>
              <li>✓ 3 Free Domain</li>
            </ul>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog-section">
        <h2 className="section-title">Read Our Latest Updates</h2>
        <p className="section-description">Get The Latest News About Us And Our Services Growth By Subscribing To Our Latest Updates</p>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="Blog post" />
            <div className="blog-content">
              <h3>Meet AutoManage, the best AI management tools</h3>
              <p>Everything You Need To Start Selling Online Faster Than Ever Before</p>
              <div className="blog-author">
                <img src="https://www.theladders.com/wp-content/uploads/man_outside_091318.jpg" alt="Author" />
                <span>John Doe</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="Blog post" />
            <div className="blog-content">
              <h3>Meet AutoManage, the best AI management tools</h3>
              <p>Everything You Need To Start Selling Online Faster Than Ever Before</p>
              <div className="blog-author">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="Author" />
                <span>Jane Smith</span>
                <span>7 min read</span>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <img src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="Blog post" />
            <div className="blog-content">
              <h3>Meet AutoManage, the best AI management tools</h3>
              <p>Everything You Need To Start Selling Online Faster Than Ever Before</p>
              <div className="blog-author">
                <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg" alt="Author" />
                <span>Mike Johnson</span>
                <span>3 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EighthDiv

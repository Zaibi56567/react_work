import React from 'react'
import './SeventhDiv.css'

function SeventhDiv() {
  return (
    <div className="seventh-container">
      <div className="projects-header">
        <span className="complete-projects">COMPLETE PROJECTS</span>
        <div className="header-content">
          <h2>Our recently completed projects list</h2>
          <p>Ever Find Yourself Staring At Your Computer Screen A Good Consulting Slogan To Come To Mind? Oftentimes.</p>
        </div>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <img src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg" alt="Business meeting" />
        </div>
        <div className="project-card">
          <img src="https://img.freepik.com/free-photo/young-businesswoman-with-her-colleague-working-laptop_23-2147943317.jpg" alt="Office collaboration" />
        </div>
        <div className="project-card">
          <img src="https://img.freepik.com/free-photo/business-partners-working-together-office_23-2149323261.jpg" alt="Business partners" />
        </div>
      </div>

      <div className="consultation-banner">
        <div className="contact-info">
          <div className="phone-section">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTIyIDEyQTEwIDEwIDAgMSAxIDEyIDJhMTAgMTAgMCAwIDEgMTAgMTB6Ii8+PHBhdGggZD0iTTE1IDlsLTYgNiIvPjxwYXRoIGQ9TTkgOWw2IDYiLz48L3N2Zz4=" alt="Phone icon" className="phone-icon" />
            <div className="phone-content">
              <span>Call For More Info</span>
              <h3>+123 8989 444</h3>
            </div>
          </div>
          <div className="consultation-content">
            <h3>Let's Request a Schedule For Free Consultation</h3>
          </div>
          <button className="contact-button">
            CONTACT US
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SeventhDiv 
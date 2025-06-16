import React from 'react'
import './SixthDiv.css'

function SixthDiv() {
  return (
    <div className="sixth-container col-md-12">
      <div className="left-section">
        <h1>We'll Ensure You Always Get the Best Guidance.</h1>
        <p>Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet, Consecteture.Borem.</p>
        <button className="watch-button">
          <span className="play-icon">▶</span>
          Watch Video
        </button>
      </div>

      <div className="right-section">
        <div className="content-card">
          <span className="highlight-text">WHY WE ARE THE BEST</span>
          <h2>Smart & Great Finance For you Solutions</h2>
          <p>Morem Ipsum Dolor Sit Amet Consectedipiscing Elita Florai Psum Dolor Sit Amonsectet Borem Ipsum Consectetur.</p>

          <div className="progress-bars">
            <div className="progress-item">
              <div className="progress-header">
                <span>Consulting</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Investment</span>
                <span>76%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '76%' }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Business</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SixthDiv

import React from "react";
import { LiaAwardSolid } from "react-icons/lia";
import { WiStars } from "react-icons/wi";

import "./FivethDiv.css";

const FivethDiv = () => {
  return (
    <div className="business-strategy-container">
      <div className="content-wrapper">
        <div className="image-section">
          <div className="circular-image" style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
              alt="Business professional"
            />
            <div
              className="stats-card"
              style={{
                position: "absolute",
                bottom: "0",
                left: "70px",
                backgroundColor: "white",
                padding: "",
                borderRadius: "10px",
                margin: "20px",
              }}
            >
              <h2>98%</h2>
              <p>Business Goal</p>
              <div className="bar-graph">
                <div className="bar">
                  <div className="bar2">Jan</div>
                </div>
                <div className="bar">
                  <div className="bar2">Feb</div>
                </div>
                <div className="bar">
                  <div className="bar2">Mar</div>
                </div>
                <div className="bar">
                  <div className="bar2">Apr</div>
                </div>
                <div className="bar">
                  <div className="bar2">May</div>
                </div>
              </div>
            </div>
          </div>
          <div className="icon-circle">
            <img
              src="https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
              alt="Business icon"
            />
          </div>
        </div>

        <div className="text-section">
          <span className="company-label">COMPANY OVERVIEW</span>
          <h1>Plan your business strategy with Our Experts</h1>
          <p>
            Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum
            Dolor Sit Amet, Consectetur.Borem Ipsum Dolor Sit Amet, Consectetur
            Adipiscing Elita Florai Psum.
          </p>
          <p>
            Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum
            Dolor Sit Amet, Consecteture.Borem.
          </p>

          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-icon">
                <LiaAwardSolid />
              </div>
              <div className="stat-info">
                <h3>235+</h3>
                <p>Best Award</p>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">
                <WiStars />
              </div>
              <div className="stat-info">
                <h3>98k</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FivethDiv;

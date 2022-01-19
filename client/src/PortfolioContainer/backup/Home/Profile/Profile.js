import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/parthshrivastava27" target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/parth-shrivastava-aa12361a9/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/parthshrivastava_/"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/groovypanda_" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Parth</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Coder",
                    1500,
                    "Full Stack Developer",
                    1500,
                    "LAMP Stack Developer",
                    1500,
                    "UI/UX Designer",
                    1500,
                    "Competetive Programmer",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="resume.pdf" download="Parth Shrivastava.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

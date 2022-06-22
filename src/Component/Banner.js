import React, { Component } from 'react';
import {  faFacebookF,  faInstagram, faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cover from '../Images/cover.jpg';class Banner extends Component {


    render() {
        return (
          <section id="home" className="hero hero-slider-wrapper hero-style-1">
            <div className="hero-slider">
              <div className="slide">
                <div className="slider-image">
                  <img src={Cover} />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col col-md-8 col-sm-12 slide-caption">
                      <div className="slide-subtitle">
                        <h4>I Am Maynul Hossain</h4>
                      </div>
                      <div className="slide-title">
                        <h2>MERN Stack Developer</h2>
                      </div>
                      <div className="btns">
                        <a
                          href="#contact"
                          className="theme-btn go-contact-area"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy">
              <p>MERN Stack Developer and Frontend Expert</p>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100004726998427"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/maynul-hossain/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/maynul69">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/muhammad_bin_mejba/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        );
    }
}

export default Banner;
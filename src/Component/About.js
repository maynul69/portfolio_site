import React, { Component } from "react";
import aboutImg from '../Images/about.png';

class About extends Component {
  render() {
    return (
      <div className="hx-about-style-1" id="about">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6 d-xl-flex d-lg-flex d-block align-items-center">
              <div className="hx-about-content">
                <div className="hx-site-title">
                  <span>Expert Web Developer & Designer</span>
                  <h2>About Me</h2>
                </div>
                <p>
                  Over the last few years, I have designed & developed a wide
                  range of websites for startup companies and large businesses.
                  My core competency lies in complete end-end management of a
                  new website development project, and I am seeking
                  opportunities to build websites from the ground up for you or
                  your business. I am having good experience in the following
                  areas:- Node.js, React.js, MongoDB, html5 Bootstrap ,
                  tailwind, material ui, redux, Google Cloud Platform, Firebase,
                  Heroku, I am interested in learning new technologies and
                  making web applications with top-notch technologies
                </p>
                <p>
                  ** Promising you high quality, effective communication and
                  timely work deliverance. **
                </p>

                <div className="btns">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1X5bVk4KQ7aceLBHae32KWQTovNX59W5i"
                    className="theme-btn"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="hx-about-img">
                <img src={aboutImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

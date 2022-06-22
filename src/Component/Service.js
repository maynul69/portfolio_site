import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import serviceImg_1 from '../Images/1.jpg';
import serviceImg_2 from '../Images/2.jpg';
import serviceImg_3 from '../Images/3.jpg';
import serviceImg_4 from "../Images/responsive.jpg";
import serviceImg_5 from '../Images/4.jpg';
import serviceImg_6 from '../Images/6.jpg';

class Service extends Component {
    render () {
        return (
          <div id="service" className="hx-service-area ptb-100-70">
            <div className="container">
              <div className="col-12">
                <div className="section-title text-center">
                  <span>What I Do</span>
                  <h2>My Services</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 grid col-12">
                  <div className="hx-service-item">
                    <div className="hx-service-single">
                      <div className="service-img">
                        <img src={serviceImg_1} />
                      </div>
                      <div className="hx-service-content">
                        <h3>Web Frontend</h3>
                        <p>
                          Building state-of-the-art, easy to use, user-friendly
                          websites and applications is truly a passion of mine
                          and I am confident I would be an excellent addition to
                          your organization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 grid col-12">
                  <div className="hx-service-item">
                    <div className="hx-service-single">
                      <div className="service-img">
                        <img src={serviceImg_2} />
                      </div>
                      <div className="hx-service-content">
                        <h3>Web Backend</h3>
                        <p>
                          I have the ability to create back-end code that will
                          add utility to everything the front-end. I'm
                          passionate about the impact my skills can have in the
                          real world, and firmly believe that I can create
                          innovative solutions to business processes and
                          problems which will ultimately lead to a better user
                          experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 grid col-12">
                  <div className="hx-service-item">
                    <div className="hx-service-single">
                      <div className="service-img">
                        <img src={serviceImg_3} />
                      </div>
                      <div className="hx-service-content">
                        <h3>Databse</h3>
                        <p>
                          I design databases to fit a variety of needs,
                          successfully ensured the security of those databases,
                          solve problems in order to meet both back-end and
                          front-end needs, install and teste new versions
                          database management systems, customize and install
                          applications and meticulously monitored performance
                          for the smoothest front-end experience possible.
                        </p>
                      </div>
                    </div>
                  </div>
                  npm
                </div>
                <div className="col-md-4 col-sm-6 grid col-12">
                  <div className="hx-service-item">
                    <div className="hx-service-single">
                      <div className="service-img">
                        <img src={serviceImg_4} />
                      </div>
                      <div className="hx-service-content">
                        <h3>Responsive Design</h3>
                        <p>When i design the site, I make sure it works perfectly on every kind of devices. I make sure, the design doesn't break depending from which device, the site is being visited.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 grid col-12">
                  <div className="hx-service-item">
                    <div className="hx-service-single">
                      <div className="service-img">
                        <img src={serviceImg_5} />
                      </div>
                      <div className="hx-service-content">
                        <h3>Authentication</h3>
                        <p>I use firebase authentication as well as custom authentication system, depending on what the client prefers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 grid col-12">
                  <div className="hx-service-item">
                    <div className="hx-service-single">
                      <div className="service-img">
                        <img src={serviceImg_6} />
                      </div>
                      <div className="hx-service-content">
                        <h3>24/7 Support</h3>
                        <p>I am available 24/7 for any kind of client support related to the project. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Service;
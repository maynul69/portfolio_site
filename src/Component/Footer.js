import React, { Component } from 'react';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Logo from '../Images/logo.png';

class Footer extends Component {
    render() {
        return (
          <div className="footer-area text-center">
            <div className="container">
              <div className="row">
                {/* <div className="col-12">
                  <div className="footer-image">
                    <a href="index.html"><img src={Logo}/></a>
                  </div>
                </div> */}
                <div className="col-12">
                  <div className="footer-menu">
                    <ul className="d-flex">
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
                </div>
                {/* <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i>Copyright - 2020<span> Developed by AutWorks</span></p>
                            </div>
                        </div> */}
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;
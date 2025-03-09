import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "../Css/slick.css"; 
import "../Css/slick-theme.css";
// import testimonialImg_1 from '../Images/testimonial/1.jpg';
// import testimonialImg_2 from '../Images/testimonial/2.jpg';
import ProgressBar from "react-bootstrap/ProgressBar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Testimonial extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            arrows: false,
            slidesToScroll: 1,
            centerPadding: 30,
            focusOnSelect: false,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
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
          <div className="testimonial-area">
            <div className="container">
              <div className="testimonial-active">
                {/* <Slider {...settings}> */}
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    {/* <div className="testimonial-content"> */}
                    <div style={{ color: "white", paddingBottom: "20px" }}>
                      <h1 style={{ color: "white" }}>Experties</h1>
                      <small>in languages</small>
                    </div>

                    <Container>
                      <Row>
                        <Col md="6">
                          <div>
                            <p>html 5</p>
                            <ProgressBar variant="warning" now={90} />
                          </div>
                          <div>
                            <p>CSS 3</p>
                            <ProgressBar variant="warning" now={80} />
                          </div>
                          <div>
                            <p>Bootstrap 5</p>
                            <ProgressBar variant="warning" now={85} />
                          </div>
                          <div>
                            <p>Tailwind</p>
                            <ProgressBar variant="warning" now={70} />
                          </div>
                          <div>
                            <p>React-Bootstrap</p>
                            <ProgressBar variant="warning" now={85} />
                          </div>
                        </Col>
                        <Col md="6">
                          <div>
                            <p>JavaScript </p>
                            <ProgressBar variant="warning" now={80} />
                          </div>
                          <div>
                            <p>ReactJS</p>
                            <ProgressBar variant="warning" now={95} />
                          </div>
                          <div>
                            <p>MongoDB</p>
                            <ProgressBar variant="warning" now={80} />
                          </div>
                          <div>
                            <p>NodeJs</p>
                            <ProgressBar variant="warning" now={65} />
                          </div>
                          <div>
                            <p>WordPress</p>
                            <ProgressBar variant="warning" now={95} />
                          </div>
                        </Col>
                      </Row>
                    </Container>

                    {/* </div> */}
                    {/* <div className="testimonial-sub">
                                    <div className="testimonial-img">
                                        <img src={testimonialImg_1}/>
                                    </div>
                                    <div className="testimonial-tumb-content">
                                        <h4>Jenelia Watson</h4>
                                        <span>Ceo Of Aroma Brand</span>
                                    </div>
                                </div> */}
                  </div>
                </div>

                {/* </Slider> */}
              </div>
            </div>
          </div>
        );
    }
}

export default Testimonial;          




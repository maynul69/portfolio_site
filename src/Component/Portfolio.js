import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Gallery_1 from '../Images/gym.jpg';
import Gallery_2 from '../Images/prlx.jpg';
import Taku from '../Images/takuhealt.png';
import Shot from '../Images/shotcreate.png';
import CC from '../Images/cchealth.png';
import EasyCare from '../Images/easycare.png';
import Quadriga from '../Images/Quadriga.png';



class Porfolio extends Component {

    state = {
        onWordpress: false,
        // onPrintDesign: false,
        onWebApp: false,
        // onPhotography: false,
        isOpen : false,
    }
    constructor(props) {
      super(props);
      this.state = {
        key: 'home',
      };
    }
  
    handleSelect = (key) => {
      this.setState({ key });
    };
  
    render() {

        // const allElement = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onWebApp: true,
        //         onPrintDesign: true,
        //         onWordpress: true,
        //         onPhotography: true,
        //     });
        // }
        

        // const printDesign = event => {
        //     event.preventDefault();
        //     this.setState({
        //         onPrintDesign: true,
        //         onWordpress: false,
        //         onWebApp: false,
        //         onPhotography: false,
        //         isOpen: true,
        //     });
        // }

      //   const Photography = event => {
      //     event.preventDefault();
      //     this.setState({
      //         onPhotography: true,
      //         onWebApp: false,
      //         onPrintDesign: false,
      //         onWordpress: false,
      //         isOpen: true,
      //     });
      // }

        const wordpress = event => {
            event.preventDefault();
            this.setState({
                onWordpress: true,
                onPrintDesign: false,
                onWebApp: false,
                onPhotography: false,
                isOpen: true,
            });
        }

        

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                onPrintDesign: false,
                onWordpress: false,
                onPhotography: false,
                isOpen: true,
            });
        }

       


        console.log(this.state.onWordpress);

        return (
          <section id="protfolio" className="gallery-section section-padding">
            <div className="container">
              <div className="row">
                <div className="col col-xs-12 sortable-gallery">
                  <div className="gallery-filters">
                    <div className="section-title">
                      <span>Portfolio</span>
                      <h2>Work I Have Done</h2>
                    </div>
                    <ul>
                                    {/* <li><a data-filter="*" href="#" className="current" onClick={allElement}>All</a></li> */}
                                    <li><a data-filter=".wordpress" href="#" onClick={wordpress}>WordPress</a></li>
                                    {/* <li><a data-filter=".Print-Design" href="#" onClick={printDesign}>Print Design</a></li> */}
                                    <li><a data-filter=".Web-Application" href="#" onClick={webApp}>Custom Code</a></li>               
                                    {/* <li><a data-filter=".Photography" href="#" onClick={Photography}>Photography</a></li>  */}
                                </ul>
                  </div>







                  
                  <div className="gallery-container gallery-fancybox masonry-gallery tumho-masonary">
{/* Custom code section */}

                    <div
                      className={
                        // this.state.onPrintDesign
                        //   ? "grid active"
                        //   : "grid" &&
                           this.state.onWebApp
                          ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      <img
                        src={Gallery_1}
                        className="img img-responsive"
                        alt=""
                      />
                      <div className="icon">
                        <a
                        target='_blank'
                          href="https://hercules-fitness.web.app/home"
                          className="view-icon"
                        >
                          <h3>Visit Site</h3>
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                        </a>
                      </div>
                    </div>


                    <div
                      className={
                        // this.state.onPrintDesign
                        //   ? "grid active"
                        //   : "grid" &&
                        this.state.onWebApp
                        ? "grid active"
                        : "grid" && this.state.isOpen
                        ? "grid"
                        : "grid open"
                      }
                    >
                      <img
                        src={Gallery_2}
                        alt=""
                        className="img img-responsive"
                      />
                      <div className="icon">
                        <a
                          target="_blank"
                          href="https://cool-snickerdoodle-31ff93.netlify.app/"
                          className="view-icon"
                        >
                          <h3>Visit Site</h3>
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        // this.state.onPrintDesign
                        //   ? "grid active"
                        //   : "grid" &&
                        this.state.onWebApp
                        ? "grid active"
                        : "grid" && this.state.isOpen
                        ? "grid"
                        : "grid open"
                      }
                    >
                      <img
                        src={Quadriga}
                        alt=""
                        className="img img-responsive"
                      />
                      <div className="icon">
                        <a
                          target="_blank"
                          href="https://quadrigaa.netlify.app/"
                          className="view-icon"
                        >
                          <h3>Visit Site</h3>
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                        </a>
                      </div>
                    </div>

{/* Wordpress section */}

                    <div
                      className={
                        // this.state.onWebApp
                        //   ? "grid active"
                        //   : "grid" && this.state.onPrintDesign
                        //   ? "grid active"
                        //   : "grid" && 
                          this.state.onWordpress
                          ? "grid active"
                          // : "grid" && this.state.onPhotography
                          // ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      <img
                        src={Taku}
                        alt=""
                        className="img img-responsive"
                      />
                      <div className="icon">
                        <a
                          target="_blank"
                          href="https://taku-healthcare.com/"
                          className="view-icon"
                        >
                          <h3>Visit Site</h3>
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        // this.state.onWebApp
                        //   ? "grid active"
                        //   : "grid" && this.state.onPrintDesign
                        //   ? "grid active"
                        //   : "grid" && 
                          this.state.onWordpress
                          ? "grid active"
                          // : "grid" && this.state.onPhotography
                          // ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      <img
                        src={Shot}
                        alt=""
                        className="img img-responsive"
                      />
                      <div className="icon">
                        <a
                          target="_blank"
                          href="https://shotcreteaustralia.com.au/"
                          className="view-icon"
                        >
                          <h3>Visit Site</h3>
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        // this.state.onWebApp
                        //   ? "grid active"
                        //   : "grid" && this.state.onPrintDesign
                        //   ? "grid active"
                        //   : "grid" && 
                          this.state.onWordpress
                          ? "grid active"
                          // : "grid" && this.state.onPhotography
                          // ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      <img
                        src={CC}
                        alt=""
                        className="img img-responsive"
                      />
                      <div className="icon">
                        <a
                          target="_blank"
                          href="https://cchealth-care.com/"
                          className="view-icon"
                        >
                          <h3>Visit Site</h3>
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        // this.state.onWebApp
                        //   ? "grid active"
                        //   : "grid" && this.state.onPrintDesign
                        //   ? "grid active"
                        //   : "grid" && 
                          this.state.onWordpress
                          ? "grid active"
                          // : "grid" && this.state.onPhotography
                          // ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      <img
                        src={EasyCare}
                        alt=""
                        className="img img-responsive"
                      />
                      <div className="icon">
                        <a
                          target="_blank"
                          href="https://easycarecontracting.com/"
                          className="view-icon"
                        >
                          <h3>Visit Site</h3>
                          {/* <FontAwesomeIcon icon={faPlus} /> */}
                        </a>
                      </div>
                    </div>






{/* others */}



                    <div
                      className={
                        this.state.onWordpress
                          ? "grid active"
                          : "grid" && this.state.onWebApp
                          ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      {/* <img src={Gallery_6} alt="" className="img img-responsive"/> */}
                      <div className="icon">
                        <a href="#" className="view-icon">
                          <FontAwesomeIcon icon={faPlus} />
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        this.state.onPrintDesign
                          ? "grid active"
                          : "grid" && this.state.onPhotography
                          ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      {/* <img src={Gallery_5} alt="" className="img img-responsive"/> */}
                      <div className="icon">
                        <a href="#" className="view-icon">
                          <FontAwesomeIcon icon={faPlus} />
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        this.state.onPrintDesign
                          ? "grid active"
                          : "grid" && this.state.onPhotography
                          ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      {/* <img src={Gallery_3} alt="" className="img img-responsive"/> */}
                      <div className="icon">
                        <a href="#" className="view-icon">
                          <FontAwesomeIcon icon={faPlus} />
                        </a>
                      </div>
                    </div>
                    <div
                      className={
                        this.state.onPrintDesign
                          ? "grid active"
                          : "grid" && this.state.onWebApp
                          ? "grid active"
                          : "grid" && this.state.onPhotography
                          ? "grid active"
                          : "grid" && this.state.isOpen
                          ? "grid"
                          : "grid open"
                      }
                    >
                      {/* <img src={Gallery_4} alt="" className="img img-responsive"/> */}
                      <div className="icon">
                        <a href="#" className="view-icon">
                          <FontAwesomeIcon icon={faPlus} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Porfolio;
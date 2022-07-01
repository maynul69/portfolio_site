// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
// import Banner from "../../Component/Banner";
import Banner from "./Component/Banner";
import About from "./Component/About";
import Service from "./Component/Service";
import PricingPlan from "./Component/PricingPlan";
// import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Testimonial from "./Component/Testimonial";
import Portfolio from "./Component/Portfolio";
import Navbar from "./Component/Navbar";
import "./Css/dist/bootstrap.css";
import "./Css/App.css";
import "./Css/Responsive.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      
      <Service />
      <Portfolio />
      <Testimonial />
      {/* <PricingPlan /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


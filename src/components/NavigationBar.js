// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { FaQuestionCircle } from 'react-icons/fa'; // Ensure this import is included
// import { FaUser } from 'react-icons/fa';
// import '../styles/NavigationBar.css';
// import logo from '../assets/logo.png';

// const NavigationBar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Navbar.Brand href="/">
//         <img
//           src={logo}
//           width="50"
//           height="50"
//           className="d-inline-block align-top"
//           alt="Ottawa Soccer Champions League Logo"
//         />
//         <span className="brand-name">Ottawa Soccer Champions League</span>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto nav-links">
//           <LinkContainer to="/">
//             <Nav.Link>Home</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/explore-competitions">
//             <Nav.Link>Explore Competitions</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/register">
//             <Nav.Link>Register</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/news">
//             <Nav.Link>News</Nav.Link>
//           </LinkContainer>
          
//           <LinkContainer to="/faq">
//             <Nav.Link>FAQ
//               {/* <FaQuestionCircle className="me-2" /> FAQ */}
//             </Nav.Link>
//           </LinkContainer>

//           <LinkContainer to="/about-us">
//             <Nav.Link>About Us</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/login">
//             <Nav.Link>
//               Login/Sign up
//               {/* <FaUser /> Login/Sign up */}
//               </Nav.Link>
//           </LinkContainer>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavigationBar;


import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaQuestionCircle, FaUser } from 'react-icons/fa';
import '../styles/NavigationBar.css';
import logo from '../assets/logo.png';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" role="navigation" aria-label="Main navigation">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Ottawa Soccer Champions League Logo"
        />
        <span className="brand-name">Ottawa Soccer Champions League</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-links">
          <LinkContainer to="/">
            <Nav.Link aria-label="Home">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/explore-competitions">
            <Nav.Link aria-label="Explore Competitions">Explore Competitions</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link aria-label="Register">Register</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/news">
            <Nav.Link aria-label="News">News</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faq">
            <Nav.Link aria-label="FAQ"> FAQ
              {/* <FaQuestionCircle className="me-2" aria-hidden="true" /> FAQ */}
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about-us">
            <Nav.Link aria-label="About Us">About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link aria-label="Login or Sign Up"> Login/Sign up
              {/* <FaUser aria-hidden="true" /> Login/Sign Up */}
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

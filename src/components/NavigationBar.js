// import React, { useContext } from 'react';
// import { Navbar, Nav, Dropdown, Container, Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { LanguageContext } from '../LanguageContext';
// import '../styles/NavigationBar.css';
// import logo from '../assets/logo.png';

// const NavigationBar = () => {
//   const { language, setLanguage } = useContext(LanguageContext);

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
//       <Container fluid>
//         <Navbar.Brand href="/" className="d-flex align-items-center">
//           <img
//             src={logo}
//             width="50"
//             height="50"
//             className="d-inline-block align-top"
//             alt="Ottawa Soccer Champions League Logo"
//           />
//           <span className="brand-name">Ottawa Soccer Champions League</span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav className="ml-auto nav-links align-items-center">
//             <LinkContainer to="/">
//               <Nav.Link>Home</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/explore-competitions">
//               <Nav.Link>Competitions</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/register">
//               <Nav.Link>Registration</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/news">
//               <Nav.Link>News</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/faq">
//               <Nav.Link>FAQ</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/about-us">
//               <Nav.Link>About Us</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <Button variant="outline-light" className="mx-2 align-button">
//                 Login/Sign Up
//               </Button>
//             </LinkContainer>
//             <Dropdown className="language-dropdown align-button mx-2">
//               <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="language-button">
//                 {language === 'en' ? 'English' : 'العربية'}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
//                 <Dropdown.Item onClick={() => setLanguage('ar')}>العربية</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;


import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { LanguageContext } from '../LanguageContext';
import { useLocation } from 'react-router-dom'; // Import useLocation
import '../styles/NavigationBar.css';
import logo from '../assets/logo.png';

const NavigationBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation(); // Get current location

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
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
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto nav-links align-items-center">
            <LinkContainer to="/">
              <Nav.Link className={location.pathname === '/' ? 'active-link' : ''}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/explore-competitions">
              <Nav.Link className={location.pathname === '/explore-competitions' ? 'active-link' : ''}>Competitions</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link className={location.pathname === '/register' ? 'active-link' : ''}>Registration</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
              <Nav.Link className={location.pathname === '/news' ? 'active-link' : ''}>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faq">
              <Nav.Link className={location.pathname === '/faq' ? 'active-link' : ''}>FAQ</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about-us">
              <Nav.Link className={location.pathname === '/about-us' ? 'active-link' : ''}>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Button variant="outline-light" className={`mx-2 align-button ${location.pathname === '/login' ? 'active-button' : ''}`}>
                Login/Sign Up
              </Button>
            </LinkContainer>
            <Dropdown className="language-dropdown align-button mx-2">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="language-button">
                {language === 'en' ? 'English' : 'العربية'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
                <Dropdown.Item onClick={() => setLanguage('ar')}>العربية</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

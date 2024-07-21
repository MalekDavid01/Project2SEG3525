// // src/components/Footer.js
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import '../styles/Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col md={4}>
//             <h5>League Information</h5>
//             <p>
//               Ottawa Soccer Champions League (OSCL) hosts various competitive and recreational soccer leagues for all ages. Join us for a season full of excitement, skill-building, and camaraderie.
//             </p>
//           </Col>
//           <Col md={2}>
//             <h5>Quick Links</h5>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/explore-competitions">Explore Competitions</a></li>
//               <li><a href="/register">Register</a></li>
//               <li><a href="/news">News</a></li>
//               <li><a href="/about-us">About Us</a></li>
//             </ul>
//           </Col>
//           <Col md={3}>
//             <h5>Contact Us</h5>
//             <p>
//               <FontAwesomeIcon icon={faPhone} /> +1 (613) 111-1111 <br />
//               <FontAwesomeIcon icon={faEnvelope} /> email@oscl.ca <br />
//               <FontAwesomeIcon icon={faMapMarkerAlt} /> 124 Champions Drive Ottawa, Ontario K1Y 1G2
//             </p>
//           </Col>
//           <Col md={3}>
//             <h5>Follow Us</h5>
//             <div className="social-icons">
//               <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
//               <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
//               <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
//               <a href="/" onClick={(e) => e.preventDefault()}><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center mt-3">
//             <p>© 2024 Ottawa Soccer Champions League. All Rights Reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <Row>
          <Col md={4}>
            <h5>League Information</h5>
            <p>
              Ottawa Soccer Champions League (OSCL) hosts various competitive and recreational soccer leagues for all ages. Join us for a season full of excitement, skill-building, and camaraderie.
            </p>
          </Col>
          <Col md={2}>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/" aria-label="Home">Home</a></li>
              <li><a href="/explore-competitions" aria-label="Explore Competitions">Competitions</a></li>
              <li><a href="/register" aria-label="Register">Register</a></li>
              <li><a href="/news" aria-label="News">News</a></li>
              <li><a href="/faq" aria-label="FAQ">FAQ</a></li> {/* Added FAQ link */}
              <li><a href="/about-us" aria-label="About Us">About Us</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> +1 (613) 111-1111 <br />
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> email@oscl.ca <br />
              <FontAwesomeIcon icon={faMapMarkerAlt} aria-hidden="true" /> 124 Champions Drive Ottawa, Ontario K1Y 1G2
            </p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="social-icons" role="navigation" aria-label="Social Media Links">
              <a href="/" onClick={(e) => e.preventDefault()} aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="/" onClick={(e) => e.preventDefault()} aria-label="Twitter">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2024 Ottawa Soccer Champions League. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

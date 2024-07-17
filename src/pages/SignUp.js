// import React, { useState } from 'react';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import '../styles/SignUp.css';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your sign-up logic here
//     window.location.reload(); // Reload the page upon submission
//   };

//   const validatePassword = (password) => {
//     return password.length >= 8;
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   const renderTooltipEmail = (props) => (
//     <Tooltip id="email-tooltip" {...props}>
//       Email must contain @ and end with a valid domain (e.g., .com, .ca).
//     </Tooltip>
//   );

//   const renderTooltipPassword = (props) => (
//     <Tooltip id="password-tooltip" {...props}>
//       Password must be at least 8 characters long.
//     </Tooltip>
//   );

//   return (
//     <div className="signup-container">
//       <h2 className="signup-title">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>First Name</label>
//           <input
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name</label>
//           <input
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipEmail}>
//             <label>Email Address</label>
//           </OverlayTrigger>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipPassword}>
//             <label>Password</label>
//           </OverlayTrigger>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//           {formData.password !== formData.confirmPassword && (
//             <small className="error-text">Passwords do not match</small>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="btn btn-dark"
//           disabled={!validatePassword(formData.password) || formData.password !== formData.confirmPassword}
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from 'react';
import { OverlayTrigger, Tooltip, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    window.location.reload(); // Reload the page upon submission
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const renderTooltipEmail = (props) => (
    <Tooltip id="email-tooltip" {...props}>
      Email must contain @ and end with a valid domain (e.g., .com, .ca).
    </Tooltip>
  );

  const renderTooltipPassword = (props) => (
    <Tooltip id="password-tooltip" {...props}>
      Password must be at least 8 characters long.
    </Tooltip>
  );

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipEmail}>
            <Form.Label>Email Address</Form.Label>
          </OverlayTrigger>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipPassword}>
            <Form.Label>Password</Form.Label>
          </OverlayTrigger>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {formData.password !== formData.confirmPassword && (
            <small className="error-text">Passwords do not match</small>
          )}
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            type="submit"
            className="mt-3 btn-dark"
            disabled={!validatePassword(formData.password) || formData.password !== formData.confirmPassword}
          >
            Sign Up
          </Button>
        </div>
      </Form>
      <p className="text-center mt-3">
        <Link to="/login" className="btn btn-dark">Back to Login Page</Link>
      </p>
    </div>
  );
};

export default SignUp;

// import React, { useState } from 'react';
// import { OverlayTrigger, Tooltip, Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
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
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="firstName">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="lastName">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="email">
//           <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipEmail}>
//             <Form.Label>Email Address</Form.Label>
//           </OverlayTrigger>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltipPassword}>
//             <Form.Label>Password</Form.Label>
//           </OverlayTrigger>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="confirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//           {formData.password !== formData.confirmPassword && (
//             <small className="error-text">Passwords do not match</small>
//           )}
//         </Form.Group>
//         <div className="d-flex justify-content-center">
//           <Button
//             type="submit"
//             className="mt-3 btn-dark"
//             disabled={!validatePassword(formData.password) || formData.password !== formData.confirmPassword}
//           >
//             Sign Up
//           </Button>
//         </div>
//       </Form>
//       <p className="text-center mt-3">
//         <Link to="/login" className="btn btn-dark">Back to Login Page</Link>
//       </p>
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

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUserEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
    if (emailError) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
    if (passwordError) {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setFormData({
      ...formData,
      confirmPassword: e.target.value,
    });
    if (confirmPasswordError) {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);
    const confirmPasswordValidation = validateConfirmPassword(formData.password, formData.confirmPassword);
    if (emailValidation.isValid && passwordValidation.isValid && confirmPasswordValidation.isValid) {
      // Add your sign up logic here
      window.location.reload(); // Reload the page upon submission
    } else {
      setEmailError(emailValidation.errorMessage);
      setPasswordError(passwordValidation.errorMessage);
      setConfirmPasswordError(confirmPasswordValidation.errorMessage);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (!email.includes('@')) {
        return { isValid: false, errorMessage: 'Email must contain @.' };
      } else if (!email.match(/\.[a-zA-Z]{2,}$/)) {
        return { isValid: false, errorMessage: 'Email must end with a valid domain (e.g., .com, .ca).' };
      } else {
        return { isValid: false, errorMessage: 'Please enter a valid email address.' };
      }
    }
    return { isValid: true, errorMessage: '' };
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return { isValid: false, errorMessage: 'Password must be at least 8 characters long.' };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return { isValid: false, errorMessage: 'Passwords do not match.' };
    }
    return { isValid: true, errorMessage: '' };
  };

  const renderEmailTooltip = (props) => (
    <Tooltip id="email-tooltip" {...props}>
      Email must contain @ and end with a valid domain (e.g., .com, .ca).
    </Tooltip>
  );

  const renderPasswordTooltip = (props) => (
    <Tooltip id="password-tooltip" {...props}>
      Password must be at least 8 characters long.
    </Tooltip>
  );

  const renderConfirmPasswordTooltip = (props) => (
    <Tooltip id="confirm-password-tooltip" {...props}>
      Passwords must match.
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
            placeholder="First Name"
            
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <OverlayTrigger placement="right" overlay={renderEmailTooltip}>
            <Form.Control
              type="email"
              value={formData.email}
              onChange={handleUserEmailChange}
              placeholder="someone@example.com"
              isInvalid={!!emailError}
            />
          </OverlayTrigger>
          <Form.Control.Feedback type="invalid">
            {emailError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <OverlayTrigger placement="right" overlay={renderPasswordTooltip}>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handlePasswordChange}
              placeholder="Password"
              isInvalid={!!passwordError}
            />
          </OverlayTrigger>
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <OverlayTrigger placement="right" overlay={renderConfirmPasswordTooltip}>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              isInvalid={!!confirmPasswordError}
            />
          </OverlayTrigger>
          <Form.Control.Feedback type="invalid">
            {confirmPasswordError}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="mt-3 btn-dark">Sign Up</Button>
        </div>
      </Form>
      <p className="text-center mt-3">
        Already have an account? <Link to="/login">Back to login page</Link>
      </p>
    </div>
  );
};

export default SignUp;

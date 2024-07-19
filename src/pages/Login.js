// import React, { useState } from 'react';
// import { OverlayTrigger, Tooltip, Button, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUserEmailChange = (e) => {
//     setFormData({
//       ...formData,
//       email: e.target.value,
//     });
//     if (emailError) {
//       setEmailError('');
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setFormData({
//       ...formData,
//       password: e.target.value,
//     });
//     if (passwordError) {
//       setPasswordError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailValidation = validateEmail(formData.email);
//     const passwordValidation = validatePassword(formData.password);
//     if (emailValidation.isValid && passwordValidation.isValid) {
//       // Add your login logic here
//       window.location.reload(); // Reload the page upon submission
//     } else {
//       setEmailError(emailValidation.errorMessage);
//       setPasswordError(passwordValidation.errorMessage);
//     }
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       if (!email.includes('@')) {
//         return { isValid: false, errorMessage: 'Email must contain @.' };
//       } else if (!email.match(/\.[a-zA-Z]{2,}$/)) {
//         return { isValid: false, errorMessage: 'Email must end with a valid domain (e.g., .com, .ca).' };
//       } else {
//         return { isValid: false, errorMessage: 'Please enter a valid email address.' };
//       }
//     }
//     return { isValid: true, errorMessage: '' };
//   };

//   const validatePassword = (password) => {
//     if (password.length < 8) {
//       return { isValid: false, errorMessage: 'Password must be at least 8 characters long.' };
//     }
//     return { isValid: true, errorMessage: '' };
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
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="email">
//           <Form.Label>Email Address</Form.Label>
//           <OverlayTrigger placement="right" overlay={renderTooltipEmail}>
//             <Form.Control
//               type="email"
//               value={formData.email}
//               onChange={handleUserEmailChange}
//               placeholder="someone@example.com"
//               isInvalid={!!emailError}
//             />
//           </OverlayTrigger>
//           <Form.Control.Feedback type="invalid">
//             {emailError}
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <OverlayTrigger placement="right" overlay={renderTooltipPassword}>
//             <Form.Control
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handlePasswordChange}
//               placeholder="Enter your password"
//               isInvalid={!!passwordError}
//             />
//           </OverlayTrigger>
//           <Form.Control.Feedback type="invalid">
//             {passwordError}
//           </Form.Control.Feedback>
//         </Form.Group>
//         <div className="d-flex justify-content-center">
//           <Button type="submit" className="mt-3 btn-dark">Login</Button>
//         </div>
//       </Form>
//       <p className="text-center mt-3">
//         Don't have an account? <Link to="/signup">Sign up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { OverlayTrigger, Tooltip, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValidation = validateEmail(userEmail);
    const passwordValidation = validatePassword(password);
    if (emailValidation.isValid && passwordValidation.isValid) {
      // Add your login logic here
      window.location.reload(); // Reload the page upon submission
    } else {
      setEmailError(emailValidation.errorMessage);
      setPasswordError(passwordValidation.errorMessage);
    }
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return { isValid: false, errorMessage: 'Please enter an email address.' };
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const localPart = /^[^\s@]+/;
    const domainPart = /@[^\s@]+/;
    const tldPart = /\.[a-zA-Z]{2,}$/;
  
    if (!email.includes('@')) {
      return { isValid: false, errorMessage: 'Email must contain @.' };
    } else if (!localPart.test(email)) {
      return { isValid: false, errorMessage: 'Local part of the email address is missing.' };
    } else if (!domainPart.test(email)) {
      return { isValid: false, errorMessage: 'Domain Name (e.g., hotmail, outlook, gmail) missing.' };
    } else if (!tldPart.test(email)) {
      return { isValid: false, errorMessage: 'Top-Level Domain (e.g., .com, .ca) is missing.' };
    } else if (!emailRegex.test(email)) {
      return { isValid: false, errorMessage: 'Please enter a valid email address.' };
    }
  
    return { isValid: true, errorMessage: '' };
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return { isValid: false, errorMessage: 'Password must be at least 8 characters long.' };
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

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group controlId="email">
          <Form.Label>Your Email</Form.Label>
          <OverlayTrigger placement="right" overlay={renderEmailTooltip}>
            <Form.Control
              type="email"
              value={userEmail}
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
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              isInvalid={!!passwordError}
            />
          </OverlayTrigger>
          <Form.Control.Feedback type="invalid">
            {passwordError}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="mt-3 btn-dark">Login</Button>
        </div>
      </Form>
      <p className="text-center mt-3">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;

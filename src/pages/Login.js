// import React, { useState } from 'react';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     window.location.reload(); // Reload the page upon submission
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

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>
//       <form onSubmit={handleSubmit}>
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
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-dark">Login</button>
//       </form>
//       <p>
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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    window.location.reload(); // Reload the page upon submission
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const renderTooltip = (props) => (
    <Tooltip id="email-tooltip" {...props}>
      Email must contain @ and end with a valid domain (e.g., .com, .ca).
    </Tooltip>
  );

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
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
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
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

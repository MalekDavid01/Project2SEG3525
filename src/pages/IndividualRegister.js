// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, ProgressBar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import '../styles/Register.css';

// const IndividualRegister = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     teamName: '',
//     competitionLevel: '',
//     ageGroup: '',
//     teamGender: '',
//     dayOfWeek: '',
//     managerFirstName: '',
//     managerLastName: '',
//     managerEmail: '',
//     managerPhone: '',
//     paymentMethod: '',
//     creditCardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const [errors, setErrors] = useState({});

//   const nextStep = () => {
//     if (validateForm()) {
//       setStep(step + 1);
//     }
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const requiredFields = {
//       1: ['teamName', 'competitionLevel', 'ageGroup', 'teamGender', 'dayOfWeek'],
//       2: ['managerFirstName', 'managerLastName', 'managerEmail', 'managerPhone'],
//       3: ['paymentMethod', 'creditCardNumber', 'expiryDate', 'cvv']
//     };

//     requiredFields[step].forEach(field => {
//       if (!formData[field]) {
//         newErrors[field] = 'This field is required';
//       }
//     });

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const getInputClass = (field) => (errors[field] ? 'is-invalid' : '');

//   return (
//     <Container fluid className="register-container">
//       <h2 className="register-title">Individual Registration</h2>
//       <div className="progress-bar-container">
//         <ProgressBar now={(step / 4) * 100} />
//       </div>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Link to="/register" className="position-absolute start-0">
//             <Button variant="dark" className="back-button-register">
//             <FaArrowLeft className="me-2" />
//               Back to Registration Type Selection
//             </Button>
//           </Link>
//           {step === 1 && (
//             <div className="form-step">
//               <h3>Step 1: Team Information</h3>
//               <p>Please provide the team's basic information you want to join.</p>
//               <Form>
//                 <Form.Group controlId="teamName">
//                   <Form.Label>Team Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="teamName"
//                     placeholder="Team Name"
//                     value={formData.teamName}
//                     onChange={handleChange}
//                     className={getInputClass('teamName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.teamName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="competitionLevel">
//                   <Form.Label>Competition Level (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="competitionLevel"
//                     value={formData.competitionLevel}
//                     onChange={handleChange}
//                     className={getInputClass('competitionLevel')}
//                   >
//                     <option value="">Select Competition Level</option>
//                     <option>Competitive</option>
//                     <option>Recreational</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.competitionLevel}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="ageGroup">
//                   <Form.Label>Age Group (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="ageGroup"
//                     value={formData.ageGroup}
//                     onChange={handleChange}
//                     className={getInputClass('ageGroup')}
//                   >
//                     <option value="">Select Age Group</option>
//                     <option>Adult (18+)</option>
//                     <option>Teenager (13-17)</option>
//                     <option>Kids (8-12)</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.ageGroup}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="teamGender">
//                   <Form.Label>Team Gender (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="teamGender"
//                     value={formData.teamGender}
//                     onChange={handleChange}
//                     className={getInputClass('teamGender')}
//                   >
//                     <option value="">Select Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.teamGender}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="dayOfWeek">
//                   <Form.Label>Day of the Week to Play Games (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="dayOfWeek"
//                     value={formData.dayOfWeek}
//                     onChange={handleChange}
//                     className={getInputClass('dayOfWeek')}
//                   >
//                     <option value="">Select Day of the Week</option>
//                     <option>Monday</option>
//                     <option>Tuesday</option>
//                     <option>Wednesday</option>
//                     <option>Thursday</option>
//                     <option>Friday</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.dayOfWeek}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="dark" onClick={nextStep} className="mt-3">
//                   Next Step
//                 </Button>
//               </Form>
//             </div>
//           )}
//           {step === 2 && (
//             <div className="form-step">
//               <h3>Step 2: Player Information</h3>
//               <p>Please provide your personal contact information.</p>
//               <Form>
//                 <Form.Group controlId="managerFirstName">
//                   <Form.Label>First Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerFirstName"
//                     placeholder="First Name"
//                     value={formData.managerFirstName}
//                     onChange={handleChange}
//                     className={getInputClass('managerFirstName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerFirstName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerLastName">
//                   <Form.Label>Last Name (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerLastName"
//                     placeholder="Last Name"
//                     value={formData.managerLastName}
//                     onChange={handleChange}
//                     className={getInputClass('managerLastName')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerLastName}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerEmail">
//                   <Form.Label>Email (required)</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="managerEmail"
//                     placeholder="something@example.com"
//                     value={formData.managerEmail}
//                     onChange={handleChange}
//                     className={getInputClass('managerEmail')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerEmail}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="managerPhone">
//                   <Form.Label>Phone Number (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="managerPhone"
//                     placeholder="(XXX) XXX - XXXX"
//                     value={formData.managerPhone}
//                     onChange={handleChange}
//                     className={getInputClass('managerPhone')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.managerPhone}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Button variant="dark" onClick={prevStep} className="mt-3">
//                   Go Back
//                 </Button>
//                 <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
//                   Next Step
//                 </Button>
//               </Form>
//             </div>
//           )}
//           {step === 3 && (
//             <div className="form-step">
//               <h3>Step 3: Payment</h3>
//               <p>A $20 fee is required to complete your registration. Please enter your payment details.</p>
//               <Form>
//                 <Form.Group controlId="paymentMethod">
//                   <Form.Label>Payment Method (required)</Form.Label>
//                   <Form.Control
//                     as="select"
//                     name="paymentMethod"
//                     value={formData.paymentMethod}
//                     onChange={handleChange}
//                     className={getInputClass('paymentMethod')}
//                   >
//                     <option value="">Select Payment Method</option>
//                     <option>Credit Card</option>
//                     <option>Debit Card</option>
//                   </Form.Control>
//                   <Form.Control.Feedback type="invalid">
//                     {errors.paymentMethod}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="creditCardNumber">
//                   <Form.Label>Card Number (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="creditCardNumber"
//                     placeholder="XXXX - XXXX - XXXX - XXXX"
//                     value={formData.creditCardNumber}
//                     onChange={handleChange}
//                     className={getInputClass('creditCardNumber')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.creditCardNumber}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="expiryDate">
//                   <Form.Label>Expiry Date (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="expiryDate"
//                     placeholder="MM/YYYY"
//                     value={formData.expiryDate}
//                     onChange={handleChange}
//                     className={getInputClass('expiryDate')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.expiryDate}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="cvv">
//                   <Form.Label>CVV (required)</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="cvv"
//                     placeholder="XXX"
//                     value={formData.cvv}
//                     onChange={handleChange}
//                     className={getInputClass('cvv')}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.cvv}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <div className="d-flex justify-content-between">
//                   <Button variant="dark" onClick={prevStep} className="mt-3">
//                     Go Back
//                   </Button>
//                   <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
//                     Next Step
//                   </Button>
//                 </div>
//               </Form>
//             </div>
//           )}
//           {step === 4 && (
//             <div className="form-step">
//               <h3>Thank You</h3>
//               <p>Thank you for registering to a team of the Ottawa Soccer Champions League.</p>
//               <p>Shortly you will find a confirmation in your email.</p>
//               <div className="d-flex justify-content-center">
//                 <Button variant="dark" href="/" className="mt-3">
//                   Continue to Home Page
//                 </Button>
//               </div>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default IndividualRegister;




import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ProgressBar, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/Register.css';

const IndividualRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamName: '',
    competitionLevel: '',
    ageGroup: '',
    teamGender: '',
    dayOfWeek: '',
    managerFirstName: '',
    managerLastName: '',
    managerEmail: '',
    managerPhone: '',
    paymentMethod: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    const phonePattern2 = /^\(\d{3}\) \d{3} - \d{4}$/;
    const plainPhonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber)|| phonePattern2.test(phoneNumber) || plainPhonePattern.test(phoneNumber);
  };
  
  const validateCreditCard = (cardNumber) => {
    const cardPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    const plainCardPattern = /^\d{12}$/;
    return cardPattern.test(cardNumber) || plainCardPattern.test(cardNumber);
  };  

  const validateExpiryDate = (expiryDate) => {
    const datePattern = /^(0[1-9]|1[0-2])\/\d{4}$/;
    return datePattern.test(expiryDate);
  };

  const validateCVV = (cvv) => {
    const cvvPattern = /^\d{3}$/;
    return cvvPattern.test(cvv);
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = {
      1: ['teamName', 'competitionLevel', 'ageGroup', 'teamGender', 'dayOfWeek'],
      2: ['managerFirstName', 'managerLastName', 'managerEmail', 'managerPhone'],
      3: ['paymentMethod', 'creditCardNumber', 'expiryDate', 'cvv']
    };

    requiredFields[step]?.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      } else {
        if (field === 'managerEmail' && !validateEmail(formData[field])) {
          newErrors[field] = 'Please enter a valid email address (e.g., someone@example.com)';
        }
        if (field === 'managerPhone' && !validatePhoneNumber(formData[field])) {
          newErrors[field] = 'Please enter a valid phone number (10 digits)';
        }
        if (field === 'creditCardNumber' && !validateCreditCard(formData[field])) {
          newErrors[field] = 'Please enter a valid card number (12 digits)';
        }
        if (field === 'expiryDate' && !validateExpiryDate(formData[field])) {
          newErrors[field] = 'Please enter a valid expiry date in the format MM/YYYY';
        }
        if (field === 'cvv' && !validateCVV(formData[field])) {
          newErrors[field] = 'Please enter a valid CVV (3 digits)';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getInputClass = (field) => (errors[field] ? 'is-invalid' : '');

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Email must contain @ and end with a valid domain (e.g., .com, .ca).
    </Tooltip>
  );

  const renderPhoneTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Phone number must be 10 digits.
    </Tooltip>
  );

  const renderCardTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Credit card number must be 12 digits.
    </Tooltip>
  );

  const renderExpiryTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Expiry date must be in the format MM/YYYY.
    </Tooltip>
  );

  const renderCvvTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      CVV must be 3 digits.
    </Tooltip>
  );

  return (
    <Container fluid className="register-container">
      <h2 className="register-title">Individual Registration</h2>
      <div className="progress-bar-container">
        <ProgressBar now={(step / 4) * 100} />
      </div>
      <Row className="justify-content-center">
        <Col md={6}>
          <Link to="/register" className="position-absolute start-0">
            <Button variant="dark" className="back-button-register">
              <FaArrowLeft className="me-2" />
              Back to Registration Type Selection
            </Button>
          </Link>
          {step === 1 && (
            <div className="form-step">
              <h3>Step 1: Team Information</h3>
              <p>Please provide the team's basic information you want to join.</p>
              <Form>
                <Form.Group controlId="teamName">
                  <Form.Label>Team Name (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="teamName"
                    placeholder="Team Name"
                    value={formData.teamName}
                    onChange={handleChange}
                    className={getInputClass('teamName')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.teamName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="competitionLevel">
                  <Form.Label>Competition Level (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="competitionLevel"
                    value={formData.competitionLevel}
                    onChange={handleChange}
                    className={getInputClass('competitionLevel')}
                  >
                    <option value="">Select Competition Level</option>
                    <option>Competitive</option>
                    <option>Recreational</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.competitionLevel}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="ageGroup">
                  <Form.Label>Age Group (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className={getInputClass('ageGroup')}
                  >
                    <option value="">Select Age Group</option>
                    <option>Adult (18+)</option>
                    <option>Teenager (13-17)</option>
                    <option>Kids (8-12)</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.ageGroup}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="teamGender">
                  <Form.Label>Team Gender (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="teamGender"
                    value={formData.teamGender}
                    onChange={handleChange}
                    className={getInputClass('teamGender')}
                  >
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.teamGender}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="dayOfWeek">
                  <Form.Label>Day of the Week to Play Games (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="dayOfWeek"
                    value={formData.dayOfWeek}
                    onChange={handleChange}
                    className={getInputClass('dayOfWeek')}
                  >
                    <option value="">Select Day of the Week</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.dayOfWeek}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="text-center">
                <Button variant="dark" onClick={nextStep} className="mt-3">
                  Next Step
                </Button>
                </div>
              </Form>
            </div>
          )}
          {step === 2 && (
            <div className="form-step">
              <h3>Step 2: Player Information</h3>
              <p>Please provide your personal contact information.</p>
              <Form>
                <Form.Group controlId="managerFirstName">
                  <Form.Label>First Name (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="managerFirstName"
                    placeholder="First Name"
                    value={formData.managerFirstName}
                    onChange={handleChange}
                    className={getInputClass('managerFirstName')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.managerFirstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="managerLastName">
                  <Form.Label>Last Name (required)</Form.Label>
                  <Form.Control
                    type="text"
                    name="managerLastName"
                    placeholder="Last Name"
                    value={formData.managerLastName}
                    onChange={handleChange}
                    className={getInputClass('managerLastName')}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.managerLastName}
                  </Form.Control.Feedback>
                </Form.Group>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Form.Group controlId="managerEmail">
                    <Form.Label>Email (required)</Form.Label>
                    <Form.Control
                      type="email"
                      name="managerEmail"
                      placeholder="someone@example.com"
                      value={formData.managerEmail}
                      onChange={handleChange}
                      className={getInputClass('managerEmail')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.managerEmail}
                    </Form.Control.Feedback>
                  </Form.Group>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderPhoneTooltip}
                >
                  <Form.Group controlId="managerPhone">
                    <Form.Label>Phone Number (required)</Form.Label>
                    <Form.Control
                      type="text"
                      name="managerPhone"
                      placeholder="(XXX) XXX - XXXX"
                      value={formData.managerPhone}
                      onChange={handleChange}
                      className={getInputClass('managerPhone')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.managerPhone}
                    </Form.Control.Feedback>
                  </Form.Group>
                </OverlayTrigger>

                <Button variant="dark" onClick={prevStep} className="mt-3">
                  Go Back
                </Button>
                <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
                  Next Step
                </Button>
              </Form>
            </div>
          )}
          {step === 3 && (
            <div className="form-step">
              <h3>Step 3: Payment</h3>
              <p>A $20 fee is required to complete your registration. Please enter your payment details.</p>
              <Form>
                <Form.Group controlId="paymentMethod">
                  <Form.Label>Payment Method (required)</Form.Label>
                  <Form.Control
                    as="select"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className={getInputClass('paymentMethod')}
                  >
                    <option value="">Select Payment Method</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.paymentMethod}
                  </Form.Control.Feedback>
                </Form.Group>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderCardTooltip}
                >
                  <Form.Group controlId="creditCardNumber">
                    <Form.Label>Card Number (required)</Form.Label>
                    <Form.Control
                      type="text"
                      name="creditCardNumber"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={formData.creditCardNumber}
                      onChange={handleChange}
                      className={getInputClass('creditCardNumber')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.creditCardNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderExpiryTooltip}
                >
                  <Form.Group controlId="expiryDate">
                    <Form.Label>Expiry Date (required)</Form.Label>
                    <Form.Control
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YYYY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className={getInputClass('expiryDate')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expiryDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderCvvTooltip}
                >
                  <Form.Group controlId="cvv">
                    <Form.Label>CVV (required)</Form.Label>
                    <Form.Control
                      type="text"
                      name="cvv"
                      placeholder="XXX"
                      value={formData.cvv}
                      onChange={handleChange}
                      className={getInputClass('cvv')}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cvv}
                    </Form.Control.Feedback>
                  </Form.Group>
                </OverlayTrigger>

                <div className="d-flex justify-content-between">
                  <Button variant="dark" onClick={prevStep} className="mt-3">
                    Go Back
                  </Button>
                  <Button variant="dark" onClick={nextStep} className="mt-3 ml-2">
                    Next Step
                  </Button>
                </div>
              </Form>
            </div>
          )}
          {step === 4 && (
            <div className="form-step">
              <h3>Thank You</h3>
              <p>Thank you for applying to becoming a member of a team of the Ottawa Soccer Champions League.</p>
              <p>Shortly you will receive your application status in your email informing you whether the team has chosen to proceed with you or not.</p>
              <div className="d-flex justify-content-center">
                <Button variant="dark" href="/" className="mt-3">
                  Continue to Home Page
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualRegister;

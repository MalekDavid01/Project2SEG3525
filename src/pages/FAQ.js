// // src/pages/FAQ.js

// import React, { useState } from 'react';
// import { Container, Card } from 'react-bootstrap';
// import '../styles/FAQ.css';

// const FAQ = () => {
//   const [open, setOpen] = useState({});

//   const toggle = (index) => {
//     setOpen((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   const faqs = [
//     {
//       question: 'How do I register my team?',
//       answer: 'To register your team, navigate to the "Register" page from the navigation bar. You will be prompted to provide details about your team, including team name, competition level, age group, and manager information. Follow the steps to complete your registration.',
//     },
//     {
//       question: 'Can individual players join a team?',
//       answer: 'Yes, individual players can join a team. Go to the "Register" page and select "Individual Registration". Provide your personal information and select the team you wish to join.',
//     },
//     {
//       question: 'What are the competition levels available?',
//       answer: 'We offer both Competitive and Recreational levels to cater to different skill levels and preferences. Choose the level that best suits your team\'s abilities.',
//     },
//     {
//       question: 'How can I manage my team\'s practice schedule?',
//       answer: 'Team managers can manage the practice schedule through the "Team Management" section after logging in. You can select available practice days and times that best fit your team\'s needs.',
//     },
//     {
//       question: 'What should I do if I need to cancel a registration?',
//       answer: 'If you need to cancel a registration, please contact our support team at support@ottawasoccerchampions.com. Provide your registration details, and we will assist you with the cancellation process.',
//     },
//     {
//       question: 'How do I get the latest news and updates about the league?',
//       answer: 'You can stay updated with the latest news and announcements by visiting the "News" section on our website. You can also follow our social media channels for real-time updates.',
//     },
//     {
//       question: 'What are the game schedules and locations?',
//       answer: 'Game schedules and locations are posted in the "Explore Competitions" section. You can find detailed information about the timings and venues for each competition.',
//     },
//     {
//       question: 'How do I contact the league organizers?',
//       answer: 'You can contact the league organizers through the "Contact Us" page. Fill out the form with your query, and we will get back to you as soon as possible.',
//     },
//     {
//       question: 'Are there any fees for team registration?',
//       answer: 'Yes, there is a registration fee that covers administrative costs and ensures your team\'s participation in the league. The exact amount will be specified during the registration process.',
//     },
//     {
//       question: 'Can I change my team\'s information after registration?',
//       answer: 'Yes, you can update your team\'s information by logging into your account and navigating to the "Team Management" section. Make sure to save any changes you make.',
//     },
//     {
//       question: 'What is the refund policy?',
//       answer: 'Our refund policy allows for refunds up to two weeks before the start of the season. After this period, refunds will not be issued except for exceptional circumstances. Contact support for more details.',
//     },
//     {
//       question: 'How do I report a problem or issue?',
//       answer: 'If you encounter any issues, please report them through the "Contact Us" page. Provide detailed information about the problem, and our support team will assist you promptly.',
//     },
//     {
//       question: 'What equipment is required for participation?',
//       answer: 'All players must wear appropriate soccer gear, including shin guards, soccer cleats, and team uniforms. The league provides the soccer balls for matches.',
//     },
//     {
//       question: 'How are teams matched for competitions?',
//       answer: 'Teams are matched based on their competition level, age group, and overall skill level to ensure fair and balanced matches throughout the season.',
//     },
//     {
//       question: 'Can I volunteer to help with league activities?',
//       answer: 'Yes, we welcome volunteers! If you are interested in volunteering, please contact us through the "Contact Us" page with your details and how you would like to help.',
//     },
//     {
//       question: 'How do I get a copy of the league rules and regulations?',
//       answer: 'The league rules and regulations are available on our website under the "Rules & Regulations" section. You can download a copy for your reference.',
//     },
//     {
//       question: 'Are there any sponsorship opportunities?',
//       answer: 'Yes, we offer various sponsorship opportunities for businesses and individuals who want to support the league. Please contact us for more information on sponsorship packages.',
//     },
//     {
//       question: 'What should I do if I have a scheduling conflict?',
//       answer: 'If you have a scheduling conflict, please notify the league organizers as soon as possible. We will try our best to accommodate your needs and reschedule matches if necessary.',
//     },
//     {
//       question: 'How can I provide feedback about the league?',
//       answer: 'We value your feedback! You can provide feedback through the "Contact Us" page or directly to league organizers. Your input helps us improve the league experience for everyone.',
//     },
//     {
//       question: 'Is there a code of conduct for players and teams?',
//       answer: 'Yes, all players and teams are expected to adhere to the league\'s code of conduct, which promotes sportsmanship, respect, and fair play. Violations may result in disciplinary actions.',
//     },
//   ];

//   return (
//     <Container className="faq-container">
//       <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>
//       {faqs.map((faq, index) => (
//         <Card key={index} className="faq-card">
//           <Card.Header onClick={() => toggle(index)} className="faq-question">
//             {faq.question}
//           </Card.Header>
//           {open[index] && <Card.Body className="faq-answer">{faq.answer}</Card.Body>}
//         </Card>
//       ))}
//     </Container>
//   );
// };

// export default FAQ;



// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import '../styles/FAQ.css';

// const FAQ = () => {
//   return (
//     <div className="faq-container">
//       <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
//       <Accordion>
//         <Accordion.Item eventKey="0" className="accordion-item">
//           <Accordion.Header className="accordion-header">How do I register my team?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             You can register your team by visiting the registration page and filling out the required information.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="1" className="accordion-item">
//           <Accordion.Header className="accordion-header">Can individual players join a team?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Yes, individual players can join a team by registering as an individual. We will place you in a team that matches your skill level.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="2" className="accordion-item">
//           <Accordion.Header className="accordion-header">What are the competition levels available?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             We offer both competitive and recreational levels to accommodate different skill levels and preferences.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="3" className="accordion-item">
//           <Accordion.Header className="accordion-header">How can I manage my team's practice schedule?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Team managers can manage practice schedules through their team dashboard after logging in.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="4" className="accordion-item">
//           <Accordion.Header className="accordion-header">What should I do if I need to cancel a registration?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             If you need to cancel a registration, please contact the league organizers as soon as possible.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="5" className="accordion-item">
//           <Accordion.Header className="accordion-header">How do I get the latest news and updates about the league?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             The latest news and updates can be found on our news page, or you can subscribe to our newsletter.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="6" className="accordion-item">
//           <Accordion.Header className="accordion-header">What are the game schedules and locations?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Game schedules and locations will be available on the league's website once the season schedule is finalized.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="7" className="accordion-item">
//           <Accordion.Header className="accordion-header">How do I contact the league organizers?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             You can contact the league organizers through the contact form on our website or by emailing us directly.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="8" className="accordion-item">
//           <Accordion.Header className="accordion-header">Are there any fees for team registration?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Yes, there are registration fees that vary depending on the competition level and age group.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="9" className="accordion-item">
//           <Accordion.Header className="accordion-header">What should I bring to the games?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Players should bring their own equipment, including cleats, shin guards, and water bottles. Uniforms will be provided by the league.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="10" className="accordion-item">
//           <Accordion.Header className="accordion-header">How are teams formed for individual registrations?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Teams for individual registrations are formed based on skill level, age group, and availability.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="11" className="accordion-item">
//           <Accordion.Header className="accordion-header">What happens if a game is canceled due to weather?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             If a game is canceled due to weather, it will be rescheduled. Notifications will be sent out via email and posted on our website.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="12" className="accordion-item">
//           <Accordion.Header className="accordion-header">Can I change my team after registration?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Changes to team assignments are generally not allowed after registration. However, special requests can be made to the league organizers.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="13" className="accordion-item">
//           <Accordion.Header className="accordion-header">Is there a code of conduct for players?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Yes, all players are expected to adhere to the league's code of conduct, which includes sportsmanship, respect, and fair play.
//           </Accordion.Body>
//         </Accordion.Item>
//         <Accordion.Item eventKey="14" className="accordion-item">
//           <Accordion.Header className="accordion-header">Are there any volunteer opportunities?</Accordion.Header>
//           <Accordion.Body className="accordion-body">
//             Yes, we welcome volunteers to help with various tasks throughout the season. Please contact us for more information.
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     </div>
//   );
// };

// export default FAQ;



import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
      <Accordion>
        <Accordion.Item eventKey="0" className="accordion-item">
          <Accordion.Header className="accordion-header">How do I register my team?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            You can register your team by visiting the registration page and filling out the required information.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="accordion-item">
          <Accordion.Header className="accordion-header">Can individual players join a team?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes, individual players can join a team by registering as an individual. We will place you in a team that matches your skill level.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="accordion-item">
          <Accordion.Header className="accordion-header">What are the competition levels available?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            We offer both competitive and recreational levels to accommodate different skill levels and preferences.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="accordion-item">
          <Accordion.Header className="accordion-header">How can I manage my team's practice schedule?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            Team managers can manage practice schedules through their team dashboard after logging in.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="accordion-item">
          <Accordion.Header className="accordion-header">What should I do if I need to cancel a registration?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            If you need to cancel a registration, please contact the league organizers as soon as possible.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8" className="accordion-item">
          <Accordion.Header className="accordion-header">Are there any fees for team registration?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes, there are registration fees that vary depending on the competition level and age group.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9" className="accordion-item">
          <Accordion.Header className="accordion-header">What should I bring to the games?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            Players should bring their own equipment, including cleats, shin guards, and water bottles. Uniforms will be provided by the league.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12" className="accordion-item">
          <Accordion.Header className="accordion-header">Can I change my team after registration?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            Changes to team assignments are generally not allowed after registration. However, special requests can be made to the league organizers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="13" className="accordion-item">
          <Accordion.Header className="accordion-header">Is there a code of conduct for players?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes, all players are expected to adhere to the league's code of conduct, which includes sportsmanship, respect, and fair play.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="14" className="accordion-item">
          <Accordion.Header className="accordion-header">Are there any volunteer opportunities?</Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes, we welcome volunteers to help with various tasks throughout the season. Please contact us for more information.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;

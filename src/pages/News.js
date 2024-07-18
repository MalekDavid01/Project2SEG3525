// // import React, { useContext } from 'react';
// // import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';
// // import { LanguageContext } from '../LanguageContext';
// // import newsData from '../data/NewsData'; // Import the data
// // import '../styles/News.css';

// // const News = () => {
// //   const { language, setLanguage } = useContext(LanguageContext);

// //   return (
// //     <Container fluid className="news-container">
// //       <h2 className="news-title">{language === 'en' ? 'Our Latest News!' : 'آخر الأخبار!'}</h2>
// //       <Dropdown className="language-dropdown">
// //         <Dropdown.Toggle variant="secondary" id="dropdown-basic">
// //           🌐 {language === 'en' ? 'English' : 'العربية'}
// //         </Dropdown.Toggle>
// //         <Dropdown.Menu>
// //           <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
// //           <Dropdown.Item onClick={() => setLanguage('ar')}>العربية</Dropdown.Item>
// //         </Dropdown.Menu>
// //       </Dropdown>
// //       <Row>
// //         {newsData.map((news) => (
// //           <Col md={6} key={news.id} className="mb-4">
// //             <Card className="news-card h-100">
// //               <Link to={`/news/${news.id}`}>
// //                 <Card.Img variant="top" src={news.image} alt={news.title[language]} className="news-card-image" />
// //               </Link>
// //               <Card.Body className="d-flex flex-column">
// //                 <Card.Title className="news-card-title">{news.title[language]}</Card.Title>
// //                 <Card.Text className="news-card-description">
// //                   {news.content[language].split('\n')[0]}
// //                 </Card.Text>
// //                 <Card.Text><small className="text-muted">{news.date[language]}</small></Card.Text>
// //                 <Link to={`/news/${news.id}`} className="mt-auto">
// //                   <Button variant="dark">{language === 'en' ? 'Read More' : 'اقرأ المزيد'}</Button>
// //                 </Link>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default News;


// import React, { useContext } from 'react';
// import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { LanguageContext } from '../LanguageContext';
// import newsData from '../data/NewsData';
// import '../styles/News.css';

// const News = () => {
//   const { language, setLanguage } = useContext(LanguageContext);

//   return (
//     <Container fluid className="news-container" lang={language} role="main">
//       <h2 className="news-title" aria-live="polite">{language === 'en' ? 'Our Latest News!' : 'آخر الأخبار!'}</h2>
//       <Dropdown className="language-dropdown" role="navigation">
//         <Dropdown.Toggle variant="secondary" id="dropdown-basic">
//           🌐 {language === 'en' ? 'English' : 'العربية'}
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
//           <Dropdown.Item onClick={() => setLanguage('ar')}>العربية</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       <Row>
//         {newsData.map((news) => (
//           <Col md={6} key={news.id} className="mb-4">
//             <Card className="news-card h-100">
//               <Link to={`/news/${news.id}`} aria-label={news.title[language]}>
//                 <Card.Img 
//                   variant="top" 
//                   src={news.image} 
//                   alt={news.title[language]} 
//                   className="news-card-image" 
//                 />
//               </Link>
//               <Card.Body className="d-flex flex-column">
//                 <Card.Title className="news-card-title" aria-label={news.title[language]}>
//                   {news.title[language]}
//                 </Card.Title>
//                 <Card.Text className="news-card-description">
//                   {news.shortDescription[language]}
//                 </Card.Text>
//                 <Card.Text>
//                   <small className="text-muted">{news.date[language]}</small>
//                 </Card.Text>
//                 <Link to={`/news/${news.id}`} className="mt-auto" aria-label={language === 'en' ? 'Read More' : 'اقرأ المزيد'}>
//                   <Button variant="dark">{language === 'en' ? 'Read More' : 'اقرأ المزيد'}</Button>
//                 </Link>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default News;

import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import newsData from '../data/NewsData'; // Import the data
import '../styles/News.css';

const News = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);

  return (
    <Container fluid className="news-container" role="main">
      <h2 className="news-title">{translations.newsTitle[language]}</h2>
      <Dropdown className="language-dropdown" role="navigation" aria-label="Language Selection">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {language === 'en' ? 'English' : 'العربية'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => setLanguage('ar')}>العربية</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        {newsData.map((news) => (
          <Col md={6} key={news.id} className="mb-4">
            <Card className="news-card h-100">
              <Link to={`/news/${news.id}`} aria-label={news.title[language]}>
                <Card.Img variant="top" src={news.image} alt={news.title[language]} className="news-card-image" />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="news-card-title">{news.title[language]}</Card.Title>
                <Card.Text className="news-card-description">
                  {news.date[language]}
                </Card.Text>
                <Link to={`/news/${news.id}`} className="mt-auto" aria-label={`${translations.readMore[language]}: ${news.title[language]}`}>
                  <Button variant="dark">{translations.readMore[language]}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;


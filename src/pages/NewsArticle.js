// import React, { useContext } from 'react';
// import { Container, Button,  Dropdown} from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';
// import { LanguageContext } from '../LanguageContext';
// import newsData from '../data/NewsData';
// import '../styles/News.css';

// const NewsArticle = () => {
//   const { language, setLanguage, translations } = useContext(LanguageContext);
//   const { id } = useParams();
//   const news = newsData.find(item => item.id === parseInt(id));

//   if (!news) {
//     return <div>{translations.articleNotFound[language]}</div>;
//   }

//   return (
//     <Container fluid className="news-article-container">
//       <h2 className="news-title">{translations.newsTitle[language]}</h2>
//       <Dropdown className="language-dropdown">
//         <Dropdown.Toggle variant="secondary" id="dropdown-basic">
//           {language === 'en' ? 'English' : 'العربية'}
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
//           <Dropdown.Item onClick={() => setLanguage('ar')}>العربية</Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//       <div className="d-flex align-items-center justify-content-center mb-3 position-relative">
//         <Link to="/news" className="position-absolute start-0">
//           <Button variant="dark" className="back-button">
//             <FaArrowLeft className="me-2" />
//             {translations.back[language]}
//           </Button>
//         </Link>
//         <h2 className="news-article-header m-0">{news.title[language]}</h2>
//       </div>
//       <div className="text-center">
//         <p className="news-article-date">{translations.date[language]}: {news.date[language]}</p>
//         <p className="news-article-author">{translations.author[language]}: {news.author[language]}</p>
//       </div>
//       <img src={news.image} alt={news.title[language]} className="news-article-image" />
//       <div className="news-article-content">
//         {news.content[language].split('\n').map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default NewsArticle;


import React, { useContext } from 'react';
import { Container, Button, Dropdown } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { LanguageContext } from '../LanguageContext';
import newsData from '../data/NewsData';
import '../styles/News.css';

const NewsArticle = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);
  const { id } = useParams();
  const news = newsData.find(item => item.id === parseInt(id));

  if (!news) {
    return <div>{translations.articleNotFound[language]}</div>;
  }

  return (
    <Container fluid className="news-article-container" role="main"> {/* Added role="main" */}
      <h2 className="news-title">{translations.newsTitle[language]}</h2>
      <Dropdown className="language-dropdown" role="navigation" aria-label="Language Selection"> {/* Added role and aria-label */}
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {language === 'en' ? 'English' : 'العربية'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setLanguage('en')}>English</Dropdown.Item>
          <Dropdown.Item onClick={() => setLanguage('ar')}>العربية</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="d-flex align-items-center justify-content-center mb-3 position-relative">
        <Link to="/news" className="position-absolute start-0" aria-label="Back to News"> {/* Added aria-label */}
          <Button variant="dark" className="back-button">
            <FaArrowLeft className="me-2" />
            {translations.back[language]}
          </Button>
        </Link>
        <h2 className="news-article-header m-0">{news.title[language]}</h2>
      </div>
      <div className="text-center">
        <p className="news-article-date">{translations.date[language]}: {news.date[language]}</p>
        <p className="news-article-author">{translations.author[language]}: {news.author[language]}</p>
      </div>
      <img src={news.image} alt={news.title[language]} className="news-article-image" /> {/* Added alt attribute */}
      <div className="news-article-content">
        {news.content[language].split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Container>
  );
};

export default NewsArticle;

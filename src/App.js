// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './components/NavigationBar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import ExploreCompetitions from './pages/ExploreCompetitions';
// import LeagueDetail from './pages/LeagueDetail'; 
// import Register from './pages/Register';
// import News from './pages/News';
// import NewsArticle from './pages/NewsArticle';
// import AboutUs from './pages/AboutUs';
// import InitialRegistration from './pages/InitialRegistration';
// import IndividualRegister from './pages/IndividualRegister';
// import FAQ from './pages/FAQ';
// import LanguageSwitcher from './components/LanguageSwitcher'; // Import LanguageSwitcher
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './i18n';


// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore-competitions" element={<ExploreCompetitions />} />
//           <Route path="/league/:id" element={<LeagueDetail />} />
//           <Route path="/register" element={<InitialRegistration />} />
//           <Route path="/register/team" element={<Register />} />
//           <Route path="/register/individual" element={<IndividualRegister />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/news/:id" element={<NewsArticle />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/faq" element={<FAQ />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExploreCompetitions from './pages/ExploreCompetitions';
import LeagueDetail from './pages/LeagueDetail'; 
import Register from './pages/Register';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import AboutUs from './pages/AboutUs';
import InitialRegistration from './pages/InitialRegistration';
import IndividualRegister from './pages/IndividualRegister';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FAQ from './pages/FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore-competitions" element={<ExploreCompetitions />} />
            <Route path="/league/:id" element={<LeagueDetail />} />
            <Route path="/register" element={<InitialRegistration />} />
            <Route path="/register/team" element={<Register />} />
            <Route path="/register/individual" element={<IndividualRegister />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
